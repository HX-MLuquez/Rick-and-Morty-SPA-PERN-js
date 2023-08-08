import {
  RESET_PAGE,
  RESET_CHARACTERS,
  ADD_FAV,
  REMOVE_FAV,
  ADD_CHAR,
  REMOVE_CHAR,
  FILTER,
  RESET,
  FILTER_A_Z,
  PREV,
  NEXT,
  CREATE_CHAR,
  SEARCH_CHAR,
} from "./actionType";
import axios from "axios";

export function searchChar(char) {
  return {
    type: SEARCH_CHAR,
    payload: char,
  };
}

export function addChar(char) {
  return {
    type: ADD_CHAR,
    payload: char,
  };
}
/*
 axios(`http://localhost:5040/rickandmorty/character/${id}`).then(
      // axios("http://localhost:1222/")
      ({ data }) => {
        if (data.name) {
          dispatch(addChar(data));
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
*/
export function resetPage() {
  return {
    type: RESET_PAGE,
  };
}
export function resetCharacters() {
  return {
    type: RESET_CHARACTERS,
  };
}
export function removeChar(id) {
  return {
    type: REMOVE_CHAR,
    payload: id,
  };
}
// http://localhost:5040/rickandmorty/fav   ${id}
export function addFav(char) {
  // ? return {}  NO es f() <- redux lo invoca f(dispatch)
  return async function (dispatch) {
    try {
      const { data } = await axios.post(
        `http://localhost:5040/rickandmorty/fav`,
        char
      ); // creamos en nuestra DB
      // Algoma más -> dispatch definitivo
      return dispatch({
        type: ADD_FAV,
        payload: data, // anexamos en nuestro STORE
      });
    } catch (error) {
      // console.log(error);
      return Error(error);
    }
  };
}
//* ASINCRÓNICO siempre debemos manejar el error

export function removeFav(id) {
  return async function (dispatch) {
    try {
      const { data } = await axios.delete(
        `http://localhost:5040/rickandmorty/fav/${id}`
      );
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterGender(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}
export function filterAtoZ(aOz) {
  return {
    type: FILTER_A_Z,
    payload: aOz,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

export function prev() {
  return {
    type: PREV,
  };
}
export function next() {
  return {
    type: NEXT,
  };
}

export function createCharacter(character) {
  character.id = Number(character.id);

  return {
    type: CREATE_CHAR,
    payload: character,
  };
}

export function createCharacterCONDB(character) {
  character.id = Number(character.id);
  return async function (dispatch) {
    // lo envía a nuestra db
    await axios.post("url:que-guarda-esto-en-nuestra-db", character);
    // en esta otra línea lo envía a nuestro store
    dispatch({ type: CREATE_CHAR, payload: character });
  };
}

// filterCards: esta función recibe por parámetro un gender. Debe retornar
// una action con el type igual a "FILTER" y el payload será igual al parámetro recibido.
/*
addFav: esta función recibe un personaje por parámetro. 
Deberás retornar una action con el type igual a "ADD_FAV", 
y el payload igual a ese personaje.
removeFav: esta función recibe un id por parámetro. 
Deberás retornar una action con el type igual a "REMOVE_FAV", 
y el payload igual a ese id.
*/
