import React, { useEffect, useState } from "react";

interface IconProps {
  iconName: string;
  link: string;
  size: number;
  color: string;
  changeOnHover: boolean;
  hoverColor: string;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ iconName, link, size, color, changeOnHover, hoverColor, style }) => {
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
      style={{ display: "inline-flex", padding: 4, cursor: "pointer", ...style }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={iconName}
    >
      <a href={link} target="_blank">
        {svgContent && colorizeSvg(svgContent, fillValue)}
      </a>
    </div>
  );
};

export default Icon;
