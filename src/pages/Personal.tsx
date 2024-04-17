import { FC, useState, useEffect } from "react";
import { Container } from "../components/Container";
import { useSelector, useDispatch } from "react-redux";
import { TypeAppDispatch, TypeRootState } from "../store/store";
import { setPlace } from "../store/placeSlice";
import { Button } from "../components/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FormLogin } from "../components/FormLogin";
import { setUser } from "../store/userLoggedSlice";
import man from '../assets/images/personal/man.png';
import woman from '../assets/images/personal/woman.png';

Локалізувати сторінку!!! Добавити функціонал для зміни данних!!!


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

const Personal: FC = () => {
    const [activeUser, setАctiveUser] = useState<IData>()
    const [upload, setUpload] = useState<boolean>(false)
    const usersData: IData[] | null = JSON.parse(localStorage.getItem('users') ?? 'null');
    const userLogged = useSelector((state: TypeRootState) => state.userLogged.user);
    const dispatch: TypeAppDispatch = useDispatch();
    const navigation = useNavigate()
    const { t } = useTranslation();

    useEffect(() => {
        const currentUser = usersData?.find(item => item.email === userLogged.email);
        setАctiveUser(currentUser)
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
                {userLogged.status

                    ? <div className="personal__data">
                        <div className="personal__servise">
                            <div className="personal__image">
                                <img src={
                                    activeUser?.image
                                        ? activeUser?.image
                                        : ((activeUser?.sex === "Чоловік" || activeUser?.sex === "Мужчина" || activeUser?.sex === "Man") ? man : woman)
                                } alt="Avatar" />
                            </div>
                            <div className="personal__block-button">
                                <Button name="Змінити аватар" onClick={handleAvatar} />
                                <Button name="Налаштування" onClick={handleService} />
                            </div>
                        </div>
                        <div className="personal__content">
                            <div className="personal__initials">
                                {activeUser?.firstName} {activeUser?.middleName} {activeUser?.lastName}
                            </div>
                            <hr className="personal__hr" />
                            <div className="personal__sex">Стать: {activeUser?.sex}</div>
                            <hr className="personal__hr" />
                            <div className="personal__born">Дата Народження: {activeUser?.born}</div>
                            <hr className="personal__hr" />
                            <div className="personal__phone">Мобільний телефон: {activeUser?.phone}</div>
                            <hr className="personal__hr" />
                            <div className="personal__email">Ел.пошта: {activeUser?.email}</div>
                        </div>
                        <div className="personal__button">
                            <Button name="Вийти з системи" onClick={handleOut} />
                        </div>
                        {upload
                            ? <div className="personal__upload">
                                <input className="personal__input" type="file" id="upload" onChange={handleFileChange} />
                                <div className="personal__return">
                                    <Button name="Повернутись" onClick={handleReturn} />
                                </div>
                            </div>
                            : null
                        }
                    </div>

                    : <div className="personal__login">
                        <FormLogin />
                        <div className="personal__button-log">
                            <Button name="Реєстрація" onClick={handleLink} />
                        </div>
                    </div>
                }
            </div>
        </Container>
    )
};

export default Personal;