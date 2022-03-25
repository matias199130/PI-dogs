import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getName, getDogs } from "../actions/index";
import "../Css/Search.css";

export default function Search() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);
  
  function handleInputChange(el) {
    // console.log(getDogs(name))
    el.preventDefault();
    setName(el.target.value);
  }
  function handleSubmit(el) {
    el.preventDefault();
    // console.log(el.preventDefault())

    if (name.length >= 5 ) {
      // console.log("hola")
      dispatch(getName(name));
      // console.log(getName)
    } else {
      // console.log("adios!")
      alert("por favor ingrese un nombre correcto")
      dispatch(getDogs())
  }
}

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Dog Breed..."
          onChange={(el) => handleInputChange(el)}
          className="buscador"
        />
        <button
         
          className="figurabuscador"
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
         <strong>Search</strong>
        </button>
      </div>
    </div>
  );
}
