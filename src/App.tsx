import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./styles/styles.scss";

import { DEFAULT_SEARCH, Search, Thought } from "./types/thoughts";
import { LogSchema } from "./types/schemas";
import { filterThoughtsBySearch, getNodes, updateLocalStorage } from "./lib/util";

import { CreateModal } from "./components/CreationModal";
import { ThoughtTable } from "./components/ThoughtTable";
import { DisplayModal } from "./components/DisplayModal";
import { TableHeader } from "./components/SmallComponents";

export default function App() {
  const navigate = useNavigate();

  const parseLocalData = () => {
    const localData = localStorage.getItem("ilikedthat_log");
    if (localData === null) {
      return {};
    }
    const jsonData: object = JSON.parse(localData);
    const result = LogSchema.safeParse(jsonData);

    if (result.error) {
      console.log(result.error, jsonData);
      return {};
    } else {
      console.log("loading localStorage log: ", result.data);
      return result.data;
    }
  };

  const [uid, setUid] = useState<string>("default_user");

  const [nodes, setNodes] = useState<string[]>(getNodes(["21st century", "20th century", "Modernism"], [], true));
  const [logData, setLogData] = useState<Record<string, Thought>>(parseLocalData());

  const [search, setSearch] = useState<Search>(DEFAULT_SEARCH);

  const validLogData = filterThoughtsBySearch(logData, search);

  const onDeletePress = (t: Thought, updateLocal = true) => {
    const filteredData = Object.fromEntries(Object.entries(logData).filter(([k, _]) => k != t.id));
    setLogData(filteredData);
    if (updateLocal) {
      updateLocalStorage(filteredData);
    }
    closeAllModals();
  };

  const setCreateModalOpen = () => {
    navigate(`/${uid}/create`);
  };

  const closeAllModals = () => {
    navigate("/");
  };

  const MainContent = () => {
    return (
      <main className="container">
        <section id="contents"></section>
        <section id="log">
          <TableHeader text="Your Log" onClick={setCreateModalOpen} />
          <ThoughtTable thoughts={validLogData} search={search} setSearch={setSearch} />
        </section>
        <section id="pile">
          <TableHeader text="Your Pile" onClick={setCreateModalOpen} />
        </section>
        <section id="friends">
          <h3>Your Friends</h3>
        </section>
        <section id="world">
          <h3>The World</h3>
        </section>
      </main>
    );
  };

  return (
    <div className="container" style={{ maxWidth: "800px" }}>
      <header className="container">
        <hgroup>
          <h1 style={{ fontSize: "4em" }}>I LIKED THAT</h1>
          <p style={{ fontSize: "1.5em" }}>A website to track things you liked</p>
        </hgroup>
      </header>
      <Routes>
        <Route path="/" element={<MainContent />} />

        <Route
          path=":uid/create"
          element={
            <CreateModal
              isOpen={true}
              nodes={nodes}
              setNodes={setNodes}
              logData={logData}
              setLogData={setLogData}
              onDeletePress={onDeletePress}
              closeAllModals={closeAllModals}
            />
          }
        />

        <Route path=":uid/:thoughtId">
          <Route index element={<DisplayModal isOpen={true} thoughts={logData} closeAllModals={closeAllModals} />} />
          <Route
            path="edit"
            element={
              <CreateModal
                isOpen={true}
                nodes={nodes}
                setNodes={setNodes}
                logData={logData}
                setLogData={setLogData}
                onDeletePress={onDeletePress}
                closeAllModals={closeAllModals}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}
