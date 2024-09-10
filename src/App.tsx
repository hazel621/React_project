import { useState } from "react";
// import Logo from "./assets/logo.jpg";
import "./App.css";
import ListGroup from "./ListComponent/ListGroup";
import AddTask from "./AddTask";

function App() {
  return (
    <div className="container">
      {/* <div
        style={{
          // display: "flex",
          width: "30vw",
          height: "auto",
          justifyContent: "center",
          marginTop: "30px",
          marginBottom: "30px",
        }}
        src={Logo}
        alt="react logo"
      /> */}
      <ListGroup />
    </div>
  );
}

export default App;
