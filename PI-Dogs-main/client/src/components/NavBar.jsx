import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs, sortWeight, sortName } from "../actions";
import "../Css/NavBar.css";
import FilterTemperament from "./FilterTemperament";
import Search from "./Search";
import FilterExistingBreed from "./FilterExistingBreed";
import { Link } from "react-router-dom";

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
            <option value="asc"> A a Z </option>
            <option value="desc"> Z a A </option>
          </select>
        </div>
      </div>
    </div>
  );
}
