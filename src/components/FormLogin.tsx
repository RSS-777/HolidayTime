import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button } from "./Button";
import { useDispatch } from "react-redux";
import { TypeAppDispatch } from "../store/store";
import { setUser } from "../store/userLoggedSlice";

interface IData {
    email: string,
    password: string | number
};

export const FormLogin: FC = () => {
    const [noUser, setNoUser] = useState<boolean>(false);
    const { register, reset, handleSubmit, formState: { errors, isValid } } = useForm<IData>();
    const usersData: IData[] | null = JSON.parse(localStorage.getItem('users') ?? 'null');
    const { t } = useTranslation();
    const dispatch: TypeAppDispatch = useDispatch();

    const handleError = () => {
        setNoUser(true);
        setTimeout(() => { setNoUser(false) }, 5000)
    };

    const onSubmit: SubmitHandler<IData> = (data) => {
        const checkEmail = usersData?.find(item => item.email === data.email);
        const checkPassword = usersData?.find(item => item.password === data.password);
        if (checkEmail && checkPassword) {
            dispatch(setUser({ status: true, email: data.email }))
        } else {
            handleError()
        }
        reset()
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__titles">
                <h2 className="form__title">{t("formLogin.title")}</h2>
            </div>
            <div className="form__block">
                <label className="form__label" htmlFor="email">{t("formRegistration.email")}</label>
                <input className="form__input" type="text" id="email" {...register('email', {
                    required: t("formRegistration.mistakes.required")
                })} />
            </div>
            <div className="form__error">{errors.email?.message}</div>

            <div className="form__block">
                <label className="form__label" htmlFor="password">{t("formRegistration.password")}</label>
                <input className="form__input" type="password" id="password" {...register('password', {
                    required: t("formRegistration.mistakes.required")
                })} />
            </div>
            <div className="form__error">{errors.password?.message}</div>

            <div className="form__button">
                <Button name={t("formRegistration.submit")} type="submit" />
            </div>
            {noUser ? <div className="form__no-user">{t("formLogin.noUser")}</div> : null}
        </form>
    )
};