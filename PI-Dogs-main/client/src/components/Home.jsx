import React, { useEffect, useState } from "react";
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
  const [breeds, setBreeds] = useState();
  const dogsPage = 8;
  const indexOfLastDogs = currentPage * dogsPage; //---->multiplica pagina actual por cantidad de perros
  const indexOfFirstDogs = indexOfLastDogs - dogsPage;//---->la multiplicacion anterior se resta por la cantidad de targetas
  

  function refreshPage() {
    window.location.reload(false);
  }

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  ////////---------------------//////////escucha el estado global
  useEffect(() => {
    dispatch(resState(resState));
    setBreeds(dogs)
    setCurrentPage(1);
  }, [dispatch, dogs]);

//////////////--------------------condiciones/logica para el renderizado de pagina---------///////////////


const currentDogs = breeds?.slice(indexOfFirstDogs, indexOfLastDogs);
  const mostrarCards = (dogs) => {
    if (Array.isArray(dogs)) {
      return (
        <div className="fondo">
          <div className="paginado2">
            {currentDogs?.length === 0 && currentDogs ? (<Landing />): ( currentDogs?.map((el, i) => {
                return (
                  <div key={i}><Link key={i} to={"/dogs/" + el.id} style={{ textDecoration: "inherit" }}>
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
        return (
        <div className="errorBack">
          <h1 className="h1">{dogs}</h1>
          <img className="imagenError" src= "https://dam.ngenespanol.com/wp-content/uploads/2019/10/perros-personalidad-2-770x395.jpg" alt= "foto perro"/>
          <div className="paginado">
        <button className="boton4" onClick={refreshPage}>volver a home!</button>
      </div>
        </div>
      );
    }
  
  };
////////////////////-------------renderizacion de home------------///////////////////////
  return (
    <div className="fondoNav">
      <div>
        <NavBar />
      </div>
      <div className="principal"></div>
      <div>{dogs.length > 0 ? mostrarCards(dogs) : mostrarCards(allDogs)}
      </div>
     </div>
    
  );
}
