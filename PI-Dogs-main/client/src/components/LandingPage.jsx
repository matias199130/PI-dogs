import React from "react";
import { Link } from "react-router-dom";
import "../Css/LandingPage.css";
import imaLading from "../img/production ID_4651946.mp4";
import imagen from "../img/Bienvenido-a-la-pagina-d.png";

export default function LandingPage() {
  return (
    <div id="justificado">
      <div className="imaLading">
        <video className="video" src={imaLading} autoPlay loop muted />
        <img src={imagen} alt="lo que sea" className="title" width={1400}></img>
        {/* <div className="wrap"> */}
          <Link to="/home">
            <button className="button">START</button>
          </Link>
        {/* </div> */}
        {/* <Link to="/About">
          <button className="button2">
           ABOUT
          </button>
        </Link> */}
      </div>
    </div>
  );
}
