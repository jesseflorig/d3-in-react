import React from "react";
import ReactDOM from "react-dom";
import HierarchyChart from "./components/HierarchyChart";
import DonutChart from "./components/DonutChart";

function App() {
  return (
    <div className="App">
      <HierarchyChart />
      <DonutChart />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
