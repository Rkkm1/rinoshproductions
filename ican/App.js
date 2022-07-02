import img1 from "../img/job.png"
import img2 from "../img/office.png"
import img3 from "../img/support.png"
import img4 from "../img/mentor.png"
import img5 from "../img/easy.png"
import img6 from "../img/positive.png"
import img7 from "../img/Frame (1).png"
import img8 from "../img/sd.png"
import img9 from "../img/meeting.png"
import img10 from "../img/suitcase.png"
import img11 from "../img/id-card.png"
import img12 from "../img/chart.png"
import img13 from "../img/portfolio.png"
import img14 from "../img/rachel.jpg"
import img15 from "../img/jennifer2.png"
import img17 from "../img/angelina.jpg"
import img16 from "../img/add.svg"
import reading from "../img/reading.png"
import partner1 from "../img/p (5).png"
import partner2 from "../img/p (4).png"
import partner3 from "../img/p (3).png"
import partner4 from "../img/p (2).png"
import partner5 from "../img/p (1).png"
import Group from "../img/2d.png"
import logo from "../img/ican2.png"
import logo1 from "../img/linkedin (1).png"
import logo2 from "../img/linkedin (1).png"
import logo3 from "../img/linkedin (2).png"

import './App.css';
function App() {
  return (
    <div className="App">






       <Footer/>

       <section className="Navbar">

<div className="Navbar-left">
    <img src={logo}/>
 </div>

 <div class="Navbar-links">
    
        <a href="">Home</a>
        <a href="">Virtual Intership</a>
        <a href="">partner portal</a>
        <a href="">Contact us</a>
        <a href="">About us</a>

        


</div>
<div className="Navbar-btn">

    <img src={login_btn}/>
    <a href="" class="Login-btn">Login</a>
    
</div>




</section>


<section className="Main_page">
            <div className="Main_page-left">

           
            <h1>"The Best Way To <br/>Perdict The Future Is<br/>To Create It To."</h1>
            <h3>  -Abraham Lincoin</h3>

            </div>

            <div className="Main_page-right">
                <img src={main_page_image}/>


            </div>


        </section>
        <section className="about-us">

<div className="about-us-left">
    <h1>About us</h1>
    <p>Interncan is an EdTech supply chain platform in India working in a B2B mode to make corporate life a comfortable one for students.  Nourishing the required skill sets, Interncan brings an effortless investment of programs to make the young aspirants professionally confident. Interncan collaborates with the top EdTech partners who provide necessary pinpoints to give a successful outcome. Our program charts are confident-crackers from Business Clinics to Virtual Internship Experience Program (VIEP) and many more. We create a world of successful corporate stories. We focus on the personal and professional development of students to create a space of ‘Comfort’ in the corporate sector.</p>
</div>


<div className="about-us-right">
   <img src={ about_us_img1}/>




</div>


</section>
<section className="our-fea">

<h1>Our features</h1>

<div className="our-fea-row">


    <div className="our-fea-col">
        <img src={img1}/>
        <h3>Career-Oriented</h3>
        <p>A perfect career is our focal point. By navigating the key factors to be a confident choice of corporates, we develop programs that are unique, useful, and time-updated.</p>
    </div>
    <div className="our-fea-col">
        <img src={img2}/>
        <h3>Professional Environment</h3>
        <p>You are the product of your surroundings. Interncan offers a professional environment to learn, comprehend and make it a part of a successful life. We influence your growth. </p>
    </div>


    <div className="our-fea-col">
        <img src={img3}/>
        <h3>Supportive </h3>
        <p>We don’t let you throw the arrows alone!! The task is to create success together. Our team is supportive, ready-to-help, and sails your ship confidently.</p>
    </div>
    <div className="our-fea-col">
        <img src={img4}/>
        <h3>Technically Updated</h3>
        <p>Technology isn’t stable. It moves along with new brainstorming ideas. The interncan team is updated with tech trends and becomes the change you want to see in the world.</p>
    </div>

    <div className="our-fea-col">
        <img src={img5}/>
        <h3>Easy Landscape</h3>
        <p>Joining with us is easy because we know the future is ready with hard work. You don’t have to run to catch a career. Our road is simple to travel.</p>
    </div>
    <div className="our-fea-col">
        <img src={img6}/>
        <h3>Positive</h3>
        <p>To be successful means to be positive. Interncan is of positive people with encouraging thoughts that clear your doubt about yourself. We build you positively!!!!</p>
    </div>


    </div>

<section className="banner">

    <div className="banner-left">
        <h2>Earn a Career that Suits You to the World</h2>
        <p>By Earning Skills, You are Earning a Successful Career </p>

    </div>

    <div className="banner-right"></div>
     <img src={reading}/>


</section>

</section>
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
        <section className="Our_mission">

<div className="Our_mission_images">
    <img src={img7}/>
</div>

<div className="Our_mission_left">
    <h1> Our mission</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac nisl sed nibh pretium molestie et id leo. Pellentesque at faucibus arcu, et fringilla est. Maecenas a ipsum sit amet ante finibus ultricies. </p>

</div>

</section>
<section className="Events">
        <h1>Events</h1>

    <div className="main_row">
    <div className="row">
    <div className="col">
            <img src={img8}/>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac nisl sed nibh pretium molestie et id leo. Pellentesque at faucibus arcu, et fringilla est. Maecenas a ipsum sit amet ante finibus ultricies.</p>
         
            <table  align="left">
                <tr>
                    <th>Start date</th>
                    <th>End date</th>
                </tr>
                <tr>
                    <td>26 dec 2019</td>
                    <td>26 dec 2019</td>
                </tr>
            </table>

            <div className="btn-main">

          
            <div className="btn">                   
            <a href="" class="Register-btn">Register Now</a>
            </div>
            </div>
     </div>

     <div className="col">
            <img src={img8}/>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac nisl sed nibh pretium molestie et id leo. Pellentesque at faucibus arcu, et fringilla est. Maecenas a ipsum sit amet ante finibus ultricies.</p>
         
            <table align="left">
                <tr>
                    <th>Start date</th>
                    <th>End date</th>
                </tr>
                <tr>
                    <td>26 dec 2019</td>
                    <td>26 dec 2019</td>
                </tr>
            </table>

            <div className="btn-main">

          
            <div className="btn">                   
            <a href="" class="Register-btn">Register Now</a>
            </div>
            </div>
     </div>

     <div className="col">
            <img src={img8}/>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac nisl sed nibh pretium molestie et id leo. Pellentesque at faucibus arcu, et fringilla est. Maecenas a ipsum sit amet ante finibus ultricies.</p>
         
            <table  align="left">
                <tr>
                    <th>Start date</th>
                    <th>End date</th>
                </tr>
                <tr>
                    <td>26 dec 2019</td>
                    <td>26 dec 2019</td>
                </tr>
            </table>

            <div className="btn-main">

          
            <div className="btn">                   
            <a href="" class="Register-btn">Register Now</a>
            </div>
            </div>
     </div>

    </div>
    </div>


</section>
<section className='vision'>

<div className='left'>
        <img src={Group}/>
</div>
<div className='right'>
  <h1>Our Vision</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac nisl sed nibh pretium molestie et id leo. Pellentesque at faucibus arcu, et fringilla est. Maecenas a ipsum sit amet ante finibus ultricies. Sed nec commodo dui. </p>
</div>

</section>
<section className="program_offered">
        <h1>Programs Offering</h1>

        <div className="program_offered_row">

            <div className="program_offered_col">
                <img src={img9}/>
                <h3>Skill Development Programs</h3>
                <p>Developing your skills that are key to progress in the competitive world structure</p>
             </div>

             
            <div className="program_offered_col">
                <img src={img10}/>
                <h3>Business Clinics</h3>
                <p>Intended to provide an experience-cum-practice in the corporate setting. You are evolving into a professional</p>
             </div>

             
            <div className="program_offered_col">
                <img src={img11}/>
                <h3>Internships</h3>
                <p>Internships help you to be a perfect fit for the corporate sector. Your journey is easy!</p>
             </div>

             
            <div className="program_offered_col">
                <img src={img12}/>
                <h3>Performance Report</h3>
                <p>Evaluate your performance for improvement, self-analyzing, and produce focused results</p>
             </div>

             
            <div className="program_offered_col">
                <img src={img13}/>
                <h3>Portfolio Mangement</h3>
                <p>Presenting your talents and qualities is a worthy task to get into the field</p>
             </div>

        </div>


</section>
<section class="Testimonials">
        <h1>Testimonial</h1>

        <div class="testi-row">
            
            <div class="testi-col">
                <img  src={img14} />
                <h3>Rachel MacAdams</h3>
                <p>It is a long established fact that a reader will page when looking at its layout. The point of It is a long established fact that a reader will page when looking at its layout.</p>
            </div>
            <div class="testi-col">
                <img src={img15} />
                <h3>Jennifer Anistion</h3>
                <p>It is a long established fact that a reader will page when looking at its layout. The point of It is a long established fact that a reader will page when looking at its layout.</p>
            </div>
            <div class="testi-col">
                <img src={img17} />
                <h3>Angelina Jolie</h3>
                <p>It is a long established fact that a reader will page when looking at its layout. The point of It is a long established fact that a reader will page when looking at its layout.</p>
            </div>

        </div>

    </section>
    <section className="FAQs">
            <h1>FAQs</h1>



            <div  className="bar">
                <h4>How long does it take to download updates?</h4>
                <img src={img16}/>

            </div>

            

            <div className="bar">
                <h4>How to use Bootstrap grid system to build responsive layout</h4>
                <img src={img16}/>
            </div>
            

            <div className="bar">
                <h4>How to use SCSS variables to build custom color?</h4>
                <img src={img16}/>

            </div>

            <div className="bar">
                <h4>How long does it take to download updates?</h4>
                <img src={img16}/>

            </div>
            <div className="bar">
                <h4>What is the flex layout?</h4>
                <img src={img16}/>

            </div>
            <div className="bar">
                <h4>How long does it take to download updates?</h4>
                <img src={img16}/>
                

            </div>

            <div className="bar">
                <h4>Where to buy this UI dashboard?</h4>
                <img src={img16}/>

            </div>

            <div className="bar">
                <h4>How long does it take to download updates?</h4>
                <img src={img16}/>
            </div>







        </section>
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








  

      
    </div>
  );
}

export default App;
