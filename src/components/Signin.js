import Footer from "./index/Footer"
import InputField from "./user-login/input/InputField"

import "../../src/utils/css/user.css"

export default function UserSignin(params) {
   return (
      <div id="user-log-in-out">
         <div id="bodyCenter">
            <form>
               <p>Signin</p>
               <br />
               <InputField type="text" id="username" name="Username" required />
            </form>
         </div>   
         {<Footer />}
      </div>
   );
}