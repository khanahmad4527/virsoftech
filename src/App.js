import React from "react";
import TemperatureConverter from "./components/TemperatureConverter/TemperatureConverter";
import TodoList from "./components/TodoList/TodoList";
import Cryptocurrency from "./components/Cryptocurrency/Cryptocurrency";

const App = () => {
  const lineStyle = {
    borderBottom: "3px solid black",
    width: "80%",
    margin: "50px auto",
  };

  return (
    <div>
      <TemperatureConverter />
      <div style={{ ...lineStyle }}></div>
      <TodoList />
      <div style={{ ...lineStyle }}></div>
      <Cryptocurrency />
    </div>
  );
};

export default App;
