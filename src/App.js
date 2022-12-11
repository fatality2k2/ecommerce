import React from "react";
import { Navbar } from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/main";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
