import { useState } from "react";
import style from "../styles/SearchBar.module.css";
export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  //  <input type="search" onChange={handleChange}/>
  const handleChange = (event) => {
    //console.log("event ---> ", event.target.value)
    setId(event.target.value);
    //  setId((idOld) => idOld + 1);
    //  setId(id + 1);
  };
  const add = () => {
    onSearch(id);
    setId("");
  };
  const randomChar = () => {
    const numRan = Math.floor(Math.random() * 825) + 1;
    onSearch(numRan);
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
      <button onClick={add}>Agregar</button>
      <button onClick={randomChar}>Random Character</button>
    </div>
  );
}
