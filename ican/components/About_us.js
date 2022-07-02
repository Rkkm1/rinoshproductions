import "./About_us.css"
import about_us_img1 from "../img/typing.png"

function About_us(){
    return(
        <section className="about-us">

            <div className="about-us-left">
                <h1>About us</h1>
                <p>Interncan is an EdTech supply chain platform in India working in a B2B mode to make corporate life a comfortable one for students.  Nourishing the required skill sets, Interncan brings an effortless investment of programs to make the young aspirants professionally confident. Interncan collaborates with the top EdTech partners who provide necessary pinpoints to give a successful outcome. Our program charts are confident-crackers from Business Clinics to Virtual Internship Experience Program (VIEP) and many more. We create a world of successful corporate stories. We focus on the personal and professional development of students to create a space of ‘Comfort’ in the corporate sector.</p>
           </div>


           <div className="about-us-right">
               <img src={ about_us_img1}/>




           </div>











        </section>





    );
}
export default About_us;