import { ChangeEvent, FC, useState } from "react";
import iconLike from '../assets/images/reserve/emojione_star.png';
import iconLikeActive from '../assets/images/reserve/emojione_star_active.png';
import { Button } from "./Button";

interface IProps {
    src: string,
    alt: string,
    title: string,
    text: string,
    buttonName: string
};

export const Place: FC<IProps> = ({ src, alt, title, text, buttonName }) => {
    const [like, setLike] = useState<boolean>(false)

    const handleLike = (e: ChangeEvent<HTMLInputElement>) => {
        setLike(e.target.checked);
    }

    return (
        <div className="place">
            <div className="place__images">
                <img className="place__image" src={src} alt={alt} />
            </div>
            <div className="place__content">
                <h2 className="place__title">{title}</h2>
                <hr className="place__hr"/>
                <p className="place__text">{text}</p>
            </div>
            <label className="place__label">
                <input
                    className="place__input"
                    type="checkbox"
                    name='checkLike'
                    onChange={handleLike}
                />
                <span className="place__like">
                    <img className="place__star" src={like ? iconLikeActive : iconLike} alt="image star" />
                </span>
            </label>
            <div className="place__button">
                <Button name={buttonName} image="" />
            </div>
        </div>
    )
}