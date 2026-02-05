import { Link } from "react-router-dom";

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
  return (
    <div style={{ display: "flex" }}>
      {pages.map((p) => (
        <Link to={p.link}>{p.text}</Link>
      ))}
    </div>
  );
};
