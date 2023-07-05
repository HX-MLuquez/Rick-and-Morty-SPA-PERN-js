import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import style from "../styles/Detail.module.css";
import { useSelector } from "react-redux";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const { charactersOrigin } = useSelector((s) => s);
  // console.log("--->", id)
  //TODO: MOUNT <-> upDate ID
  useEffect(() => {
    const char = charactersOrigin?.find((ch) => ch.id === Number(id));
    if (char) setCharacter(char);
    else window.alert("No hay personajes con ese ID");
    // return setCharacter({});
  }, [id]);
  return (
    console.log("char:", character),
    (
      <div className={style.detail}>
        <div className={style.text}>
          <h3>Id: {id}</h3>
          <h1>{character.name}</h1>
          <h2>Status: {character.status}</h2>
          <p>Specie: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin?.name}</p>
        </div>
        <div className={style.img}>
          <img src={character.image} alt={character.name}></img>
        </div>
      </div>
    )
  );
}
