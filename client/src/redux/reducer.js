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
  RESET_CHARACTERS,
  RESET_PAGE,
  SEARCH_CHAR,
} from "./actionType";

const initialState = {
  charactersOrigin: [],
  characters: [],
  //TODO: para agregar o remover trabajamos en ambos (allFavorites, myFavorites)
  allFavorites: [], // original de myFavorites
  //TODO: para filtrar trabajamos solo acá
  myFavorites: [], // acá va a mirar el component myFavorites
  numPage: 1,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SEARCH_CHAR:
      return {
        ...state,
        characters: [payload],
        // characters: [payload,...state.charactersOrigin],
        // charactersOrigin: [payload,...state.charactersOrigin],
      };
    case ADD_CHAR:
      if (Array.isArray(payload)) {
        return {
          ...state,
          characters: [...payload], // characters: [payload, ...state.characters],
          charactersOrigin: [...payload],
        };
      }
      return {
        ...state,
        characters: [payload,...state.charactersOrigin],
        charactersOrigin: [payload,...state.charactersOrigin],
      };
    case REMOVE_CHAR:
      const newCharacters = state.charactersOrigin.filter((ch) => {
        return ch.id !== payload;
      });
      return {
        ...state,
        characters: newCharacters,
        charactersOrigin: newCharacters,
      };
    case RESET_CHARACTERS:
      //console.log()
      return {
        ...state,
        characters: [...state.charactersOrigin],
      };
    case RESET_PAGE:
      //console.log()
      return {
        ...state,
        numPage: 1,
      };
    case ADD_FAV:
      return {
        ...state,
        myFavorites: payload,
        allFavorites: payload,
      };
    case CREATE_CHAR:
      return {
        ...state,
        characters: [payload, ...state.charactersOrigin],
        charactersOrigin: [payload, ...state.charactersOrigin],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: payload,
        allFavorites: payload,
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
