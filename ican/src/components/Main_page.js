import "./Main_page.css"
import main_page_image from "../img/Online learning-cuate.png"


function Main_page(){
    return(


        <section className="Main_page">
            <div className="Main_page-left">

           
            <h1>"The Best Way To <br/>Perdict The Future Is<br/>To Create It To."</h1>
            <h3>  -Abraham Lincoin</h3>

            </div>

            <div className="Main_page-right">
                <img src={main_page_image}/>


            </div>










        </section>

    );
}
export default Main_page;