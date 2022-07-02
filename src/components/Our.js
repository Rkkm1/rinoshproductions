import "./Our.css"
import partner1 from "../img/p (5).png"
import partner2 from "../img/p (4).png"
import partner3 from "../img/p (3).png"
import partner4 from "../img/p (2).png"
import partner5 from "../img/p (1).png"

function Our(){
    return(
        <section className="partners">

            <div>
                <h1> Our Partner Institutions</h1>

            </div>

        <div className="our-row">
            <div className="our-image">
                 <img src={partner1}/>
                 <img src={partner2}/>
                 <img src={partner3}/>
                 <img src={partner4}/>
                 <img src={partner5}/>
            </div>
            
         </div>

         <section class="info-bar">

        <div class="info-bar-box">

            <div><h1>5000+ <br/> <span>Customers</span></h1></div> 
            <div><h1>5+ <br/><span>Countries</span></h1></div>    
            <div><h1>60+ <br/><span>Employees</span></h1></div> 
            <div><h1>10+ <br/><span>Services</span></h1></div> 
         </div>

    </section>












        </section>







    );
}
export default Our;