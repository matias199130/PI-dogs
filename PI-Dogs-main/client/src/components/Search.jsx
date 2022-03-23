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
    el.preventDefault();
    console.log(el.target.value)
    setName(el.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.preventDefault())
    if (name.length >= 5 ) {
      dispatch(getName(name));
    } else {
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
        {/* <div className="figurabuscador">🔎</div> */}
      </div>
    </div>
  );
}
