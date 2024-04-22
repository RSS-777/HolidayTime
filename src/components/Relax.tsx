import { FC } from "react";
import { useTranslation } from "react-i18next";
import imagePeople from '../assets/images/home/people.svg';

export const Relax: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="relax">
            <img className="relax__image" src={imagePeople} alt="Image poeple" />
            <p className="relax__text">{t("home.relax.text")}</p>
        </div>
    )
}