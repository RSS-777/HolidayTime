import { FC } from "react";
import { Container } from "../components/Container";

const Contacts: FC = () => {
    return (
        <Container>
            <div className="contacts">
                <div className="contacts__titles">
                    <h2 className="contacts__title">Контакти</h2>
                </div>
                <div className="contacts__content">
                    <div className="contacts__block">
                        <p className="contacts__name">Телефон</p>
                        <hr />
                        <p className="contacts__text">+380930000000</p>
                    </div>
                    <div className="contacts__block">
                        <p className="contacts__name">Графік роботи</p>
                        <hr />
                        <p className="contacts__text">
                            пн-пт 08:00 - 18:00
                            <br />
                            сб 09:00 - 17:00
                            <br />
                            нд 10:00 - 14:00
                        </p>
                    </div>
                    <div className="contacts__block">
                        <p className="contacts__name">Eл. пошта</p>
                        <hr />
                        <p className="contacts__text">hello@gmail.com</p>
                    </div>
                    <div className="contacts__block">
                        <p className="contacts__name">Адреса офісу</p>
                        <hr />
                        <p className="contacts__text">м.Київ, вул. Путункевича, буд. 10</p>
                    </div>
                    <div className="contacts__map"></div>
                </div>
            </div>
        </Container>
    )
};

export default Contacts;