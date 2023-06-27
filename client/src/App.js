import { useEffect, useState } from "react";
import "./App.css";

import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar";
import axios from "axios";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import About from "./components/About";
import Detail from "./components/Detail";
import ErrorNotFound from "./components/ErrorNotFound";
import Favorites from "./components/Favorites";

import { connect, useDispatch, useSelector } from "react-redux";
import { addFav, removeFav, addChar, removeChar } from "./redux/actions";
import CreateCharacter from "./components/CreateCharacter";

export default function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "eje@gmail.com";
  const PASSWORD = "@123QWEasd";

  const dispatch = useDispatch();

  function login(inputs) {
    if (inputs.password === PASSWORD && inputs.email === EMAIL) {
      setAccess(true);
      return navigate("/home");
    }
    return alert("no es el usuario");
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function logout() {
    setAccess(false);
    navigate("/");
  }

  // const [characters, setCharacters] = useState([]);
  // console.log(characters)
  const { characters } = useSelector((state) => state);
  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          const char = characters.find((ch) => ch.id === Number(id));
          if (char) return alert(`Ese characters id: ${id}, ya existe`);
          dispatch(addChar(data));
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }
  function onClose(id) {
    dispatch(removeChar(Number(id)));
    dispatch(removeFav(Number(id)));
  }

  const { pathname } = useLocation();
  // console.log(":::::", pathname.split("/"));

  useEffect(() => {
    const requests = [];
    for (let num = 22; num < 24; num++) {
      requests.push(
        axios.get(`https://rickandmortyapi.com/api/character?page=${num}`)
      );
    }
    Promise.all(requests)
      .then((results) => {
        // console.log(":::", results);
        let newCharacters = [];
        results.map(
          (chars) => (newCharacters = [...newCharacters, ...chars.data.results])
        );
        // console.log(":::", newCharacters);
        dispatch(addChar([...newCharacters]));
        //TODO: para cuando llevemos los characters al store (state global) de redux
        // dispatch(addCharacter(newCharacters))
      })
      .catch((error) => {});
  }, []);

  return (
    // console.log("access <<<>>>>>> ", access),
    <>
      {/* <h1>{title}</h1> */}
      {pathname === "/" ? null : <NavBar logout={logout} onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Login login={login} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/home" element={<Cards onClose={onClose} />}></Route>
        <Route
          path="/favorites"
          element={<Favorites onClose={onClose} />}
        ></Route>
        <Route path="/create" element={<CreateCharacter />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        {/* desde el Link -> /detail/algoMas */}
        {/* --> params => {id:undefined} -->next desde el Link le damos el value =>  {id:algoMas} */}
        <Route path="*" element={<ErrorNotFound />}></Route>
      </Routes>
      {/* {pathname !== "/" &&
      pathname !== "/home" &&
      pathname !== "/about" &&
      pathname.split("/")[1] !== `detail` ? (
        <ErrorNotFound />
      ) : null} */}
    </>
  );
}

// function mapDispatch(dispatch) {
//   return {
//     addFav: function (char) {
//       dispatch(addFav(char));
//     },
//     removeFav: function (id) {
//       dispatch(removeFav(id));
//     },
//   };
// }

// export default connect(null, mapDispatch)(App);
