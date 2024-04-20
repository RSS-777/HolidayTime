import { FC } from "react";
import { Container } from "../components/Container";
import { Place } from "../components/Place";
import Select, { SingleValue } from 'react-select';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TypeAppDispatch } from "../store/store";
import { setPlace } from "../store/placeSlice";
import imageBacota from '../assets/images/reserve/bacota.svg';
import imageCarpathians from '../assets/images/reserve/carpathians.svg';
import imageKyiv from '../assets/images/reserve/kyiv.svg';
import imageOddesa from '../assets/images/reserve/oddesa.svg';

type TypeOption = {
    value: string,
    label: string
};

type TypeProps = (place: string, img: string) => void;

const Reserve: FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch: TypeAppDispatch = useDispatch();

    const options: TypeOption[] = [
        { value: 'bakota', label: t("reserve.options.bakota") },
        { value: 'carpathians', label: t("reserve.options.carpathians") },
        { value: 'kyiv', label: t("reserve.options.kyiv") },
        { value: 'odessa', label: t("reserve.options.odessa") }
    ]

    const handleChoice = (event: SingleValue<TypeOption>) => {
        if (event) {
            dispatch(setPlace(event.value))
            navigate("/order")
        }
    }

    const handleDetails: TypeProps = (place, img) => {
        navigate('/details', { state: {place, img} });
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
                        placeId="bacota"
                        src={imageBacota}
                        alt={'Image Bacota'}
                        title={t("reserve.place.bakota.title")}
                        text={t("reserve.place.bakota.text")}
                        buttonName={t("reserve.place.button")}
                        onClick={() => handleDetails('bakota', imageBacota)}
                    />
                    <Place
                        placeId="carpathians"
                        src={imageCarpathians}
                        alt={'Image Carpathians'}
                        title={t("reserve.place.carpathians.title")}
                        text={t("reserve.place.carpathians.text")}
                        buttonName={t("reserve.place.button")}
                        onClick={() => handleDetails('carpathians', imageCarpathians)}
                    />
                    <Place
                        placeId="kyiv"
                        src={imageKyiv}
                        alt={'Image Kyiv'}
                        title={t("reserve.place.kyiv.title")}
                        text={t("reserve.place.kyiv.text")}
                        buttonName={t("reserve.place.button")}
                        onClick={() => handleDetails('kyiv', imageKyiv)}
                    />
                    <Place
                        placeId="oddesa"
                        src={imageOddesa}
                        alt={'Image Oddesa'}
                        title={t("reserve.place.odessa.title")}
                        text={t("reserve.place.odessa.text")}
                        buttonName={t("reserve.place.button")}
                        onClick={() => handleDetails('odessa', imageOddesa)}
                    />
                </div>
            </div>
        </Container>
    )
}

export default Reserve;