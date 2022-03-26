import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resState } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import Landing from "./Landing";
import NavBar from "./NavBar";
import "../Css/Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((el) => el.allDogs);
  const dogs = useSelector((el) => el.dogs);

  const [currentPage, setCurrentPage] = useState(1);
  const dogsPage = 8;
  const indexOfLastDogs = currentPage * dogsPage;
  const indexOfFirstDogs = indexOfLastDogs - dogsPage;

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
 
  useEffect(() => {
    dispatch(resState(resState));
    setCurrentPage(1);
  }, [dispatch]);
  // console.log("dogs", dogs)

  // function handleClick(e) {
  //   e.preventDefault();
  //   dispatch(mostrarCards);
  //   console.log(mostrarCards)
  // }
  const mostrarCards = (dogs) => {
    if (Array.isArray(dogs)) {
      const currentDogs = dogs.slice(indexOfFirstDogs, indexOfLastDogs);
      //  console.log(mostrarCards)
      return (
        <div className="fondo">
          <div className="paginado2">
            {currentDogs.length === 0 && currentDogs ? (
              <Landing />
            ) : (
              currentDogs.map((el, i) => {
                return (
                  <div key={i}>
                    <Link
                      key={i}
                      to={"/dogs/" + el.id}
                      style={{ textDecoration: "inherit" }}
                    >
                      <Card
                        key={i.id}
                        name={el.name}
                        image={el.image}
                        temperament={el.temperament}
                        weight={el.weight}
                      />
                    </Link>
                  </div>
                );
              })
            )}
          </div>

          <Paginado
            dogsPage={dogsPage}
            allDogs={dogs.length}
            paginado={paginado}
          />
        </div>
      );
    } else {
      function refreshPage() {
        window.location.reload(false);
      }
        return (
        <div className="errorBack">
          <h1 className="h1">{dogs}</h1>
          <img className="imagenError" src= "https://dam.ngenespanol.com/wp-content/uploads/2019/10/perros-personalidad-2-770x395.jpg" alt= "foto perro"/>
          <div className="paginado">
        {/* <Link to="/">
          <button className="boton4" >
           Reload
          </button>
        </Link> */}
        <button className="boton4" onClick={refreshPage}>Click to reload!</button>
      </div>
        </div>
      );
    }
  
  };

  return (
    <div className="fondoNav">
      <div>
        <NavBar />
      </div>
      <div className="principal"></div>
      <div>{dogs.length > 0 ? mostrarCards(dogs) : mostrarCards(allDogs)}</div>
    </div>
  );
}
