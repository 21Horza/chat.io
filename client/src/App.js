import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Chat from "./components/Chat";
import Join from "./components/Join";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Join />} />
        <Route path="/chat" exact element={<Chat />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;