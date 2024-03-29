import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, resState, postDogs } from "../actions/index";
import { Link, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import "../Css/CreateDog.css";
import { validation } from "./Errores";

//////////////////////////////////////////////////////////////////
export default function DogCreate() {
  
  const navigator = useNavigate();
  const dispatch = useDispatch();
  
 
  const [errors, setErrors] = useState({});
 
  const allTemperaments = useSelector((state) => state.temperament);
  const [input, setInput] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minlife_span: "",
    maxlife_span: "",
    image: "",
    temperament: [],
    createdInBd: false,
  });

  useEffect(() => {
    dispatch(getTemperaments());
    dispatch(resState(resState));
  }, [dispatch]);

//////////////////////////////////////////////////////////////////
  function handleSubmit(el) {
    el.preventDefault();
    
    if (Object.values(errors).length > 0 || input.name === "" || input.temperament.length === 0) {
      return alert("You did not enter the required data. please try again!");
    } else {
      let crear = {
        name: input.name,
        height: `${input.minHeight} - ${input.maxHeight}`,
        weight: `${input.minWeight} - ${input.maxWeight}`,
        life_span: `${input.minlife_span} - ${input.maxlife_span} years`,
        image: input.image,
        temperament: input.temperament,
      }
      
      dispatch(postDogs(crear));
      setInput({
        name: "",
        minHeight: "",
        maxHeight: "",
        minWeight: "",
        maxWeight: "",
        minlife_span: "",
        maxlife_span: "",
        image: "",
        temperament: [],
      });
    
      navigator('/home');
      alert("breed of dog successfully created");
    }
  }

//////////////////////////////////////////////////////////////////

  function handelChange(el) {
    setInput({
      ...input,
      [el.target.name]: el.target.value,
    });
    setErrors(
      validation({
        ...input,
        [el.target.name]: el.target.value,
      })
    );
  }

//////////////////////////////////////////////////////////////////

  function handleSelectTemperament(el) {
    
    if (!input.temperament.includes(el.target.value) && (input.temperament.length < 10)) {
      setInput({
        ...input,
        temperament: [...input.temperament, el.target.value],
      });
    }else{
      alert("solo te permite un numero limitado de temperamentos!")
    }
  }
/////////////////////////////////////////////////////////////////

  function handleDelete(el) {
    el.preventDefault();
    setInput({
      ...input,
      temperament: input.temperament.filter(
        (temp) => temp !== el.target.innerText
        // manipula eliminar un salto de linea
      ),
    });
  }
  return (
    <div className="imgFondo">
      <div className="fromPerfil">
        <div>
          <div>

            <Link to="/home">
              <button className="boton5">Home</button>
            </Link>
            <h1 className="titleForm">Form Dogs</h1>
          </div>
          <div className="">
            <form className="fromPerfil" onSubmit={resState}>
              <div className="">
                <label className="title5">Name:</label>
                <input type="text"  placeholder="Name Breeds" name="name" value={input.name} onChange={(el) => handelChange(el)}/>
                <br />
                <strong>{errors.name}</strong>

                <label className="title5">Height min:</label>
                <input type="number" placeholder="minHeight" name="minHeight" value={input.minHeight} onChange={(el) => handelChange(el)}/>
                <br />
                <strong>{errors.minHeight}</strong>

                <label className="title5">Height max:</label>
                <input type="number" placeholder="maxHeight" name="maxHeight" value={input.maxHeight} onChange={(el) => handelChange(el)}/>
                <br />
                <strong>{errors.maxHeight}</strong>

                <label className="title5">Weight min:</label>
                <input type="number" placeholder="minWeight" name="minWeight" value={input.minWeight} onChange={(el) => handelChange(el)}/>
                <br />
                <strong>{errors.minWeight}</strong>

                <label className="title5">Weight max:</label>
                <input type="number" placeholder="maxWeight" name="maxWeight" value={input.maxWeight} onChange={(el) => handelChange(el)}></input>
                <br />
                <strong>{errors.maxWeight}</strong>

                <label className="title5">Average Life min:</label>
                <input type="number" placeholder="min life" name="minlife_span" value={input.minlife_span} onChange={(el) => handelChange(el)}/>
                <br />
                <strong>{errors.minlife_span}</strong>

                <label className="title5">Average Life max:</label>
                <input type="number" placeholder="max life" name="maxlife_span" value={input.maxlife_span} onChange={(el) => handelChange(el)}/>
                <br />
                <strong>{errors.maxlife_span}</strong>

                <label name="image" className="title5">Image:</label>
                <input type="url"  name="image" value={input.image} placeholder="URL" onChange={(el) => handelChange(el)}></input>
                <br />
                <strong>{errors.url}</strong>

                <label className="title5" value="temperament" name="temperament" >{[" "]} Temperament:{[" "]}</label>
                <select className="boton5" onChange={(el) => handleSelectTemperament(el)}>

                  <option>Temperaments</option>
                  {allTemperaments && allTemperaments.map((el, index) => (
                      <option key={index} value={el}>{el}</option>))}
                  {/* no tocar ! */}
                </select>
                <br />

                {input.temperament.map((nombre, i) => {
                  return (
                    <div className="concatFiltro" key={nombre}>
                      <span key={nombre}><button className="boton3" onClick={(nombre) => handleDelete(nombre)}>{nombre}</button></span>
                    </div>
                  );
                }
              )
            }
                <button className="boton5" type="submit" onClick={(el) => handleSubmit(el)}>{" "}Create new Dog</button>
              </div>
            </form>
          </div>
        </div>
        <div className="imgperfil"></div>
      </div>
    </div>
  );
}
