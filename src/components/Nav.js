import React from 'react';
import "../css/nav.css";
import logo from "../img/logo.png";

class Nav extends React.Component {
   render() {
      return (
         <nav>
            <div id="branding">
            <div className="logo">
               <img src={logo} alt="sourav's image" />
            </div>
            <div id="pageName">It's SoURaV</div>
            </div>
            <div id="ul">
            <li><a href="#me">Home</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#content">Contact</a></li>
            <li><a href="#">Sign in</a></li>
            <li><a href="#">Sign up</a></li>
            </div>
         </nav>
      )
   }
}

export default Nav;
