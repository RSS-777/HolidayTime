import { FC, MouseEvent } from "react";

interface IButton {
    name: string,
    image: string,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void | null;
};

export const Button: FC<IButton> = ({ name, image, onClick }) => {
    return (
        <button
         className="button"
         onClick={onClick}
         >
            <span className="button__text">{name}</span>
            {image === ''
                ? null
                : <img className="button__image" src={image} alt="arrow" />
            }

        </button>
    )
}