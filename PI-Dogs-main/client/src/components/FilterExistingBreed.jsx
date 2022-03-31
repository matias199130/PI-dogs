import { React } from "react";
import { useDispatch } from "react-redux";
import { filterExistingBreed } from "../actions/";

export default function FilterExistingBreed() {
  const dispatch = useDispatch();

  const handlefilterExistingBreed = (el) => {
    el.preventDefault();
    console.log(el)
    dispatch(filterExistingBreed(el.target.value));
  };

  return (
    <div>
      <div>
        <select
          className="botonfiltro"
          onChange={(el) => handlefilterExistingBreed(el)}
        >
          <option value="todo">all Breed</option>
          <option value="db">Breed DB</option>
          <option value="api">Breed API</option>
        </select>
      </div>
    </div>
  );
}
