import Footer from "./index/Footer"
import InputField from "./user-login/input/InputField";
import SubmitBtn from "./user-login/input/Submit";
import styles from "../utils/css/UserSignin.module.css";

export default function UserSignin(params) {
   return (
      <div className={styles.userLogInOut}>
         <div className={styles.bodyCenter}>
            <form>
               <p>Signup</p>
               <InputField type="text" name="Full Name" spellCheck="false" required />
               <InputField type="text" name="Username" spellCheck="false" required />
               <InputField type="email" name="E-Mail" spellCheck="false" required />
               <InputField type="password" id="password" name="Password" spellCheck="false" required />
               <SubmitBtn value="SUBMIT"/>
               <div className={styles.goPage}>i have already account. <a href="./signin">Signin Now</a></div>
            </form>
         </div>   
         {<Footer />}
      </div>
   );
}