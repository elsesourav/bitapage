import React from "react";

import "../../../utils/css/input.css";


export default class UserSignin extends React.Component {
   render() {
      const { name, type, id, required } = this.props;
      return (
      <div className="input-box">
         <label>{name}</label>
         {required ? 
            <input type={type} id={id} name={name} required /> :
            <input type={type} id={id} name={name}/> 
         }
         <span className="highlight-line"></span>
      </div>
      );
   }
}
