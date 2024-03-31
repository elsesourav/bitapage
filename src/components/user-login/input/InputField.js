import { useState } from "react";
import styles from "../../../utils/css/InputField.module.css";

export default function UserSignin({ name, type, ...rest }) {
   const [show, setShow] = useState("");
   const [eye, setEye] = useState(true);

   const typingInput = ({ target }) =>
      setShow(target.value === "" ? "" : "active");
   const eyeInput = () => setEye(!eye);

   return (
      <div className={styles.cover}>
         <div className={styles.inputBox}>
            <label className={show && styles.active}>{name}</label>
            <input
               type={type === "password" ? (eye ? "password" : "text") : type}
               {...rest}
               onInput={typingInput}
            />

            {type.toLowerCase() === "password" && (
               <div className={styles.eyeBtn} onClick={eyeInput}>
                  <i className={eye ? "sbi-eye1" : "sbi-eye-slash"}></i>
               </div>
            )}
         </div>
         <div className={styles.highlightLine}></div>
      </div>
   );
}
