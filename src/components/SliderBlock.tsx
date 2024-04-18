import { FC } from "react";
import { SimpleSlider } from './SimpleSlider';
import { Button } from '../components/Button';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TypeRootState } from "../store/store";
import arrowRight from '../assets/images/home/Arrow right.png';
import imageBacota from '../assets/images/reserve/bacota.svg';
import imageCarpathians from '../assets/images/reserve/carpathians.svg';
import imageKyiv from '../assets/images/reserve/kyiv.svg';
import imageOddesa from '../assets/images/reserve/oddesa.svg';

const arrPlace = [
    { place: 'bakota', img: imageBacota },
    { place: "carpathians", img: imageCarpathians },
    { place: "kyiv", img: imageKyiv },
    { place: "odessa", img: imageOddesa }
];

export const SliderBlock: FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const indexSlider = useSelector((state: TypeRootState) => state.indexSlider.index);

    const arrText = [
        t("reserve.place.bakota.text"),
        t("reserve.place.carpathians.text"),
        t("reserve.place.kyiv.text"),
        t("reserve.place.odessa.text"),
    ];

    const handleDetails = () => {
        navigate('/details', { state: arrPlace[indexSlider] });
    }

    return (
        <div className="slider-block">
            <SimpleSlider />
            <div className="slider-block__text">
                {arrText[indexSlider]}
                <div className="slider-block__button">
                    <Button name={t("home.slider.button")} image={arrowRight} onClick={handleDetails} />
                </div>
            </div>
        </div>
    )
}