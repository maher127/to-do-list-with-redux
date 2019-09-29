import React from "react";
import "./App.css";
import ToDoInput from "./Components/ToDoInput";
import ToDoList from "./Components/ToDoList";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">to do input</h3>
            <ToDoInput />
            <ToDoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
