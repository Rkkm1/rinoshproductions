import "./Footer.css"
import logo from "../img/ican2.png"
import logo1 from "../img/linkedin (1).png"
import logo2 from "../img/linkedin (1).png"
import logo3 from "../img/linkedin (2).png"


function Footer(){
    return (

        <section className="footer">
         <section className="upfoot">
            <div className="footer-left">
                <img src={logo}/>
             </div>

             <div class="footer-links">
                
                    
                    <a href="">Virtual Intership</a>
                    <a href="">Sitemap</a>
                    <a href="">Contact us</a>
                    <a href="">Legal and privacy</a>

                    
            

            </div>
            </section>
            <section className="foot">
            <div className="left">
                <p>InternCan is an online internship training and facilitation platform providing rigorous job-oriented learning experience to the student community to make them corporate ready and bridge the knowledge gap prevailing across all the industries. Merging state of art technology and bespoke learning modules backed by experienced faculties, iCan equips the student community with the right skillsets, needed to match and excel in their respective job profiles. More than a training platform, iCan delivers a new learning experience and is accessible anytime from anywhere across the globe.</p>
            </div>
            <div className="right">
               <img src={logo1}/>
               <img src={logo2}/>
               <img src={logo3}/>
            </div>
                 
            </section>

            <div className="bottom">
                <h3>Powered by techbyheart</h3>




            </div>



        </section>


    );

}
export default Footer;