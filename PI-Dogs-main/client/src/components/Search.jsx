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
    setName(el.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name.length > 1 && name.length === e.preventDefault()) {
      dispatch(getName(name));
    } else {
      alert("perro no encontrado")
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
          Search
        </button>
        {/* <div className="figurabuscador">🔎</div> */}
      </div>
    </div>
  );
}
