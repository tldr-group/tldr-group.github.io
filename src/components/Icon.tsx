import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface IconProps {
  iconName: string;
  link: string;
  target?: string;
  size: number;
  color: string;
  changeOnHover: boolean;
  hoverColor: string;
  text?: string;
  style?: React.CSSProperties;
}

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
  GITHUB,
  PAPER,
  WEBSITE,
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
  [LinkTypes.GITHUB]: {
    fill: "#3e3f40",
    path: "M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.66-.22.66-.48 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.33 2.74-1.05 2.74-1.05.56 1.42.21 2.46.11 2.72.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.08.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.67.48A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z",
    viewBox: DEFAULT_VIEWBOX,
  },
  [LinkTypes.PAPER]: {
    fill: "#3e3f40",
    path: "M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z",
    viewBox: DEFAULT_VIEWBOX,
  },
  [LinkTypes.WEBSITE]: {
    fill: "#3e3f40",
    path: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm6.93 9h-3.1a15.7 15.7 0 0 0-1.38-5A8.03 8.03 0 0 1 18.93 11ZM12 4.04c1.18 1.44 2 3.74 2.24 6.96H9.76C10 7.78 10.82 5.48 12 4.04ZM4.07 13h3.1a15.7 15.7 0 0 0 1.38 5A8.03 8.03 0 0 1 4.07 13Zm3.1-2h-3.1a8.03 8.03 0 0 1 4.48-5 15.7 15.7 0 0 0-1.38 5Zm1.59 2h6.48c-.28 3.22-1.1 5.52-2.24 6.96-1.18-1.44-2-3.74-2.24-6.96Zm6.69 5a15.7 15.7 0 0 0 1.38-5h3.1a8.03 8.03 0 0 1-4.48 5Z",
    viewBox: DEFAULT_VIEWBOX,
  },
};

const getLinkType = (text: string, url: string): LinkTypes | null => {
  const label = text.toLowerCase();
  const href = url.toLowerCase();

  if (label.includes("linkedin") || href.includes("linkedin.com")) {
    return LinkTypes.LINKEDIN;
  }

  if (label.includes("scholar") || href.includes("scholar.google")) {
    return LinkTypes.SCHOLAR;
  }

  if (label.includes("twitter") || href.includes("twitter.com") || href.includes("x.com")) {
    return LinkTypes.TWITTER;
  }

  if (label.includes("polaron") || href.includes("polaron.ai")) {
    return LinkTypes.POLARON;
  }

  if (label.includes("github") || href.includes("github.com")) {
    return LinkTypes.GITHUB;
  }

  if (
    label.includes("paper") ||
    label.includes("preprint") ||
    href.includes("arxiv.org") ||
    href.includes("nature.com") ||
    href.includes("wiley.com") ||
    href.includes("joss.theoj.org") ||
    href.includes("doi.org")
  ) {
    return LinkTypes.PAPER;
  }

  if (label.includes("website")) {
    return LinkTypes.WEBSITE;
  }

  return null;
};

export const LinkIcon = ({ text, url, size = 16 }: { text: string; url: string; size?: number }) => {
  const linkType = getLinkType(text, url);

  if (linkType === null) return null;

  const { fill, path, viewBox } = LinkToSVG[linkType];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      style={{ marginRight: "0.25em" }}
      fill={fill}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
};

const Icon: React.FC<IconProps> = ({ iconName, link, target, size, color, changeOnHover, hoverColor, text, style }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Detect dark mode
  // const isDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const src = `/assets/icons/${iconName}.svg`;

  useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then(setSvgContent);
  }, [src]);

  // Update SVG fill color
  function colorizeSvg(svgString: string, fillValue: string): React.ReactNode {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, "image/svg+xml");
    const svg = doc.querySelector("svg");
    if (!svg) return null;
    svg.setAttribute("width", size.toString());
    svg.setAttribute("height", size.toString());
    svg.querySelectorAll('[fill]:not([fill="none"])').forEach((el) => {
      el.setAttribute("fill", fillValue);
    });
    if (!svg.querySelector('[fill]:not([fill="none"])')) {
      svg.setAttribute("fill", fillValue);
    }
    // Convert SVG element to JSX
    return (
      <span
        style={{ display: "inline-flex", width: size, height: size }}
        dangerouslySetInnerHTML={{ __html: svg.outerHTML }}
      />
    );
  }

  const fillValue = isHovered && changeOnHover ? hoverColor : color;

  return (
    <div
      style={{
        ...style,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={iconName}
    >
      <Link to={link} target={target} style={{ textDecoration: "none" }}>
        <div className="icon-button" style={{ color: fillValue }}>
          {svgContent && colorizeSvg(svgContent, fillValue)}
          {text}
        </div>
      </Link>
    </div>
  );
};

export default Icon;
