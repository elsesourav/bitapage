import React from "react";
import "../../utils/css/nav.css";
import logo from "../../utils/img/logo.png";

export default function Nav() {
   return (
      <nav>
         <div id="branding">
            <div className="logo">
               <img src={logo} alt="Sourav Barui" />
            </div>
            <div id="pageName">It's SoURaV</div>
         </div>
         <div id="ul">
            <li>
               <a href="#me">Home</a>
            </li>
            <li>
               <a href="#work">Work</a>
            </li>
            <li>
               <a href="#about">About</a>
            </li>
            <li>
               <a href="#content">Contact</a>
            </li>
            <li>
               <a href="/signin">Sign in</a>
            </li>
         </div>
      </nav>
   );
}
