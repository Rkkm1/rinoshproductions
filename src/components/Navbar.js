import "./Navbar.css"
import logo from "../img/ican.png"
import login_btn from "../img/Vector.png"

function Navbar(){
    return (

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


    );

}
export default Navbar;

