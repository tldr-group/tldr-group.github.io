import { useState, useRef } from "react";

import { Person, PersonSchema, gracefulParse } from "../types";

import teamJSON from "../content/text/team.json";

type LinkSVGData = {
  fill: string;
  path: string;
  viewBox: string;
};
const DEFAULT_VIEWBOX = "0 0 24 24";

enum LinkTypes {
  LINKEDIN,
  SCHOLAR,
  TWITTER,
  POLARON,
}

const LinkToSVG: Record<LinkTypes, LinkSVGData> = {
  [LinkTypes.LINKEDIN]: {
    fill: "#0A66C2",
    path: "M6.94 8.5H3.56V19h3.38V8.5ZM5.25 3A1.97 1.97 0 0 0 3.28 4.97c0 1.08.87 1.97 1.97 1.97a1.97 1.97 0 1 0 0-3.94ZM20.72 12.36c0-3.16-1.69-4.63-3.95-4.63-1.82 0-2.63 1-3.08 1.7V8.5h-3.38c.04.62 0 10.5 0 10.5h3.38v-5.86c0-.31.02-.62.11-.84.25-.62.82-1.27 1.77-1.27 1.25 0 1.75.96 1.75 2.36V19H21s.04-5.98.04-6.64Z",
    viewBox: DEFAULT_VIEWBOX,
  },
  [LinkTypes.SCHOLAR]: {
    fill: "#4285F4",
    path: "M12 3 1 9l11 6 9-4.91V17h2V9L12 3Zm0 13L5.5 12.45V16c0 2.49 2.91 4.5 6.5 4.5s6.5-2.01 6.5-4.5v-3.55L12 16Z",
    viewBox: DEFAULT_VIEWBOX,
  },
  [LinkTypes.TWITTER]: {
    fill: "#1DA1F2",
    path: "M18.9 2H22l-6.77 7.74L23 22h-6.1l-4.78-6.24L6.66 22H3.55l7.24-8.28L1 2h6.26l4.32 5.7L18.9 2Zm-1.07 18h1.69L6.35 3.9H4.53L17.83 20Z",
    viewBox: DEFAULT_VIEWBOX,
  },
  [LinkTypes.POLARON]: {
    fill: "#395EE3",
    path: "M0 20.9387C0 19.0592 2.05206 17.8997 3.66201 18.8696L65.6612 56.2185C66.3867 56.6555 66.8303 57.4406 66.8303 58.2876V197.581C66.8303 199.46 64.7782 200.62 63.1683 199.65L1.16909 162.301C0.443596 161.864 0 161.079 0 160.232V20.9387Z M48.31 2.41929C48.31 0.539789 50.3621 -0.619668 51.972 0.35018L113.971 37.6991C114.697 38.1361 115.14 38.9212 115.14 39.7682V141.218C115.14 143.097 113.088 144.257 111.478 143.287L49.4791 105.938C48.7536 105.501 48.31 104.716 48.31 103.869V2.41929Z",
    viewBox: "0 0 130 200",
  },
};

const getLinkIcon = (text: string, url: string) => {
  const label = text.toLowerCase();
  const href = url.toLowerCase();

  const getSVG = (linkType: LinkTypes) => {
    const { fill, path, viewBox } = LinkToSVG[linkType];
    const style: React.CSSProperties = {
      marginRight: "0.25em",
    };
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        width="16"
        height="16"
        style={style}
        fill={fill}
        aria-hidden="true"
      >
        <path d={path} />
      </svg>
    );
  };

  if (label.includes("linkedin") || href.includes("linkedin.com")) {
    return getSVG(LinkTypes.LINKEDIN);
  }

  if (label.includes("scholar") || href.includes("scholar.google")) {
    return getSVG(LinkTypes.SCHOLAR);
  }

  if (label.includes("twitter") || href.includes("twitter.com") || href.includes("x.com")) {
    return getSVG(LinkTypes.TWITTER);
  }

  if (label.toLowerCase().includes("polaron")) {
    return getSVG(LinkTypes.POLARON);
  }

  return null;
};

const PersonComponent = ({ personData }: { personData: Person }) => {
  const { name, role, shortDesc, outLinks, imagePath } = personData;
  const [isHovered, setIsHovered] = useState(false);
  const touchStartPos = useRef<number | null>(null);

  // Pixels
  const scrollThreshold = 10;
  const w = 150;
  const h = 1.5 * w;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const handleExpand = (state: boolean) => {
    if (isMobile) {
      return;
    }

    setIsHovered(state);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartPos.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartPos.current === null) return;

    if (!isMobile) return;

    const touchEndPos = e.changedTouches[0].clientY;
    const distance = Math.abs(touchEndPos - touchStartPos.current);
    if (distance < scrollThreshold) {
      setIsHovered((prev) => !prev);
    }
    touchStartPos.current = null;
  };

  return (
    <div
      className="outlined-content person-card"
      onPointerEnter={() => handleExpand(true)}
      onPointerLeave={() => handleExpand(false)}
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchEnd={(e) => handleTouchEnd(e)}
    >
      {!isHovered && (
        <div>
          <img
            src={imagePath}
            alt={`${name}'s profile`}
            style={{ width: `${w}px`, height: `${h}px`, objectFit: "cover" }}
          />
        </div>
      )}

      <h3>{name}</h3>
      <p style={{ textAlign: "center", marginTop: "0em" }}>{role}</p>
      <p style={{ textAlign: "center", marginTop: "0.5em", fontStyle: "italic" }}>{shortDesc}</p>
      {isHovered && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5em",
            width: "100%",
            alignItems: "center",
            marginTop: "0.5em",
          }}
        >
          {outLinks.map((link, i) => (
            <a href={link.link} target="_blank" rel="noopener noreferrer" className="link-tag" key={i}>
              {getLinkIcon(link.text, link.link)}
              <span>{link.text}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export const Team = () => {
  const people: Person[] = gracefulParse(PersonSchema, teamJSON);

  // filter takes an array & returns new array with elements that match the boolean expression
  // in the first section, this is filtering for current members
  // we can then map over this filtered array to render a PersonComponent for each person, passing in their data as props
  return (
    <div>
      <h2>Core Team</h2>
      <div className="person-grid">
        {people
          .filter((p) => p.isCurrent)
          .map((person, i) => (
            <PersonComponent key={i} personData={person} />
          ))}
      </div>
      <h2>Former Members</h2>
      <div className="person-grid">
        {people
          .filter((p) => !p.isCurrent)
          .map((person, i) => (
            <PersonComponent key={i} personData={person} />
          ))}
      </div>
    </div>
  );
};
