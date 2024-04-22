import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { TypeAppDispatch } from "../store/store";
import { setIndex } from "../store/indexSlideSlice";
import bacotaImg from '../assets/images/reserve/bacota.svg';
import carpathiansImg from '../assets/images/reserve/carpathians.svg';
import kyivImg from '../assets/images/reserve/kyiv.svg';
import oddesaImg from '../assets/images/reserve/oddesa.svg';

export const SimpleSlider: FC = () => {
    const dispatch: TypeAppDispatch = useDispatch();

    const handleSlideChange = (index: number) => {
        dispatch(setIndex(index))
    };

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: handleSlideChange
    };

    return (
        <Slider className="slider" {...settings}>
            <div>
                <img className="slider__image" src={bacotaImg} alt="Image Bacota" />
            </div>
            <div>
                <img className="slider__image" src={carpathiansImg} alt="Image Carpathians" />
            </div>
            <div>
                <img className="slider__image" src={kyivImg} alt="Image Kyiv" />
            </div>
            <div>
                <img className="slider__image" src={oddesaImg} alt="Image Oddesa" />
            </div>
        </Slider>
    );
}