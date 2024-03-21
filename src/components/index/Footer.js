import React from "react";
import "../../utils/css/footer.css";

export default function Footer() {
   return (
      <footer>
         <div id="content">
            <div id="location" className="cell">
               <div className="name">
                  <div className="icon">
                     <i className="sbi-location_pin"></i>
                  </div>
                  <p>Location</p>
               </div>
               <div className="address">
                  India, West Bengal, North 24 Parganas, Chandpara
               </div>
            </div>
            <div id="socialMedia" className="cell">
               <div className="name">Social Media</div>
               <div className="list">
                  <a href="#">
                     <div className="icon">
                        <i className="sbi-facebook"></i>
                     </div>
                  </a>
                  <a href="#">
                     <div className="icon">
                        <i className="sbi-instagram3"></i>
                     </div>
                  </a>
                  <a href="#">
                     <div className="icon">
                        <i className="sbi-linkedin1"></i>
                     </div>
                  </a>
                  <a href="#">
                     <div className="icon">
                        <i className="sbi-twitter3"></i>
                     </div>
                  </a>
                  <a href="#">
                     <div className="icon">
                        <i className="sbi-github"></i>
                     </div>
                  </a>
               </div>
            </div>
            <div id="commentMe" className="cell">
               <form className="cover">
                  <div className="user-input">
                     <input
                        type="text"
                        id="userName"
                        placeholder="Name"
                        required
                     />
                  </div>
                  <div className="user-input">
                     <input
                        type="email"
                        id="userEmail"
                        placeholder="Email"
                        required
                     />
                  </div>
                  <div className="user-input">
                     <textarea
                        id="userMessage"
                        cols="30"
                        rows="3"
                        placeholder="Message"
                        required
                     ></textarea>
                  </div>
                  <div className="user-input">
                     <button type="submit" id="sandButton">
                        <div className="icon">
                           <i className="sbi-chat1"></i>
                        </div>
                        <p>Send a Message</p>
                     </button>
                  </div>
               </form>
            </div>
         </div>
         <div id="copyright">copyright &copy; SouravBarui 2024</div>
      </footer>
   );
}
