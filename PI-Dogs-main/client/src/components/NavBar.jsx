import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs, sortWeight, sortName } from "../actions";
import FilterExistingBreed from "./FilterExistingBreed";
import FilterTemperament from "./FilterTemperament";
import Search from "./Search";
import "../Css/NavBar.css";

export default function NavBar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  function handleOrder(el) {
    el.preventDefault();
    dispatch(sortName(el.target.value));
  }
  
  function handleOrderWeitgh(el) {
    el.preventDefault();
    dispatch(sortWeight(el.target.value));
  }

  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="fondo1">
      <div>
        <Link to="/dog">
          <button id="botonCreate">Create Dogs</button>
        </Link>
      </div>
      
      <div className="filtros">
        <div>
          <FilterTemperament />
        </div>
        <div>
          <FilterExistingBreed />
        </div>
        <div>
          <Search />
          <button className="botonfiltro" onClick={refreshPage}>refresh</button>
        </div>
        <div>
          <select
            className="botonfiltro"
            onChange={(el) => handleOrderWeitgh(el)}
          >
            <option value="All">By Weight</option>
            <option value="small"> Light </option>
            <option value="big"> Heavy </option>
          </select>
        </div>

        <div>
          <select className="botonfiltro" onChange={(el) => handleOrder(el)}>
            <option value="All">Alphabetically</option>
            <option value="asc"> A - Z </option>
            <option value="desc"> Z - A </option>
          </select>
        </div>
      </div>
      {/* <div className="errorBack1">
          <div className="paginado1"> */}
        {/* <button className="botonRecarga" onClick={refreshPage}>Click to reload!</button> */}
      {/* </div> */}
        {/* // </div> */}
    </div>
  );
}
