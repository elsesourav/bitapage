import Footer from "./index/Footer";
import Main from "./index/Main";
import Nav from "./index/Nav";

export default function Basic(params) {
   return (
      <div id="App">
         <Nav></Nav>
         <Main></Main>
         <Footer></Footer>
      </div>
   );
}
