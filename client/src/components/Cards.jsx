import Card from "./Card";
import style from "../styles/Cards.module.css";
import { useSelector } from "react-redux";

import Paginate from "./Paginate";
import { useEffect } from "react";

export default function Cards({ onClose }) {
  const { characters, numPage } = useSelector((state) => state);

  console.log("::-------->",characters);
  const cantCharPerPage = 6;
                                  // numPage    -> 1        2       3
  let desde = (numPage - 1) * cantCharPerPage; // 0          4     8
  let hasta = numPage * cantCharPerPage;       //  4          8     12

  let cantPage = Math.floor(characters.length / cantCharPerPage);


  // 0,1,2,3    4,5,6,7   8,9,10,11
  const viewCharacters = characters?.slice(desde, hasta);

  console.log("#####num page", numPage) // sarasa
  return (
    <div>
      <div className={style.cards}>
        {/* <h2>Estamos en el home y podemos mostrar y/o ver nuestras cards</h2> */}
        {viewCharacters?.map((char, index) => {
          return <Card key={char.id} char={char} onClose={onClose} />;
        })}
      </div>
      <div>

      </div>
      <Paginate numPage={numPage} cantPage={cantPage} />
    </div>
  );
}

// [12]  x pantalla solo 4
/*
var numPage = 0

[[{}{}{}{}][{}{}{}{}][{}{}{}{}]] <- chars

chars[0]
chars[1]
chars[2]

*/



// [12]  x pantalla solo 4
/*


db -> dame la data de los chars
[{}{}{}{}{}{}{}{}{}{}{}{}] <- chars   STORE 


CARDS
var cantCard = 4
var page = 1  --> 2
var desde = (0 + (page-1)) * 4   -> 4
var hasta = cantCard * page   -> 4 

const viewChars = chars.slice(0,4)   chars.slice(4,8)   chars.slice(8,12)

0,1,2,3    4,5,6,7   8,9,10,11


btton -> page++  

*/
