import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Reddit App <span className="tagirkiky">by tagirkiky</span>
        </h1>
      </header>
    </div>
  );
}

export default App;
