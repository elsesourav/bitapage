import React from "react";
import "../../css/work.css";
import CardList from "./CardList";

class Work extends React.Component {
   render() {
      return (
         <section id="work">
            <div id="projects">
               <CardList name={"WEB"} />
            </div>
         </section>
      );
   }
}

export default Work;
