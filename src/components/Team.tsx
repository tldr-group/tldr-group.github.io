import { useState, useRef } from "react";

import { Person, PersonSchema, gracefulParse } from "../types";

import teamJSON from "../content/text/team.json";

const getLinkIcon = (text: string, url: string) => {
  const label = text.toLowerCase();
  const href = url.toLowerCase();

  if (label.includes("linkedin") || href.includes("linkedin.com")) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="#0A66C2"
        aria-hidden="true"
      >
        <path d="M6.94 8.5H3.56V19h3.38V8.5ZM5.25 3A1.97 1.97 0 0 0 3.28 4.97c0 1.08.87 1.97 1.97 1.97a1.97 1.97 0 1 0 0-3.94ZM20.72 12.36c0-3.16-1.69-4.63-3.95-4.63-1.82 0-2.63 1-3.08 1.7V8.5h-3.38c.04.62 0 10.5 0 10.5h3.38v-5.86c0-.31.02-.62.11-.84.25-.62.82-1.27 1.77-1.27 1.25 0 1.75.96 1.75 2.36V19H21s.04-5.98.04-6.64Z" />
      </svg>
    );
  }

  if (label.includes("scholar") || href.includes("scholar.google")) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="#4285F4"
        aria-hidden="true"
      >
        <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3Zm0 13L5.5 12.45V16c0 2.49 2.91 4.5 6.5 4.5s6.5-2.01 6.5-4.5v-3.55L12 16Z" />
      </svg>
    );
  }

  if (
    label.includes("twitter") ||
    href.includes("twitter.com") ||
    href.includes("x.com")
  ) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="#1DA1F2"
        aria-hidden="true"
      >
        <path d="M18.9 2H22l-6.77 7.74L23 22h-6.1l-4.78-6.24L6.66 22H3.55l7.24-8.28L1 2h6.26l4.32 5.7L18.9 2Zm-1.07 18h1.69L6.35 3.9H4.53L17.83 20Z" />
      </svg>
    );
  }

  return null;
};

const PersonComponent = ({ personData }: { personData: Person }) => {
  const { name, role, desc, outLinks, imagePath } = personData;
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
      <p style={{ textAlign: "center", marginTop: "0.5em", fontStyle: "italic" }}>{desc}</p>
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
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-tag"
              key={i}
            >
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
