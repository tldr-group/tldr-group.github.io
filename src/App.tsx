import { Routes, Route } from "react-router-dom";

import { DEFAULT_TEXTS, Title } from "./components/Title";
import { NavBar, DEFAULT_PAGES, BottomBar } from "./components/NavBar";
import { MainContent } from "./components/MainContent";
import { Projects } from "./components/Projects";
import { Team } from "./components/Team";
import { Publications } from "./components/Publications";
import { Videos } from "./components/Videos";

import { useTheme } from "./hooks";

import "./styles.css";

export default function App() {
  const themeProps = useTheme();

  return (
    <div className="container">
      <Title texts={DEFAULT_TEXTS} themeProps={themeProps} />
      <NavBar pages={DEFAULT_PAGES} />

      <div style={{ paddingTop: "2em", maxWidth: "95%" }}>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>

      <BottomBar textColour={themeProps.textColour} secondaryColour={themeProps.secondaryColour} />
    </div>
  );
}
