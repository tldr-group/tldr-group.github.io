import { Routes, Route } from "react-router-dom";

import { TypewriterTitle, DEFAULT_TEXTS } from "./components/TypewriterTitle";
import { NavBar, DEFAULT_PAGES } from "./components/NavBar";
import { MainContent } from "./components/MainContent";
import { Projects } from "./components/Projects";
import { Team } from "./components/Team";
import { Publications } from "./components/Publications";
import { Videos } from "./components/Videos";
import Icon from "./components/Icon";

import styles from "./styles.module.scss";

export default function App() {
  return (
    <div className="container">
      <header className="container">
        <h1>
          <TypewriterTitle texts={DEFAULT_TEXTS} />
        </h1>
      </header>
      <NavBar pages={DEFAULT_PAGES} />

      <div style={{ paddingTop: "2em" }}>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>

      <div className="flex-row" style={{ paddingBottom: "2em" }}>
        <Icon
          iconName="gh"
          link="https://github.com/tldr-group"
          size={48}
          color={styles.textBlack}
          hoverColor={styles.secondary}
          changeOnHover={true}
          style={{ marginLeft: "auto" }}
        />
        <Icon
          iconName="email"
          link="mailto:samuel.cooper@imperial.ac.uk"
          size={64}
          color={styles.textBlack}
          hoverColor={styles.secondary}
          changeOnHover={true}
          style={{ marginLeft: "auto" }}
        />
      </div>
    </div>
  );
}
