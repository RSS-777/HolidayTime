import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import upImage from '../assets/images/order/up.png';
import downImage from '../assets/images/order/down.png';

export const RoomSelection: FC = () => {
    const [numbers, setNumbers] = useState<number>(0);
    const [numbersOld, setNumbersOld] = useState<number>(0);
    const [numbersChildren, setNumbersChildren] = useState<number>(0);
    const { t } = useTranslation();

    type TypeNumbers = {
        num: boolean,
        old: boolean,
        child: boolean
    }

    useEffect(() => {
        if (numbersOld > numbers * 2) setNumbersOld(numbers * 2)
        if (numbersChildren > numbers * 2) setNumbersChildren(numbers * 2)
    }, [numbers])

    const handleUp = ({ num, old, child }: TypeNumbers) => {
        if (numbers < 25) {
            if (num) setNumbers(prev => prev + 1);
        }
        if (numbersOld < numbers * 2) {
            if (old) setNumbersOld(prev => prev + 1);
        }
        if (numbersChildren < numbers * 2) {
            if (child) setNumbersChildren(prev => prev + 1)
        }
    };

    const handleDown = ({ num, old, child }: TypeNumbers) => {
        if (numbers > 0) {
            if (num) setNumbers(prev => prev - 1);
        }

        if (numbersOld > 0) {
            if (old) setNumbersOld(prev => prev - 1);
        }

        if (numbersChildren > 0) {
            if (child) setNumbersChildren(prev => prev - 1)
        }
    };

    return (
        <div className="room">
            <h2 className="room__title">{t("order.room.title")}</h2>
            <div className="room__content">
                <p className="room__question">{t("order.room.question")}</p>
                <div className="room__block">
                    <div className="room__data">
                        <div className="room__data-in">
                            <h4 className="room__title-data">{t("order.room.titleDataIn")}</h4>
                            <input type="date" className="room__input" placeholder={t("order.room.titleDataIn")} />
                        </div>
                        <div className="room__data-out">
                            <h4 className="room__title-data">{t("order.room.titleDataOut")}</h4>
                            <input type="date" className="room__input" placeholder={t("order.room.titleDataOut")} />
                        </div>
                    </div>
                    <button className="room__button-check">{t("order.room.buttonCheck")}</button>
                </div>
                <div className="room__choice">
                    <div className="room__block-choice">
                        <span className="room__name">{t("order.room.nameNumb")}</span>
                        <div className="room__board">
                            <span className="room__title-board">{numbers}</span>
                            <div className="room__buttons-board">
                                <button className="room__button-up" onClick={() => handleUp({ num: true, old: false, child: false })}>
                                    <img src={upImage} alt="up" /></button>
                                <button className="room__button-down" onClick={() => handleDown({ num: true, old: false, child: false })}>
                                    <img src={downImage} alt="down" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="room__block-choice">
                        <span className="room__name">{t("order.room.nameOld")}</span>
                        <div className="room__board">
                            <span className="room__title-board">{numbersOld}</span>
                            <div className="room__buttons-board">
                                <button className="room__button-up" onClick={() => handleUp({ num: false, old: true, child: false })}>
                                    <img src={upImage} alt="up" /></button>
                                <button className="room__button-down" onClick={() => handleDown({ num: false, old: true, child: false })}>
                                    <img src={downImage} alt="down" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="room__block-choice">
                        <span className="room__name">{t("order.room.nameChild")}</span>
                        <div className="room__board">
                            <span className="room__title-board">{numbersChildren}</span>
                            <div className="room__buttons-board">
                                <button className="room__button-up" onClick={() => handleUp({ num: false, old: false, child: true })}>
                                    <img src={upImage} alt="up" />
                                </button>
                                <button className="room__button-down" onClick={() => handleDown({ num: false, old: false, child: true })}>
                                    <img src={downImage} alt="down" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}