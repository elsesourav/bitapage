import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Basic from "./Basic"

import "../utils/css/global.css";
import "../utils/icons/css/icon.css";

export default function App(params) {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<Basic />}/>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
         </Routes>
      </BrowserRouter>
   );
}