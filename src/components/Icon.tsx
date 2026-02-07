import React, { use, useEffect, useState } from "react";

import styles from "../styles.module.scss";

interface IconProps {
  iconName: string;
  style?: React.CSSProperties;
  className?: string;
  color?: string;
  hoverColor?: string;
}

const Icon: React.FC<IconProps> = ({ iconName, style, className, color = "currentColor" }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Detect dark mode
  // const isDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const src = `/assets/icons/${iconName}.svg`;

  const size = 48;

  useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then(setSvgContent);
  }, [src]);

  // Update SVG fill color

  // Pure function to colorize SVG markup and return a React element
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

  const hoverColor = styles.secondary;
  const fillValue = isHovered ? hoverColor : color;

  return (
    <div
      style={{ display: "inline-flex", padding: 4, cursor: "pointer", ...style }}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={iconName}
    >
      {svgContent && colorizeSvg(svgContent, fillValue)}
    </div>
  );
};

export default Icon;
