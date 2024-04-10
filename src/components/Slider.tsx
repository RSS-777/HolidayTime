import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import forestImg from '../assets/images/home/building_in_the_forest.svg';

export const SimpleSlider: FC = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider className="slider" {...settings}>
            <div>
                <img src={forestImg} alt="Image building in the forest" />
            </div>
            <div>
                <img src={forestImg} alt="Image building in the forest" />
            </div>
            <div>
                <img src={forestImg} alt="Image building in the forest" />
            </div>
            <div>
                <img src={forestImg} alt="Image building in the forest" />
            </div>
            <div>
                <img src={forestImg} alt="Image building in the forest" />
            </div>
            <div>
                <img src={forestImg} alt="Image building in the forest" />
            </div>
        </Slider>
    );
}