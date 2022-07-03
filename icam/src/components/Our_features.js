import "./Our_features.css"
import img1 from "../img/job.png"
import img2 from "../img/office.png"
import img3 from "../img/support.png"
import img4 from "../img/mentor.png"
import img5 from "../img/easy.png"
import img6 from "../img/positive.png"
import reading from "../img/reading.png"

function Our_features(){
    return(
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

    );
}
export default Our_features;