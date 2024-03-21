import { useState } from "react";
import "../../../utils/css/work.css";
import Card from "./Card";
import ms from "../../../utils/img/minesweeper.png";

export default function CardList(params) {
   const [cards] = useState([
      {
         src: ms,
         alt: "Minesweeper"
      },
      {
         src: ms,
         alt: "Minesweeper"
      },
      {
         src: ms,
         alt: "Minesweeper"
      },
      {
         src: ms,
         alt: "Minesweeper"
      },
      {
         src: ms,
         alt: "Minesweeper"
      },
      {
         src: ms,
         alt: "Minesweeper"
      },
      {
         src: ms,
         alt: "Minesweeper"
      },
   ]);

   return (
      <div>
         <p className="category-name">{params.name}</p>
         <div className="cards">
            {cards.map(({src, alt}, i) => {
               return (
                  <Card src={src} key={i} alt={alt}/>
               )
            })}
         </div>
      </div>
   );
}
