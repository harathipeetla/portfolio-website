import { Component } from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import './index.css'

class Contact extends Component{
    render(){
        return(
         <div>

            <div className="contact-container">
               
            <div className="contact-info-container">
                <div>
                    <h1><span>Want To</span><br/>Connect<br/><span>With Me?</span></h1>
                    
                </div>

                <div className="form-container">
      <form action="#">
         <div className="form-row">
            <div className="input-data">
               <input type="text" required/>
               <div className="underline"></div>
               <label for="">First Name</label>
            </div>
            <div className="input-data">
               <input type="text" required/>
               <div className="underline"></div>
               <label for="">Last Name</label>
            </div>
         </div>
         <div className="form-row">
            <div className="input-data">
               <input type="email" required/>
               <div className="underline"></div>
               <label for="">Email</label>
            </div>
            <div className="input-data">
               <input type="text" required/>
               <div className="underline"></div>
               <label for="">Conatct Num</label>
            </div>
         </div>
         {/* <div className="form-row">
            <div className="input-data">
               <input type="text" required/>
               <div className="underline"></div>
               <label for="">First Name</label>
            </div>
            <div className="input-data">
               <input type="text" required/>
               <div className="underline"></div>
               <label for="">Last Name</label>
            </div>
         </div> */}
          <div class="form-row submit-btn">
               <div class="input-data">
                  <div class="inner"></div>
                  <input type="submit" value="submit"/>
               </div>
            </div>
      </form>
    </div>
   
    </div>
    <hr/>
        <div>
            <div className="contact-details">
                <div>
                  <a href="https://github.com/harathipeetla"><FaGithub/></a> 
                </div>
                <div>
                   <a href="https://www.linkedin.com/in/harathi-peetla-harathi"><FaLinkedin/></a> 
                </div>
                <div>
                   {/* <a><IoMdMail/></a>  */}
                </div>
                <div className="contact-me">
                  <p><FaPhone /> {" "}+91 9398734279</p>
                  <p><IoMailSharp/>{" "}harathi848@gmail.com</p>
                
                </div>
                
        </div>
        
        

        
        </div>
    </div>
    
    </div>

        )
    }
}

export default Contact