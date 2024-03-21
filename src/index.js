import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";

import "./css/global.css";
import "./icons/css/icon.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
   </React.StrictMode>
);
reportWebVitals();
