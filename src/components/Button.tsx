import { FC } from "react";

interface IButton {
    name: string,
    image: string
};

export const Button: FC<IButton> = ({ name, image }) => {
    return (
        <button className="button">
            <span className="button__text">{name}</span>
            <img className="button__image" src={image} alt="arrow"/>
        </button>
    )
}