import React from "react";
import "../../../utils/css/home.css";
import me from "../../../utils/img/me.png";

export default function Home() {
   return (
      <section id="me">
         <div id="backgroundImage">
            <img src={me} alt="" />
         </div>
         <div id="bio">
            <h2>SOURAV BARUI</h2>
            <p>
               As a full stack developer, Mainly I build scalable and efficient
               web applications using only pure JavaScript, HTML, and CSS.
            </p>
         </div>
      </section>
   );
}
