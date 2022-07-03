import "./Partners.css"
import part1 from "../img/dsds.png"
import part2 from "../img/Group 10091.png"
import part3 from "../img/image 16.png"
import part4 from "../img/image 8.png"
import part5 from "../img/Group.png"
import part6 from "../img/image 17.png"
import part7 from "../img/image 13.png"
import part8 from "../img/IBP 1.png"

function Partners(){

    return(
        <section className='Partners'>
            
          <div className='head'>
              <h1>Our partner organizations</h1>
          </div>
             
             <div className='image'>
                 <img src={part1}/>
                 <img src={part2}/>
                 <img src={part3}/>
                 <img src={part4}/>
                 <img src={part5}/>
                 <img src={part6}/>
                 <img src={part7}/>
                 <img src={part8}/>
                 
             </div>


        </section>
             
         

    );
}
export default Partners;