import "./Programs_offered.css"
import img1 from "../img/meeting.png"
import img2 from "../img/suitcase.png"
import img3 from "../img/id-card.png"
import img4 from "../img/chart.png"
import img5 from "../img/portfolio.png"

function Programs_offered(){
    return(

    <section className="program_offered">
        <h1>Programs Offering</h1>

        <div className="program_offered_row">

            <div className="program_offered_col">
                <img src={img1}/>
                <h3>Skill Development Programs</h3>
                <p>Developing your skills that are key to progress in the competitive world structure</p>
             </div>

             
            <div className="program_offered_col">
                <img src={img2}/>
                <h3>Business Clinics</h3>
                <p>Intended to provide an experience-cum-practice in the corporate setting. You are evolving into a professional</p>
             </div>

             
            <div className="program_offered_col">
                <img src={img3}/>
                <h3>Internships</h3>
                <p>Internships help you to be a perfect fit for the corporate sector. Your journey is easy!</p>
             </div>

             
            <div className="program_offered_col">
                <img src={img4}/>
                <h3>Performance Report</h3>
                <p>Evaluate your performance for improvement, self-analyzing, and produce focused results</p>
             </div>

             
            <div className="program_offered_col">
                <img src={img5}/>
                <h3>Portfolio Mangement</h3>
                <p>Presenting your talents and qualities is a worthy task to get into the field</p>
             </div>

        </div>






   














</section>
    );
}
export default Programs_offered;