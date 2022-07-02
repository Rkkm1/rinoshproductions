import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main_page from './components/Main_page';
import About_us from './components/About_us';
import Our_features from './components/Our_features';
import Our from './components/Our';
import Our_mission from './components/Our_mission';
import Events from './components/Events';
import Our_vision from './components/Our_vision';
import Programs_offered from './components/Programs_offered';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import Partners from './components/Partners';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main_page/> 
      <About_us/>
      <Our_features/>
      <Our/>
      <Our_mission/>
      < Events/>
      <Our_vision/>
      <Programs_offered/>
       <Testimonials/>
       <Partners/>
       <FAQs/>
       <Footer/>
  

      
    </div>
  );
}

export default App;
