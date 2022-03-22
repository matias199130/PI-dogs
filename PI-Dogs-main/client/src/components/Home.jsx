import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    setCurrentPage(1);
  }, [dispatch]);

  const mostrarCards = (dogs) => {
    const currentDogs = dogs.slice(indexOfFirstDogs, indexOfLastDogs);
    return (
      <div className="fondo">
        <div className="paginado2">
          {currentDogs.length === 0 && currentDogs ? (
            <Landing />
          ) : (
            currentDogs.map((el) => {
              return (
                <div>
                  <Link
                    key={el.id}
                    to={"/dogs/" + el.id}
                    style={{ textDecoration: "inherit" }}
                  >
                    <Card
                      key={el.id}
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
