import { useState } from "react";
import style from "../styles/SearchBar.module.css";
import { useDispatch } from "react-redux";
import { resetPage, addChar } from "../redux/actions";
import axios from "axios";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  //  <input type="search" onChange={handleChange}/>
  const handleChange = (event) => {
    //console.log("event ---> ", event.target.value)
    setId(event.target.value);
    //  setId((idOld) => idOld + 1);
    //  setId(id + 1);
  };
  const add = () => {
    onSearch(id);
    dispatch(resetPage());
    setId("");
  };
  const randomChar = () => {
    const numRan = Math.floor(Math.random() * 825) + 1;
    axios(`http://localhost:5040/rickandmorty/character/${numRan}`).then(
      // axios("http://localhost:1222/")
      ({ data }) => {
        if (data.name) {
          dispatch(addChar(data));
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  return (
    // console.log("id--->", id),
    <div className={style.search}>
      <label>Insert ID: </label>
      <input
        type="search"
        onChange={handleChange}
        value={id}
        name="id"
        placeholder="insert id ..."
      />
      <button onClick={add}>Search</button>
      <button onClick={randomChar}>Random Character</button>
    </div>
  );
}
