import { FC } from "react";
import { SimpleSlider } from '../components/Slider';
import { Button } from '../components/Button';
import arrowRight from '../assets/images/home/Arrow right.png';

export const SliderBlock: FC = () => {
    return (
        <div className="slider-block">
            <SimpleSlider />
            <div className="slider-block__text">
                Полонини Карпат, у селі Орів посеред гір розташувався затишний куточок для незабутніх вражень. Справжні українські гори, власноручне сироваріння на полонині, водоспади та вікові дерева чекають на Вас.
                <div className="slider-block__button">
                    <Button name='Переглянути' image={arrowRight} />
                </div>
            </div>
        </div>
    )
}