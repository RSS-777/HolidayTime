import { FC } from "react";
import { useTranslation } from "react-i18next";

export const Titles: FC = () => {
    const { t } = useTranslation()
    return (
        <div className="titles">
            <h1 className="titles__title">HolidayTime</h1>
            <p className="titles__text">{t("titles.title")}</p>
        </div>
    )
}