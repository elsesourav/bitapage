import React from "react";
import Home from "./Home";
import Work from "./Work";
import About from "./About";
import "../css/home.css";

class Main extends React.Component {
   render() {
      return (
         <main>
            <Home></Home>
            <Work></Work>
            <About></About>
         </main>
      );
   }
}

export default Main;
