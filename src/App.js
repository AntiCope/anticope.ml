import React from "react";
import Routing from "./pages/routes";

import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="Content">
          <Routing />
        </div>
      </main>
    </div>
  );
}

export default App;
