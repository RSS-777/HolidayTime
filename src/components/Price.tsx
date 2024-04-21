import { FC } from "react";
import piople from '../assets/images/order/piople.png';
import bed from '../assets/images/order/bed.png';
import { useTranslation } from "react-i18next";

export const Price: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="price">
            <div className="price__space">
                <h3 className="price__title">{t("order.price.titleSpice")}</h3>
                <div className="price__images">
                    <img className="price__image-piope" src={piople} alt="Image piple" />
                    <img className="price__image-piope" src={piople} alt="Image piple" />
                </div>
            </div>
            <div className="price__type">
                <h3 className="price__title">{t("order.price.titleType")}</h3>
                <div className="price__texts">
                    <p className="price__text">{t("order.price.textOne")}</p>
                    <p className="price__text">{t("order.price.textTwo")}
                        <img className="price__image-bed" src={bed} alt="Image bed" />
                    </p>
                </div>
            </div>
            <div className="price__order">
                <h3 className="price__title">{t("order.price.titleOrder")}</h3>
                <div className="price__buttons">
                    <button className="price__button">{t("order.price.button")}</button>
                </div>
            </div>
        </div>
    )
}