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
} from "./actionType";
import axios from "axios";

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
// http://localhost:5040/rickandmorty/favorite/fav   ${id}
export function addFav(char) {
  return function (dispatch) {
    axios
      .post(`http://localhost:5040/rickandmorty/favorite/fav`, char)
      .then(({ data }) => {
        return dispatch({
          type: ADD_FAV,
          payload: data,
        });
      });
  };
}
export function removeFav(id) {
  return function (dispatch) {
    axios
      .delete(`http://localhost:5040/rickandmorty/favorite/fav/${id}`)
      .then(({ data }) => {
        return dispatch({
          type: REMOVE_FAV,
          payload: data,
        });
      });
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
  return {
    type: CREATE_CHAR,
    payload: character,
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
