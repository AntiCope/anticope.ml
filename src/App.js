import React from "react";
import Routing from "./pages/routes";

import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <video playsInline autoPlay loop muted onLoadStart={(evt) => evt.target.play()} poster="/end.webp" className="bg-video">
        <source src="/end.mp4" type="video/mp4" />
      </video>
      <main>
        <div className="Content">
          <Routing />
        </div>
      </main>
    </div>
  );
}

export default App;
