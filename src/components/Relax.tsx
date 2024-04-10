import { FC } from "react";
import imagePeople from '../assets/images/home/people.svg';

export const Relax: FC = () => {
    return (
        <div className="relax">
            <img className="relax__image" src={imagePeople} alt="Image poeple" />
            <p className="relax__text">Активний відпочинок у нетипових лоцаціях. Незаймана природа та місцевий колорит
                подарують Вам незабутні враження.
            </p>
        </div>
    )
}