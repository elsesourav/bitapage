import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/Main";

import reportWebVitals from "./reportWebVitals";
import "./css/global.css";
import "./icons/css/icon.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
   </React.StrictMode>
);
reportWebVitals();
