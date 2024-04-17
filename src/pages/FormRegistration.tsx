import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { useNavigate } from "react-router-dom";

interface IData {
    firstName: string,
    middleName: string,
    lastName: string,
    sex: string,
    born: number,
    phone: number,
    email: string,
    password: number | string,
    image?: string
};

const FormRegistration: FC = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm<IData>();
    const { t } = useTranslation();
    const usersData: IData[] | null = JSON.parse(localStorage.getItem('users') ?? 'null');
    const navigation = useNavigate();

    const onSubmit: SubmitHandler<IData> = (data) => {
        if (usersData) {
            const newUser: IData[] = [...usersData, data]
            localStorage.setItem('users', JSON.stringify(newUser))
        } else {
            localStorage.setItem('users', JSON.stringify([data]))
        }
        reset()
        navigation("/personal")
    }

    const checkValidate = async (value: string | number) => {
        const checkEmail = usersData?.find(item => item.email === value);
        const checkPhone = usersData?.find(item => item.phone === value);
        if (checkEmail) return t("formRegistration.checkValidate.checkEmail");
        if (checkPhone) return t("formRegistration.checkValidate.checkPhone");
    };

    return (
        <Container>
            <div className="registration">
                <div className="registration__titles">
                    <h2 className="registration__title">{t("formRegistration.registration.title")}</h2>
                </div>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form__block">
                        <label className="form__label" htmlFor="first__name">{t("formRegistration.firstName")}</label>
                        <input
                            className="form__input"
                            id="first__name"
                            {...register('firstName', {
                                required: t("formRegistration.mistakes.required"),
                                minLength: {
                                    value: 3,
                                    message: t("formRegistration.mistakes.minLength")
                                },
                                pattern: {
                                    value: /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+$/u,
                                    message: t("formRegistration.mistakes.pattern.nowNumbers")
                                }
                            })} />
                    </div>
                    <div className="form__error">{errors.firstName?.message}</div>
                    <div className="form__block">
                        <label className="form__label" htmlFor="middle__name">{t("formRegistration.middleName")}</label>
                        <input
                            className="form__input"
                            id="middle__name"
                            {...register('middleName', {
                                required: t("formRegistration.mistakes.required"),
                                minLength: {
                                    value: 3,
                                    message: t("formRegistration.mistakes.minLength")
                                },
                                pattern: {
                                    value: /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+$/u,
                                    message: t("formRegistration.mistakes.pattern.nowNumbers")
                                }
                            })}
                        />
                    </div>
                    <div className="form__error">{errors.middleName?.message}</div>
                    <div className="form__block">
                        <label className="form__label" htmlFor="last__name">{t("formRegistration.lastName")}</label>
                        <input
                            className="form__input"
                            id="last__name"
                            {...register('lastName', {
                                required: t("formRegistration.mistakes.required"),
                                minLength: {
                                    value: 3,
                                    message: t("formRegistration.mistakes.minLength")
                                },
                                pattern: {
                                    value: /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+$/u,
                                    message: t("formRegistration.mistakes.pattern.nowNumbers")
                                }
                            })}
                        />
                    </div>
                    <div className="form__error">{errors.lastName?.message}</div>
                    <div className="form__block form__block_flex">
                        <div className="form__man">
                            <label className="form__label" htmlFor="man">{t("formRegistration.sex.man")}</label>
                            <input className="form__input" type="radio" value={t("formRegistration.sex.man")} id="man" {...register('sex')} checked />
                        </div>
                        <div className="form__woman">
                            <label className="form__label" htmlFor="woman">{t("formRegistration.sex.woman")}</label>
                            <input className="form__input" type="radio" value={t("formRegistration.sex.woman")} id="woman" {...register('sex')} />
                        </div>
                    </div>
                    <div className="form__block">
                        <label className="form__label" htmlFor="born">{t("formRegistration.born")}</label>
                        <input className="form__input" type="date" id="born" {...register('born', { required: t("formRegistration.mistakes.required") })} />
                    </div>
                    <div className="form__error">{errors.born?.message}</div>
                    <div className="form__block">
                        <label className="form__label" htmlFor="phone">{t("formRegistration.phone")}</label>
                        <input className="form__input" type="tel" id="phone" {...register('phone', {
                            required: t("formRegistration.mistakes.required"),
                            pattern: {
                                value: /^\+380\d{1,2}\s?\(?\d{1,4}\)?[-.\s]?\d{1,5}[-.\s]?\d{1,5}[-.\s]?\d{1,5}[-.\s]?\d{1,5}$/,
                                message: t("formRegistration.mistakes.pattern.errorFormat")
                            },
                            validate: checkValidate
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
                            },
                            validate: checkValidate
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
            </div>
        </Container>
    )
};

export default FormRegistration;
