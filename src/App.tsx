import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import './App.css'
// import Task from './task'
import ListGroup from "./ListComponent/ListGroup";
import AddTask from "./AddTask";

function App() {
  return (
    <div>
      {" "}
      <h1>Neolocus </h1>
      <ListGroup />
      {/* <AddTask /> */}
    </div>
  );
}

export default App;
