import "./FAQs.css"
import img from "../img/add.svg"




function FAQs(){
    return(

        <section className="FAQs">
            <h1>FAQs</h1>



            <div  className="bar">
                <h4>How long does it take to download updates?</h4>
                <img src={img}/>

            </div>

            

            <div className="bar">
                <h4>How to use Bootstrap grid system to build responsive layout</h4>
                <img src={img}/>
            </div>
            

            <div className="bar">
                <h4>How to use SCSS variables to build custom color?</h4>
                <img src={img}/>

            </div>

            <div className="bar">
                <h4>How long does it take to download updates?</h4>
                <img src={img}/>

            </div>
            <div className="bar">
                <h4>What is the flex layout?</h4>
                <img src={img}/>

            </div>
            <div className="bar">
                <h4>How long does it take to download updates?</h4>
                <img src={img}/>
                

            </div>

            <div className="bar">
                <h4>Where to buy this UI dashboard?</h4>
                <img src={img}/>

            </div>

            <div className="bar">
                <h4>How long does it take to download updates?</h4>
                <img src={img}/>
            </div>







        </section>

    );
}
export default FAQs;