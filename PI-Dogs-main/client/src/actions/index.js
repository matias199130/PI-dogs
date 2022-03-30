import axios from 'axios';


export function getDogs(){
    return async function(dispatch){
        const json = await axios.get('/dogs');
        dispatch({
            type: 'GET_DOGS',
            payload: json.data
        });
    }
}


export function getTemperaments(){
    return async function (dispatch){
        // http://localhost:3001
        var json = await axios.get("/temperament");
        return dispatch({
            type:"GET_TEMPERAMENTS",
            payload: json.data,
        })
    }
}


export function getName(name){
    return async function (dispatch) {
        const res = await axios.get(`/dogs?name=${name}`);
        dispatch({
            type: 'GET_NAME',
            payload: res.data,
        });
  }
}

 export function getDetail(id){
    return async function(dispatch){
        // http://localhost:3001
        const json = await axios.get(`/dogs/${id}`)
        return dispatch({
            type:"GET_DETAIL",
            payload: json.data,
        })
    }
}  



export function sortName(payload){
    return {
        type:"SORT_NAME",
        payload,
    }
}
export function filterTemperament(payload){
    return {
        type:"FILTER_TEMPERAMENT",
        payload,
    }
}

export function filterExistingBreed(payload){
    return {
        type:"FILTER_EXISTING_BREED",
        payload,
    }
}
export function sortWeight(payload){
    return {
        type:"SORT_WEIGHT",
        payload,
    }
}


export function postDogs(payload){
    return async function(){
        // http://localhost:3001
        const create = await axios.post('/dog', payload);
        return create;
    }
}

export function resState(){
    return {
        type:"RES_STATE",
    }
}