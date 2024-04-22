import { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TypeAppDispatch, TypeRootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { FormLogin } from "../components/FormLogin";
import { setUser } from "../store/userLoggedSlice";
import ChangePersonalData from "./ChangePersonalData";
import man from '../assets/images/personal/man.png';
import woman from '../assets/images/personal/woman.png';

export interface IData {
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

const Personal: FC = () => {
    const [changeData, setChangeData] = useState<boolean>(false);
    const [activeUser, setActiveUser] = useState<IData>();
    const [upload, setUpload] = useState<boolean>(false);
    const usersData: IData[] | null = JSON.parse(localStorage.getItem('users') ?? 'null');
    const userLogged = useSelector((state: TypeRootState) => state.userLogged.user);
    const dispatch: TypeAppDispatch = useDispatch();
    const navigation = useNavigate()
    const { t } = useTranslation();

    useEffect(() => {
        const currentUser = usersData?.find(item => item.email === userLogged.email);
        setActiveUser(currentUser)
    }, [userLogged])

    const handleLink = () => {
        navigation('/registration')
    }

    const handleAvatar = () => {
        setUpload(true)
    }

    const handleReturn = () => {
        setUpload(false)
    }

    const handleService = () => {
        setChangeData(true)
    }

    const handleOut = () => {
        dispatch(setUser({ status: false, email: '' }))
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageDataUrl = e.target?.result as string;

                if (usersData) {
                    let updatedUsers = usersData.map(user => {
                        if (user.email === activeUser?.email) {
                            return { ...user, image: imageDataUrl };
                        }
                        return user;
                    });
                    localStorage.setItem('users', JSON.stringify(updatedUsers));
                    setActiveUser(updatedUsers.find(user => user.email === activeUser?.email));
                }
            };
            reader.readAsDataURL(file);
        }
        setUpload(false);
    };

    return (
        <Container>
            <div className="personal">
                <div className="personal__titles">
                    <h2 className="personal__title">{t("personalOffice.title")}</h2>
                </div>
                {(userLogged.status
                ) ? (
                    changeData
                        ? <ChangePersonalData dataChoiceUser={activeUser} setChangeData={setChangeData} />
                        : <div className="personal__data">
                            <div className="personal__servise">
                                <div className="personal__image">
                                    <img src={
                                        activeUser?.image
                                            ? activeUser?.image
                                            : ((activeUser?.sex === "Чоловік" || activeUser?.sex === "Мужчина" || activeUser?.sex === "Man") ? man : woman)
                                    } alt="Avatar" />
                                </div>
                                <div className="personal__block-button">
                                    <Button name={t("personalOffice.button.avatar")} onClick={handleAvatar} />
                                    <Button name={t("personalOffice.button.service")} onClick={handleService} />
                                </div>
                            </div>
                            <div className="personal__content">
                                <div className="personal__initials">
                                    {activeUser?.firstName} {activeUser?.middleName} {activeUser?.lastName}
                                </div>
                                <hr className="personal__hr" />
                                <div className="personal__sex">{t("personalOffice.content.sex")} {activeUser?.sex}</div>
                                <hr className="personal__hr" />
                                <div className="personal__born">{t("personalOffice.content.born")} {activeUser?.born}</div>
                                <hr className="personal__hr" />
                                <div className="personal__phone">{t("personalOffice.content.phone")} {activeUser?.phone}</div>
                                <hr className="personal__hr" />
                                <div className="personal__email">{t("personalOffice.content.email")} {activeUser?.email}</div>
                            </div>
                            <div className="personal__button">
                                <Button name={t("personalOffice.button.out")} onClick={handleOut} />
                            </div>
                            {upload
                                ? <div className="personal__upload">
                                    <input className="personal__input" type="file" id="upload" onChange={handleFileChange} />
                                    <div className="personal__return">
                                        <Button name={t("personalOffice.button.return")} onClick={handleReturn} />
                                    </div>
                                </div>
                                : null
                            }
                        </div>

                ) : (
                    <div className="personal__login">
                        <FormLogin />
                        <div className="personal__button-log">
                            <Button name={t("personalOffice.button.registration")} onClick={handleLink} />
                        </div>
                    </div>
                )
                }
            </div>
        </Container>
    )
};

export default Personal;