import React from "react";
import style from "../styles/NavBar.module.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetCharacters } from "../redux/actions";

export default function NavBar({ onSearch, logout }) {
  const dispatch = useDispatch();

  return (
    <div className={style.nav}>
      <button onClick={logout}>LogOut</button>

      {/* <Link to={"/"}>
        <div>LogOut</div>
      </Link> */}

      <Link className={style.link} to={"/home"}>
        <button onClick={() => dispatch(resetCharacters())}>Home</button>
      </Link>
      <Link className={style.link} to={"/about"}>
        <div>About</div>
      </Link>
      <Link className={style.link} to={"/favorites"}>
        <div>Favorites</div>
      </Link>
      <Link className={style.link} to={"/create"}>
        <div>Create</div>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
