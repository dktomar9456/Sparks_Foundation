import React from "react";
import Image from "../components/image.jpg";

function Home(props) {
  return (
    <div
      className="container border shadow p-3 rounded mt-4 text-light"
      id="home"
      style={{
        background:
          "linear-gradient(to right, rgba(0,0,0,0.8), rgb(70, 150, 170,0.4)",
      }}
    >
      <h5 className="m-2 text-center ">
        Welcome to Sparks Foundation Banking Services here you can transfer
        money between any two custumers
      </h5>
      <div className="text-center">
        <img
          src={Image}
          className="img-fluid mx-auto w-50 p-4"
          alt="home page"
        />
      </div>

      <div className="text-center">
        <button
          className="btn btn-lg btn-danger mx-auto m-3 "
          onClick={props.setClick}
        >
          View All Custumers
        </button>
      </div>
    </div>
  );
}
export default Home;
