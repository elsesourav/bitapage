import React from "react";
import "../../utils/css/home.css";
import About from "./main/About";
import Home from "./main/Home";
import Work from "./main/Work";

export default function Main() {
   return (
      <main>
         <Home></Home>
         <Work></Work>
         <About></About>
      </main>
   );
}
