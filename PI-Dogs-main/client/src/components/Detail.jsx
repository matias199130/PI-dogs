import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetail, resState } from "../actions";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Landing from "./Landing";
import "../Css/Detalle.css";

export default function Detail() {
  const { id } = useParams();
  const dogDetail = useSelector((el) => el.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
    dispatch(resState(resState));
  }, [dispatch, id]);
  
  
  if (Array.isArray(dogDetail)) {
  
    return (


    <div className="fondoDetalle">
      <div className="paginado">
        <Link to="/home">
          <button className="boton4" onClick={resState}>
            Home
          </button>
        </Link>
      </div>
      {dogDetail.length > 0 ? (
        <main className="paginado2">
          <div>
            <div>
              <img
                className="imagdetalle"
                src={dogDetail[0].image}
                alt ="no se encuentra imagen"
              />
            </div>
          </div>
          <div className="cardDetalle">
            <div>
              <h1>{dogDetail[0].name}</h1>
            </div>
            <div className="base3">
              <h4>Temperament:</h4>
              <p>{dogDetail[0].temperament}</p>
            </div>
            <div className="base3">
              <h4>Height:</h4>
              <p>{dogDetail[0].height} in.</p>
            </div>
            <div className="base3">
              <h4>Weight:</h4>
              <p>{dogDetail[0].weight} lbs.</p>
            </div>
            <div className="base3">
              <h4>Life Span</h4>
              <p>{dogDetail[0].life_span}</p>
            </div>
          </div>
        </main>
      ) : (
        <Landing />
      )}
    </div>
    )}else{
      return(
        <div className="errorBack1">
          <div className="paginado">
        <Link to="/home">
          <button className="boton4" onClick={resState}>
            Home
          </button>
        </Link>
      </div>
          <h1 className="h11">{dogDetail}</h1>
          <img className="imagenError1" src= "https://dam.ngenespanol.com/wp-content/uploads/2019/10/perros-personalidad-2-770x395.jpg" alt= "foto perro"/>
        </div>
      )
}
}