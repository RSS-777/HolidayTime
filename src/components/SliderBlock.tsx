import { FC } from "react";
import { SimpleSlider } from '../components/Slider';
import { Button } from '../components/Button';
import arrowRight from '../assets/images/home/Arrow right.png';
import { useTranslation } from "react-i18next";

export const SliderBlock: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="slider-block">
            <SimpleSlider />
            <div className="slider-block__text">
                { t("home.slider.text") }
                <div className="slider-block__button">
                    <Button name={ t("home.slider.button")} image={arrowRight} />
                </div>
            </div>
        </div>
    )
}