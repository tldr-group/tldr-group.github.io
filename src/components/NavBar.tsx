import { Link, useLocation } from "react-router-dom";

import Icon from "./Icon";

import styles from "../styles.module.scss";

type PageDetails = {
  text: string;
  link: string;
};

export const DEFAULT_PAGES: PageDetails[] = [
  { text: "Projects", link: "/projects" },
  { text: "Team", link: "/team" },
  { text: "Publications", link: "/publications" },
  { text: "Videos", link: "/videos" },
];

export const NavBar = ({ pages }: { pages: PageDetails[] }) => {
  const location = useLocation();
  return (
    <div className="navbar">
      {pages.map((p) => (
        <Link key={p.link} to={p.link} className={"nav-link" + (location.pathname === p.link ? " selected" : "")}>
          {p.text}
        </Link>
      ))}
    </div>
  );
};

export const BottomBar = ({ textColour }: { textColour: string }) => {
  return (
    <div className="flex-row" style={{ paddingBottom: "2em", paddingTop: "1em" }}>
      <Icon
        iconName="gh"
        link="https://github.com/tldr-group"
        target="_blank"
        size={48}
        color={textColour}
        hoverColor={styles.secondary}
        changeOnHover={true}
        style={{ marginLeft: "auto" }}
      />
      <Icon
        iconName="email"
        link="mailto:samuel.cooper@imperial.ac.uk"
        target="_blank"
        size={64}
        color={textColour}
        hoverColor={styles.secondary}
        changeOnHover={true}
        style={{ marginLeft: "auto" }}
      />
    </div>
  );
};
