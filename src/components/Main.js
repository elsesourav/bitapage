import React from "react";
import "../css/home.css";
import About from "./main/About";
import Me from "./main/Me";
import Work from "./main/Work";

class Main extends React.Component {
   render() {
      return (
         <main>
            <Me></Me>
            <Work></Work>
            <About></About>
         </main>
      );
   }
}

export default Main;
