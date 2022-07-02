import "./Our_mission.css"
import img1 from "../img/Frame (1).png"


function Our_mission(){
    return(
        <section className="Our_mission">

            <div className="Our_mission_images">
                <img src={img1}/>
            </div>

            <div className="Our_mission_left">
                <h1> Our mission</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac nisl sed nibh pretium molestie et id leo. Pellentesque at faucibus arcu, et fringilla est. Maecenas a ipsum sit amet ante finibus ultricies. </p>

            </div>

        </section>
    );
}
export default Our_mission;