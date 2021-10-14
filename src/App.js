import { React, useState } from "react";
import NavBar from "./components/navbar";
import Home from "./components/home";
import List from "./components/list";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  var [status, setStatus] = useState(true);

  return (
    <div>
      <NavBar />
      {status ? (
        <Home setClick={() => setStatus(!status)} />
      ) : (
        <List listClick={() => setStatus(!status)} />
      )}
    </div>
  );
}

export default App;
