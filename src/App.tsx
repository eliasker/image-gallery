import React from "react";

import "./styles/App.css";
import useFirestore from "./hooks/useFirestore";
import Categories from "./components/Categories";

const App: React.FC = () => {
  const { images } = useFirestore("pictures");
  return (
    <div className="App background">
      <Categories images={images}/>
    </div>
  );
};

export default App;
