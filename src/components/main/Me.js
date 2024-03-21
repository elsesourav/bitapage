import React from "react";
import "../../css/home.css";
import me from "../../img/me.png"

class Me extends React.Component {
   render() {
      return (
         <section id="me">
            <div id="backgroundImage">
               <img src={me} alt="" />
            </div>
            <div id="bio">
               <h2>SOURAV BARUI</h2>
               <p>
                  As a full stack developer, Mainly I build scalable and
                  efficient web applications using only pure JavaScript, HTML,
                  and CSS.
               </p>
            </div>
         </section>
      );
   }
}

export default Me;
