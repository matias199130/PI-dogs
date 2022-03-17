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
     
      if(name.length>1){
    dispatch(getName(name));
  } else{
    dispatch(getDogs());
  }
}

  
  return (
    <div>
         <div className="search">
      <input
        type="text"
        placeholder='Dog Breed...'
         onChange={(el) => handleInputChange(el)}
        className='buscador'
      />
      <div className="figurabuscador">🔎</div>
     </div>
    </div>
  );
}