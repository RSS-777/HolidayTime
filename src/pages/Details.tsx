import { FC } from "react";
import { Container } from "../components/Container";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../components/Button";
import arrowLeft from "../assets/images/home/Arrow left.png";
import { useNavigate } from "react-router-dom";

const Details: FC = () => {
    const { state } = useLocation();
    const { place, img } = state;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleComeBack = () => {
        navigate("/reserve")
    }

    return (
        <Container>
            <div className="details">
                <div className="details__titles">
                    <h2 className="details__title">{t(`reserve.place.${place}.title`)}</h2>
                </div>
                <div className="details__content">
                    <div className="details__text">{t(`reserve.place.${place}.text`)}</div>
                    <img className="details__image" src={img} alt={t(`reserve.place.${place}.title`)} />
                    <div className="details__button">
                        <Button
                            name={t("details.button")}
                            image={arrowLeft}
                            onClick={handleComeBack}
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
};

export default Details;