import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, filterTemperament } from "../actions/index";

export default function FilterTempe() {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((el) => el.temperament);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleFilterTemperaments = (el) => {
    dispatch(filterTemperament(el.target.value));
  };

  return (
    <div>
      <div>
        <select
          className="botonfiltro"
          onChange={(el) => handleFilterTemperaments(el)}
        >
          <option value="All">all Temperaments</option>
          {allTemperaments &&
            allTemperaments.map((el) => (
              <option key={el.id} value={el.name}>
                {" "}
                {el.name}{" "}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}
