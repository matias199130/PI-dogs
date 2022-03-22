import React from "react";
import { Link } from "react-router-dom";
import "../Css/LandingPage.css";
import imaLading from "../img/production ID_4651946.mp4";

export default function LandingPage() {
  return (
    <div id="justificado">
      <div className="imaLading">
        <video className="video" src={imaLading} autoPlay loop muted />
        <h1 className="title">Dogs App</h1>
        <Link to="/home">
          <button className="button">
            <span>START </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
