import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button } from "./Button";

interface IData {
    firstName: string,
    middleName: string,
    lastName: string,
    sex: string,
    born: number,
    phone: number,
    email: string,
    password: string | number
};

export const FormRegistration: FC = () => {
    const { register, reset, handleSubmit, formState: { errors, isValid } } = useForm<IData>();
    const { t } = useTranslation();

    const onSubmit: SubmitHandler<IData> = (data) => {
        console.log(data),
            reset()
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__titles">
                <h2 className="form__title">{t("formRegistration.title")}</h2>
            </div>
           
            <div className="form__block">
                <label className="form__label" htmlFor="phone">{t("formRegistration.phone")}</label>
                <input className="form__input" type="tel" id="phone" {...register('phone', {
                    required: t("formRegistration.mistakes.required"),
                    pattern: {
                        value: /^\+380\d{1,2}\s?\(?\d{1,4}\)?[-.\s]?\d{1,5}[-.\s]?\d{1,5}[-.\s]?\d{1,5}[-.\s]?\d{1,5}$/,
                        message: t("formRegistration.mistakes.pattern.errorFormat")
                    }
                })} />
            </div>
            <div className="form__error">{errors.phone?.message}</div>
            <div className="form__block">
                <label className="form__label" htmlFor="email">{t("formRegistration.email")}</label>
                <input className="form__input" type="text" id="email" {...register('email', {
                    required: t("formRegistration.mistakes.required"),
                    pattern: {
                        value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                        message: t("formRegistration.mistakes.pattern.errorFormat")
                    }
                })} />
            </div>
            <div className="form__error">{errors.email?.message}</div>

            <div className="form__block">
                <label className="form__label" htmlFor="password">{t("formRegistration.password")}</label>
                <input className="form__input" type="password" id="password" {...register('password', {
                    required: t("formRegistration.mistakes.required"),
                    pattern: {
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                        message: t("formRegistration.mistakes.pattern.password")
                    }
                })} />
            </div>
            <div className="form__error">{errors.password?.message}</div>

            <div className="form__button">
                <Button name={t("formRegistration.submit")} type="submit" />
            </div>
        </form>
    )
};