import React, {useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{marginTop: "50px"}}>Happy birthday Nico!</h1>
        <h3 style={{marginBottom: "600px"}}>(scroll down)</h3>
        <img
        style={{margin: "50px"}}
          src="https://cdn.shopify.com/s/files/1/0070/7235/0326/products/Doggodog_Corgi_Head_StickerLayout_01-01_2048x.jpg?v=1536140349"
          className="App-logo"
          alt="logo"
        />
        <h1>Hope it's a delight, dawg.</h1>
      </header>
    </div>
  );
}

export default App;
