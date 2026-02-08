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
  const baseIconColour = window.getComputedStyle(document.body).getPropertyValue("--text-color");

  return (
    <div className="container">
      <header className="title-container">
        <div className="title-row">
          <div>
            <Icon
              iconName="tldr_logo"
              link="/"
              size={72}
              color={baseIconColour}
              hoverColor={styles.secondary}
              changeOnHover={true}
              text="Home"
            />
          </div>
          <a>Mode</a>
        </div>
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

      <div className="flex-row" style={{ paddingBottom: "2em", paddingTop: "1em" }}>
        <Icon
          iconName="gh"
          link="https://github.com/tldr-group"
          target="_blank"
          size={48}
          color={baseIconColour}
          hoverColor={styles.secondary}
          changeOnHover={true}
          style={{ marginLeft: "auto" }}
        />
        <Icon
          iconName="email"
          link="mailto:samuel.cooper@imperial.ac.uk"
          target="_blank"
          size={64}
          color={baseIconColour}
          hoverColor={styles.secondary}
          changeOnHover={true}
          style={{ marginLeft: "auto" }}
        />
      </div>
    </div>
  );
}
