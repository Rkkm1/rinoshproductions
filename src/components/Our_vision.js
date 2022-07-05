import './Our_vision.css'
import Group from "../img/2d.png"

function Our_vision(){
    return(
      <section className='vision'>

             <div className='left'>
                     <img src={Group}/>
             </div>
             <div className='right'>
               <h1>Our Vision</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac nisl sed nibh pretium molestie et id leo. Pellentesque at faucibus arcu, et fringilla est. Maecenas a ipsum sit amet ante finibus ultricies. Sed nec commodo dui. </p>
             </div>

      </section>
    );
}export default Our_vision;