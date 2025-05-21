import './Home.css'; 
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tabww from './Tabww';
import Projectc from './Projectc';
import About from './About';
import Certificate from './Certificate';
import ServicesSection from './Service';


function Home() {
    const text = "Hello! I Am Fawaz N P";

    const handleButtonClick = () => {
      toast.success('Resume Downloaded..!');
    }; 


  return (
    <>
    <div className="home-container" >
      <div className="overlay">
        <div className="content">
          <h1 className='fawazheading mb-4' style={{ marginRight: '15px' }} >
          {/* {text.split('').map((letter, index) => (
        <span key={index}>{letter}</span>
      ))} */} Hello! I am Fawaz N P
          </h1>
            
          <p className="short-paragraph">
            A passionate Front end developer, eager to learn and create  awesome web experiences.
          </p>
        <a
  href="/Fawaz N P Web Dev.pdf"
  download="Fawaz_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-lg px-4 py-2 mt-3"
  onClick={handleButtonClick}
  style={{
    color: 'white',
    backgroundColor: 'transparent',
    border: '2px solid white',
    borderRadius: '8px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
     minWidth: '48px',
    minHeight: '48px',
  }}
  aria-label="Download Resume"
>
  Resume <i className="fa-solid fa-download fa-beat fa-sm p-2"></i>
</a>
 
            <ToastContainer position='top-left' />
        </div>
      </div>
    </div>

    
    <div id='about'>
  

    <About />
    </div>

<Tabww />

<h1 className='text-center' id='projects'>My Projects</h1>
  
    <Projectc />


    <Certificate />

<ServicesSection />

      <section id='contact'>

      </section>
    </>
  );
}

export default Home;
