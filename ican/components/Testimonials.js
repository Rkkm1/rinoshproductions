import "./Testimonials.css"
import img11 from "../img/rachel.jpg"
import img22 from "../img/jennifer2.png"
import img33 from "../img/angelina.jpg"
function Testimonials(){
    return(
        

<section class="Testimonials">
        <h1>Testimonial</h1>

        <div class="testi-row">
            
            <div class="testi-col">
                <img  src={img11} />
                <h3>Rachel MacAdams</h3>
                <p>It is a long established fact that a reader will page when looking at its layout. The point of It is a long established fact that a reader will page when looking at its layout.</p>
            </div>
            <div class="testi-col">
                <img src={img22} />
                <h3>Jennifer Anistion</h3>
                <p>It is a long established fact that a reader will page when looking at its layout. The point of It is a long established fact that a reader will page when looking at its layout.</p>
            </div>
            <div class="testi-col">
                <img src={img33} />
                <h3>Angelina Jolie</h3>
                <p>It is a long established fact that a reader will page when looking at its layout. The point of It is a long established fact that a reader will page when looking at its layout.</p>
            </div>

        </div>

    </section>

    );
}
export default Testimonials;