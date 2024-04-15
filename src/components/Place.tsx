import { ChangeEvent, FC, MouseEvent } from "react";
import iconLike from '../assets/images/reserve/emojione_star.png';
import iconLikeActive from '../assets/images/reserve/emojione_star_active.png';
import { Button } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { TypeAppDispatch, TypeRootState } from "../store/store";
import { setLike } from "../store/likeSlice";

interface IProps {
    placeId: string,
    src: string,
    alt: string,
    title: string,
    text: string,
    buttonName: string,
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const Place: FC<IProps> = ({ placeId, src, alt, title, text, buttonName, onClick }) => {
    const dispatch: TypeAppDispatch = useDispatch();
    const like = useSelector((state: TypeRootState) => state.likeChoice[placeId]);

    const handleLike = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setLike({ placeId, value: e.target.checked }))
    }

    return (
        <div className="place">
            <div className="place__images">
                <img className="place__image" src={src} alt={alt} />
            </div>
            <div className="place__content">
                <h2 className="place__title">{title}</h2>
                <hr className="place__hr" />
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
                <Button name={buttonName} image="" onClick={onClick} />
            </div>
        </div>
    )
}