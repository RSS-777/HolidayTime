import { FC } from "react";

export const Feedback: FC = () => {
    return(
        <form className="feedback">
            <h4 className="feedback__title">Зворотній зв'язок</h4>
            <div className="feedback__content">
                <label className="feedback__label" htmlFor="name">Ім'я</label>
                <input className="feedback__input" type="text" placeholder="Введіть ім'я"  id="name"/>
                <label className="feedback__label" htmlFor="phone">Номер телефону</label>
                <input className="feedback__input" type="text" placeholder="Введіть номер телефону" id="phone"/>
            </div>
            <button className="feedback__button">Запросити виклик</button>
        </form>
    )
}