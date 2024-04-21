import { FC, useEffect } from "react";
import { Container } from "../components/Container";
import { RoomSelection } from "../components/RoomSelection";
import { useSelector, useDispatch } from "react-redux";
import { TypeAppDispatch, TypeRootState } from "../store/store";
import { setPlace } from "../store/placeSlice";
// import { FormUsers} from "./FormRegistration";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import bacota from '../assets/images/reserve/bacota.svg';
import carpathians from '../assets/images/reserve/carpathians.svg';
import kyiv from '../assets/images/reserve/kyiv.svg';
import odessa from '../assets/images/reserve/oddesa.svg';
import comeBack from '../assets/images/home/Arrow left.png';

import carpathiansFlat from '../assets/images/order/carpathiansFlat.svg';
import carpathiansBathroom from '../assets/images/order/carpathiansBathroom.svg';
import carpathiansRoom from '../assets/images/order/carpathiansRoom.svg';
import { Button } from "../components/Button";
import { Price } from "../components/Price";

type TypeImagePlace = {
    [key: string]: {
        place: string,
        flat: string,
        room: string,
        bathroom: string
    }
}
const imagePlace: TypeImagePlace = {
    bakota: {
        place: bacota,
        flat: carpathiansFlat,
        room: carpathiansRoom,
        bathroom: carpathiansBathroom
    },
    carpathians: {
        place: carpathians,
        flat: carpathiansFlat,
        room: carpathiansRoom,
        bathroom: carpathiansBathroom
    },
    kyiv: {
        place: kyiv,
        flat: carpathiansFlat,
        room: carpathiansRoom,
        bathroom: carpathiansBathroom
    },
    odessa: {
        place: odessa,
        flat: carpathiansFlat,
        room: carpathiansRoom,
        bathroom: carpathiansBathroom
    }
}

const Order: FC = () => {
    const placeChoice = useSelector((state: TypeRootState) => state.places.place);
    const { t } = useTranslation();
    const navigation = useNavigate();

    useEffect(() => {
        if (!placeChoice) {
            navigation('/reserve')
        }
    }, [placeChoice])

    const handleReturn = () => {
        navigation('/reserve')
    }

    return (
        <>
            {placeChoice &&
                <Container>
                    <div className="order">
                        <div className="order__titles">
                            <h2 className="order__title">{t("order.title")} {t(`order.places.${placeChoice}`)}</h2>
                        </div>
                        <div className="order__button">
                            <Button name={t("order.button")} image={comeBack} onClick={handleReturn} />
                        </div>
                        <div className="order__content">
                            <div className="order__images">
                                <img src={imagePlace[placeChoice].place} alt={`${t('order.image')} ${t(`order.places.${placeChoice}`)}`} />
                                <img src={imagePlace[placeChoice].flat} alt={`${t('order.image')} ${t(`order.places.${placeChoice}`)}`} />
                            </div>
                            <div className="order__texts">
                                <p className="order__text">{t(`reserve.place.${placeChoice}.text`)}</p>
                                <div className="order__images-text">
                                    <img src={imagePlace[placeChoice].room} alt={`${t('order.image')} ${t(`order.places.${placeChoice}`)}`} />
                                    <img src={imagePlace[placeChoice].bathroom} alt={`${t('order.image')} ${t(`order.places.${placeChoice}`)}`} />
                                </div>
                            </div>
                        </div>
                        <RoomSelection />
                        <Price />
                    </div>
                </Container>
            }
        </>
    )
};

export default Order;