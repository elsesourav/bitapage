import { useState } from "react";
import styles from "../../../utils/css/SubmitBtn.module.css"

export default function SubmitBtn({ ...rest }) {
   return (
      <div className={styles.buttonBox}>
         <input type="submit" {...rest} />
      </div>
   );
}
