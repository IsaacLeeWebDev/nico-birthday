import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <audio autoPlay>
        <source src="./song.mp3" type="audio/mpeg" />
      </audio>
      <header className="App-header">
        <img
          src="https://cdn.shopify.com/s/files/1/0070/7235/0326/products/Doggodog_Corgi_Head_StickerLayout_01-01_2048x.jpg?v=1536140349"
          className="App-logo"
          alt="logo"
        />
        <h1 style={{marginTop: "50px"}}>Happy birthday Nico!</h1>
        <p>Hope you had a good one, dawg.</p>
      </header>
    </div>
  );
}

export default App;
