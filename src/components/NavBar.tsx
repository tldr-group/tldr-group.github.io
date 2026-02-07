import { Link, useLocation } from "react-router-dom";

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
