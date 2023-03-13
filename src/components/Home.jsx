import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="/src/assets/bg.png"
          className="card-img"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <p className="card-text">
              <small>Last updated 3 mins ago</small>
            </p>
            <h5 className="card-title display-3 fw-bolder fs-1 mb-0">LLEGA LA NUEVA TEMPORADA</h5>
            <p className="card-text lead fs-2">
             NUESTRAS MARACAS RECOMENDADAS
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
