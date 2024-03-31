import Footer from "./index/Footer"
import InputField from "./user-login/input/InputField";
import SubmitBtn from "./user-login/input/Submit";
import styles from "../utils/css/UserSignin.module.css";

const regexs = {
   username: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
}

export default function UserSignin(params) {
   return (
      <div className={styles.userLogInOut}>
         <div className={styles.bodyCenter}>
            <form>
               <p>Signin</p>
               <InputField type="text" id="username" name="Username" spellCheck="false" required />
               <InputField type="password" id="password" name="Password" spellCheck="false" required />
               <SubmitBtn value="SUBMIT"/>
               <div className={styles.goPage}>i am new, don't have account <a href="./signup">Create One</a></div>
            </form>
         </div>   
         {<Footer />}
      </div>
   );
}