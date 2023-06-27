import {
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

const initialState = {
  characters: [],
  //TODO: para agregar o remover trabajamos en ambos (allFavorites, myFavorites)
  allFavorites: [], // original de myFavorites
  //TODO: para filtrar trabajamos solo acá
  myFavorites: [], // acá va a mirar el component myFavorites
  numPage: 1,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_CHAR:
      if (Array.isArray(payload)) {
        return {
          ...state,
          characters: [...payload],
        };
      }

      return {
        ...state,
        characters: [payload, ...state.characters],
      };
    case REMOVE_CHAR:
      const newCharacters = state.characters.filter((ch) => {
        return ch.id !== payload;
      });
      return {
        ...state,
        characters: newCharacters,
      };
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [payload, ...state.myFavorites],
        allFavorites: [payload, ...state.myFavorites],
      };
    case CREATE_CHAR:
      return {
        ...state,
        characters: [payload, ...state.characters],
      };
    case REMOVE_FAV:
      const newFavorites = state.myFavorites.filter((ch) => {
        return ch.id !== payload;
      });
      return {
        ...state,
        myFavorites: newFavorites,
        allFavorites: newFavorites,
      };
    case FILTER:
      const newFilter = state.allFavorites.filter(
        (ch) => ch.gender === payload
      );
      return {
        ...state,
        myFavorites: newFilter,
      };
    case FILTER_A_Z:
      const newFilterAtoZ = state.allFavorites.sort((a, b) => {
        return payload === "A" ? a.id - b.id : b.id - a.id;
      });
      return {
        ...state,
        myFavorites: newFilterAtoZ,
      };
    case RESET:
      return {
        ...state,
        myFavorites: [...state.allFavorites],
      };
    case PREV:
      return {
        ...state,
        numPage: state.numPage - 1,
      };
    case NEXT:
      return {
        ...state,
        numPage: state.numPage + 1,
      };
    default:
      return state;
  }
}
