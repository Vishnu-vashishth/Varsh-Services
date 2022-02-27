import './Heads.css'
import Card from './Card';
import Img1 from "../../images/project manager.jpg";
import Img2 from "../../images/founder.JPG";
import Img3 from "../../images/managing director.jpeg";

export const Heads = () => (
    <>
    <div className="heading">
        <h1>Our heads</h1>
    </div>
    <div className='Heads'>
    <Card name="Kuldeep Singh" designation="Project Manager" image={Img1}/>
    <Card name="Adarsh Geeta Gupta" designation="CEO & Director" image={Img2}/>
    <Card name="Vartika Ranjan" designation="Managing Director" image={Img3}/>
    </div>
    </>
  )
  