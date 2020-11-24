import React from "react";
import "./styles/App.css";
import Categories from "./components/Categories";

const App: React.FC = () => {
  return (
    <div className="App background">
      <Categories />
    </div>
  );
};

export default App;
