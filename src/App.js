import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

import Homepage from "./routes/Homepage";
import Cryptopage from "./routes/Cryptopage";
import Exchangepage from "./routes/Exchangepage";
import Newspage from "./routes/Newspage";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cryptocurrencie" element={<Cryptopage />} />
        <Route path="/exchange" element={<Exchangepage />} />
        <Route path="/news" element={<Newspage />} />
      </Routes>
    </div>
  );
}

export default App;
