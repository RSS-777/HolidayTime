import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TypeRootState } from "../store/store";
import { TypeAppDispatch } from "../store/store";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IData } from "./Personal";
import { Button } from "../components/Button";
import { setUser } from "../store/userLoggedSlice";

interface IProps {
    dataChoiceUser: IData | undefined,
    setChangeData: (value: boolean) => void;
}

const ChangePersonalData: FC<IProps> = ({ dataChoiceUser, setChangeData }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<IData>();
    const usersData: IData[] | null = JSON.parse(localStorage.getItem('users') ?? 'null');
    const userLogged = useSelector((state: TypeRootState) => state.userLogged.user);
    const dispatch: TypeAppDispatch = useDispatch();
    const { t } = useTranslation();

    const onSubmit: SubmitHandler<IData> = (data) => {
        if (usersData && userLogged) {
            const deleteUserData = usersData?.filter(item => item.email !== userLogged.email);
            const newUsers = [...deleteUserData, data]
            localStorage.setItem('users', JSON.stringify(newUsers))
            dispatch(setUser({ status: true, email: data.email }))
            setChangeData(false)
        }
    };

    const checkValidate = async (value: string | number) => {
        const checkEmail = usersData?.find(item => item.email === value);
        const checkPhone = usersData?.find(item => item.phone === value);
        if (checkEmail && value !== dataChoiceUser?.email) return t("formRegistration.checkValidate.checkEmail");
        if (checkPhone && value !== dataChoiceUser?.phone) return t("formRegistration.checkValidate.checkPhone");
    };

    return (
        <>
            {dataChoiceUser &&
                <div className="change-data">
                    <form className="change-data__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form__block">
                            <label className="form__label" htmlFor="first__name">{t("formRegistration.firstName")}</label>
                            <input
                                className="form__input"
                                id="first__name"
                                defaultValue={dataChoiceUser.firstName}
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
                                defaultValue={dataChoiceUser.middleName}
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
                                defaultValue={dataChoiceUser.lastName}
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
                                <input
                                    className="form__input"
                                    type="radio"
                                    value={t("formRegistration.sex.man")}
                                    id="man"
                                    defaultChecked={dataChoiceUser?.sex === t("formRegistration.sex.man")}
                                    {...register('sex')}
                                />
                            </div>
                            <div className="form__woman">
                                <label className="form__label" htmlFor="woman">{t("formRegistration.sex.woman")}</label>
                                <input
                                    className="form__input"
                                    type="radio"
                                    value={t("formRegistration.sex.woman")}
                                    id="woman"
                                    defaultChecked={dataChoiceUser?.sex === t("formRegistration.sex.woman")}
                                    {...register('sex')}
                                />
                            </div>
                        </div>
                        <div className="form__block">
                            <label className="form__label" htmlFor="born">{t("formRegistration.born")}</label>
                            <input
                                className="form__input"
                                type="date"
                                id="born"
                                defaultValue={dataChoiceUser.born}
                                {...register('born', { required: t("formRegistration.mistakes.required") })} />
                        </div>
                        <div className="form__error">{errors.born?.message}</div>
                        <div className="form__block">
                            <label className="form__label" htmlFor="phone">{t("formRegistration.phone")}</label>
                            <input
                                className="form__input"
                                type="tel"
                                id="phone"
                                defaultValue={dataChoiceUser.phone}
                                {...register('phone', {
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
                            <input
                                className="form__input"
                                type="text"
                                id="email"
                                defaultValue={dataChoiceUser.email}
                                {...register('email', {
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
                            <input
                                className="form__input"
                                type="password"
                                id="password"
                                defaultValue={dataChoiceUser.password}
                                {...register('password', {
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
            }
        </>
    )
};

export default ChangePersonalData;