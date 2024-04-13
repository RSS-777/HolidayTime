import { FC } from "react";
import imagePeople from '../assets/images/home/people.svg';
import { useTranslation } from "react-i18next";

export const Relax: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="relax">
            <img className="relax__image" src={imagePeople} alt="Image poeple" />
            <p className="relax__text">{ t("relax.text")}</p>
        </div>
    )
}