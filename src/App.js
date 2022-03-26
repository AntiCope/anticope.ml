import React from "react";
import Routing from "./pages/routes";

import './App.css';
import Header from "./components/Header";
import End from "./components/End";

function App() {
  return (
    <div className="App">
      <Header />
      <End />
      <main>
        <div className="Content">
          <Routing />
        </div>
      </main>
    </div>
  );
}

export default App;
