import React from "react";

interface IconProps {
  iconName: string;
  style?: React.CSSProperties;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ iconName, style, className }) => {
  const isDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const modifier = isDarkMode ? "_white" : "";
  const src = `/assets/icons/${iconName}${modifier}.svg`;

  return (
    <div style={{ display: "inline-flex", padding: 4 }} className={className}>
      <img src={src} alt={iconName} style={style} height="24" width="24" />
    </div>
  );
};

export default Icon;
