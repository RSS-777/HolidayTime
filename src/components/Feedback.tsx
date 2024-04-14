import { FC } from "react";
import { useTranslation } from "react-i18next";

export const Feedback: FC = () => {
    const { t } = useTranslation();

    return(
        <form className="feedback">
            <h4 className="feedback__title">{t("home.feedback.title")}</h4>
            <div className="feedback__content">
                <label className="feedback__label" htmlFor="name">{t("home.feedback.name")}</label>
                <input className="feedback__input" type="text" placeholder={t("home.feedback.name placeholder")}  id="name"/>
                <label className="feedback__label" htmlFor="phone">{t("home.feedback.phone")}</label>
                <input className="feedback__input" type="text" placeholder={t("home.feedback.phone placeholder")} id="phone"/>
            </div>
            <button className="feedback__button">{t("home.feedback.button")}</button>
        </form>
    )
}