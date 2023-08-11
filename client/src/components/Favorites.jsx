import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import style from "../styles/Cards.module.css";
import Card from "./Card";

import { filterGender, reset, filterAtoZ } from "../redux/actions";

export default function Favorites({ onClose }) {
  const { myFavorites } = useSelector((s) => s);
  const dispatch = useDispatch();

//   todo: solución de resetear el value del select de gender a DEFAULT
// ? bug que si tocamos Male, luego reset y luego otra vez Male ya no funciona ya que su valor ya estaba en Male
// * Usando [selectedGender, setSelectedGender] = useState("DEFAULT");

  const [selectedGender, setSelectedGender] = useState("DEFAULT");

  const handleGender = (event) => {
    const { value } = event.target;
    setSelectedGender(value);
    dispatch(filterGender(value));
  };

  const handleAtoZ = (event) => {
    const { value } = event.target;
    dispatch(filterAtoZ(value));
  };

  const handleReset = () => {
    dispatch(reset());
    setSelectedGender("DEFAULT");
  };

  return (
    <div className={style.cards}>
      <nav>
        <select name="gender" onChange={handleGender} value={selectedGender}>
          <option value="DEFAULT" disabled>
            Select Gender:
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        <select name="gender" onChange={handleAtoZ} defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disabled>
            Select Order:
          </option>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <button onClick={handleReset}>Reset</button>
      </nav>
      {myFavorites?.map((char, index) => {
        return (
          <Card key={char.id} char={char} onClose={onClose} inFav={true} />
        );
      })}
    </div>
  );
}

// function mapState(state) {
//   return {
//     myFavorites: state.myFavorites,
//   };
// }

// export default connect(mapState)(Favorites);

/*
todo: solución de resetear el value del select de gender a DEFAULT
? bug que si tocamos Male, luego reset y luego otra vez Male ya no funciona ya que su valor ya estaba en Male
* Usando { useRef }

import React, { useRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import style from "../styles/Cards.module.css";
import Card from "./Card";

import { filterGender, reset, filterAtoZ } from "../redux/actions";

export default function Favorites({ onClose }) {
  const { myFavorites } = useSelector((s) => s);
  const dispatch = useDispatch();
  const genderSelectRef = useRef(null);

  const handleGender = (event) => {
    const { value } = event.target;
    dispatch(filterGender(value));
  };

  const handleAtoZ = (event) => {
    const { value } = event.target;
    dispatch(filterAtoZ(value));
  };

  const handleReset = () => {
    dispatch(reset());
    genderSelectRef.current.value = "DEFAULT";
  };

  return (
    <div className={style.cards}>
      <nav>
        <select name="gender" onChange={handleGender} defaultValue={"DEFAULT"} ref={genderSelectRef}>
          <option value="DEFAULT" disabled>
            Select Gender:
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        <select name="gender" onChange={handleAtoZ} defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disabled>
            Select Order:
          </option>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <button onClick={handleReset}>Reset</button>
      </nav>
      {myFavorites?.map((char, index) => {
        return <Card key={char.id} char={char} onClose={onClose} inFav={true} />;
      })}
    </div>
  );
}

*/
