import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import style from "../styles/Cards.module.css";
import Card from "./Card";

import { filterGender, reset, filterAtoZ } from "../redux/actions";

export default function Favorites({ onClose }) {
  const { myFavorites } = useSelector((s) => s);
  const dispatch = useDispatch();
  /*
Male, Female, Genderless y unknown.
*/
  const handleGender = (event) => {
    const { value } = event.target;
    dispatch(filterGender(value));
  };

  const handleAtoZ = (event) => {
    const { value } = event.target;
    dispatch(filterAtoZ(value));
  };


 
  return (
    <div className={style.cards}>
      <nav>
        <select name="gender" onChange={handleGender} defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disable>
            Select Gender:{" "}
          </option>
          <option value="Male" disable>
            Male
          </option>
          <option value="Female" disable>
            Female
          </option>
          <option value="Genderless" disable>
            Genderless
          </option>
          <option value="unknown" disable>
            unknown
          </option>
        </select>
        <select name="gender" onChange={handleAtoZ} defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disable>
            Select Order:
          </option>
          <option value="A" disable>
            Ascendente
          </option>
          <option value="D" disable>
            Descendente
          </option>
        </select>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </nav>
      {myFavorites?.map((char, index) => {
        return <Card key={char.id} char={char} onClose={onClose} inFav={true} />;
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
