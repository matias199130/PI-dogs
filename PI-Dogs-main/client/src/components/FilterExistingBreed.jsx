import { React } from "react";
import { useDispatch } from "react-redux";
import { filterExistingBreed } from "../actions/";

export default function FilterExistingBreed() {
  const dispatch = useDispatch();

  const handlefilterExistingBreed = (el) => {
    el.preventDefault();
    dispatch(filterExistingBreed(el.target.value));
    // console.log(typeof el.target.value)
  };
  // if(Array.isArray(handlefilterExistingBreed)){
  return (
    <div>
      <div>
        <select
          className="botonfiltro"
          onChange={(el) => handlefilterExistingBreed(el)}
        >
          <option value="todo">all Existing Breed</option>
          <option value="db">Existing Breed DB</option>
          <option value="api">Existing Breed API</option>
        </select>
      </div>
    </div>
  );
}
// }else{
//   alert("error")
// }}
