import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./User";
import Basic from "./Basic"

import "../utils/css/global.css";
import "../utils/icons/css/icon.css";

export default function App(params) {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<Basic />}/>
            <Route path="/user" element={<User />} />
         </Routes>
      </BrowserRouter>
   );
}