import './Carousel.css';
import Freedom from './Images/img1.jpg';
import Breaker from './Images/img2.jpg';
import Astray from './Images/img3.jpg';
import HeavyArms from './Images/img4.jpg';
import Wasabi from './Images/img5.jpg';

function CarouselCard() {

return (


    <div className="Container">
    
   
      <section id="slider">
   
        <input type="radio" name="slider" id="s1" defaultChecked={true} hidden={true}/>
        <input type="radio" name="slider" id="s2"  />
        <input type="radio" name="slider" id="s3"  />
        <input type="radio" name="slider" id="s4"  />
        <input type="radio" name="slider" id="s5"  />
      
        

        <label htmlFor="s1" id="slide1"><img src={Freedom} alt="Freedom Gundam"/></label>
        <label htmlFor="s2" id="slide2"><img src={Breaker} alt="Breaker Gundam"/></label>
        <label htmlFor="s3" id="slide3"><img src={Astray} alt="Astray Gundam"/></label>
        <label htmlFor="s4" id="slide4"><img src={HeavyArms} alt="Heavy Arms Gundam"/></label>
        <label htmlFor="s5" id="slide5"><img src={Wasabi} alt="Wasabi"/></label>
      </section>
    </div>

  );
}

export default CarouselCard;
