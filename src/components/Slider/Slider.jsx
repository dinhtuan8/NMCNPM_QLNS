import "./slider.css";
import Banner1 from "../../images/banner1.jpg";
import Banner2 from "../../images/banner2.jpg";
import Banner3 from "../../images/banner3.jpg";
import {useState} from "react";

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{
        if(direction==="left"){
            setSlideIndex(slideIndex - 1);
        }else{
            setSlideIndex(slideIndex + 1);
        }
    }
    return (
    <div className="sldier-container">
        {slideIndex !==0 && <i onClick={()=>handleClick("left")} className="bi bi-chevron-double-left arrow-left"></i>}

        <div style={{transform:`translateX(${slideIndex * -100}vw)`}} 
            className="slider-wrapper">
            <div className="slide first-slide">
                <div className="slide-img-wrapper">
                    <img src={Banner1} alt="" />
                </div>
            </div>
            <div className="slide second-slide">
                <div className="slide-img-wrapper">
                    <img src={Banner2} alt="" />
                </div>
            </div>
            <div className="slide third-slide">
                <div className="slide-img-wrapper">
                    <img src={Banner3} alt="" />
                </div>
            </div>
        </div>        
        {slideIndex!==2 && <i onClick={()=>handleClick("right")} className="bi bi-chevron-double-right arrow-right"></i>}
    </div>
    );
}

export default Slider;
