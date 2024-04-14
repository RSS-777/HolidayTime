import { FC } from "react";
import { Container } from "../components/Container";
import { Place } from "../components/Place";
import Select, { SingleValue } from 'react-select';
import { useTranslation } from "react-i18next";
import imageBacota from '../assets/images/reserve/bacota.svg';
import imageCarpathians from '../assets/images/reserve/carpathians.svg';
import imageKyiv from '../assets/images/reserve/kyiv.svg';
import imageOddesa from '../assets/images/reserve/oddesa.svg';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TypeAppDispatch } from "../store/store";
import { setPlace } from "../store/placeSlice";

type TypeOption = {
    value: string,
    label: string
};

const Reserve: FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch: TypeAppDispatch = useDispatch();

    const options: TypeOption[] = [
        { value: 'bakota', label: t("reserve.options.bakota") },
        { value: 'сarpathians', label: t("reserve.options.carpathians") },
        { value: 'кyiv', label: t("reserve.options.kyiv") },
        { value: 'odessa', label: t("reserve.options.odessa") }
    ]

    const handleChoice = (event: SingleValue<TypeOption>) => {
        if (event) {
            dispatch(setPlace(event.value))
            navigate("/personal")
        }
    }

    return (
        <Container>
            <div className="reserve">
                <div className="reserve__titles">
                    <h2 className="reserve__title">{t("reserve.title")}</h2>
                </div>
                <div className="reserve__content">
                    <Select
                        className="reserve__select"
                        options={options}
                        placeholder={t("reserve.placeholder")}
                        onChange={handleChoice}
                    />
                    <Place
                        src={imageBacota}
                        alt={'Image Bacota'}
                        title={t("reserve.place.bakota.title")}
                        text={t("reserve.place.bakota.text")}
                        buttonName={t("reserve.place.button")}
                    />
                    <Place
                        src={imageCarpathians}
                        alt={'Image Carpathians'}
                        title={t("reserve.place.carpathians.title")}
                        text={t("reserve.place.carpathians.text")}
                        buttonName={t("reserve.place.button")}
                    />
                    <Place
                        src={imageKyiv}
                        alt={'Image Kyiv'}
                        title={t("reserve.place.kyiv.title")}
                        text={t("reserve.place.kyiv.text")}
                        buttonName={t("reserve.place.button")}
                    />
                    <Place
                        src={imageOddesa}
                        alt={'Image Oddesa'}
                        title={t("reserve.place.odessa.title")}
                        text={t("reserve.place.odessa.text")}
                        buttonName={t("reserve.place.button")}
                    />
                </div>
            </div>
        </Container>
    )
}

export default Reserve;