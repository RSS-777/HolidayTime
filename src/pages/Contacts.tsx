import { FC } from "react";
import { Container } from "../components/Container";
import { useTranslation } from "react-i18next";

const Contacts: FC = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <div className="contacts">
                <div className="contacts__titles">
                    <h2 className="contacts__title">{t("contacts.title")}</h2>
                </div>
                <div className="contacts__content">
                    <div className="contacts__block">
                        <p className="contacts__name">{t("contacts.phone")}</p>
                        <hr />
                        <p className="contacts__text">+380930000000</p>
                    </div>
                    <div className="contacts__block">
                        <p className="contacts__name">{t("contacts.schedule")}</p>
                        <hr />
                        <p className="contacts__text">
                            {t("contacts.schedule mon fri")}
                            <br />
                            {t("contacts.schedule sat")}
                            <br />
                            {t("contacts.schedule sun")}
                        </p>
                    </div>
                    <div className="contacts__block">
                        <p className="contacts__name">{t("contacts.email")}</p>
                        <hr />
                        <p className="contacts__text">{t("contacts.email link")}</p>
                    </div>
                    <div className="contacts__block">
                        <p className="contacts__name">{t("contacts.address")}</p>
                        <hr />
                        <p className="contacts__text">{t("contacts.address name")}</p>
                    </div>
                    <div className="contacts__map"></div>
                </div>
            </div>
        </Container>
    )
};

export default Contacts;