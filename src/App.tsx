import { Routes, Route } from "react-router-dom";

import { MainContent } from "./components/MainContent";
import { Projects } from "./components/Projects";
import { Team } from "./components/Team";
import { Publications } from "./components/Publications";
import { Videos } from "./components/Videos";
import { TypewriterTitle, DEFAULT_TEXTS } from "./components/TypewriterTitle";
// import "./styles/styles.scss";

export default function App() {
  // const navigate = useNavigate();

  return (
    <div className="container" style={{ maxWidth: "800px" }}>
      <header className="container">
        <hgroup>
          <h1 style={{ fontSize: "2em" }}>
            <TypewriterTitle texts={DEFAULT_TEXTS} />
          </h1>
        </hgroup>
      </header>
      <div>Nav bar</div>

      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>

      <div>bottom bar (icons)</div>
    </div>
  );
}
