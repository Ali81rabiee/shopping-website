import { useState } from "react";
import "./App.css";
import Router from "./Router";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
