import React from "react";
import "./styles.css";
import Navbar from "../navbar/Navbar";
import Subnavbar from "../sub_navbar/Subnavbar";
import TaskContainer from "../taskcontainer/TaskContainer";

function Home() {
  return (
    <div className="container">
      <Navbar />
      <Subnavbar />
      <TaskContainer />
    </div>
  );
}

export default Home;
