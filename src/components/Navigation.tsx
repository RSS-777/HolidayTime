import { ChangeEvent, FC, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import group from '../assets/images/navigation/Group.png';
import logo from '../assets/images/navigation/logo.png';
import { setLanguage } from "../store/languageSlice";
import { TypeAppDispatch, TypeRootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import Select, { SingleValue } from 'react-select';
import { Container } from "./Container";

type TypeOption = {
    value: string,
    label: string,
};

const options: TypeOption[] = [
    { value: 'UA', label: 'UA' },
    { value: 'RU', label: 'RU' },
    { value: 'EN', label: 'EN' }
];

export const Navigation: FC = () => {
    const selectedLanguage = useSelector((state: TypeRootState) => state.languages.language);
    const dispatch = useDispatch<TypeAppDispatch>();
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const [smallScreen, setSmallScreen] = useState<number>(1920)
  
    useEffect(() => {
        const handleScreen = () => {
            setSmallScreen(window.innerWidth)
        };

        window.addEventListener('resize', handleScreen);

        return (() => {
            window.addEventListener('resize', handleScreen);
        })
    }, [])

    const handleLanguageChange = (selectedOption: SingleValue<TypeOption>) => {
        if (selectedOption) {
            dispatch(setLanguage(selectedOption.value))
        }
    }

    const handleChekBox = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setOpenMenu(true)
        } else {
            setOpenMenu(false)
        }
    }

    return (
        <Container>
            <nav className="navigation navigation_flex">
                <div className="navigation__logo">
                    <img src={logo} alt="image logo" />
                </div>
                <div className={`navigation__links ${openMenu ? 'open-menu' : ''}`}>
                    <NavLink className='navigation__link' to='/'>Головна</NavLink>
                    <div className="navigation__lintel"></div>
                    <NavLink className='navigation__link' to='/about'>Про нас</NavLink>
                    <div className="navigation__lintel"></div>
                    <NavLink className='navigation__link' to='/reserve'>Забронювати</NavLink>
                    <div className="navigation__lintel"></div>
                    <NavLink className='navigation__link' to='/contacts'>Контакти</NavLink>
                    <div className="navigation__lintel"></div>
                    <NavLink className='navigation__link' to='/personal'>Особистий {smallScreen < 768 ? null : <br />} кабінет</NavLink>
                    <div className="navigation__lintel"></div>
                    <div className='navigation__link navigation__link_flex'>
                        <img className='navigation__image-group' src={group} alt="Group Image" />
                        <Select
                            className="navigation__select"
                            classNamePrefix="navigation__select"
                            value={options.find(option => option.value === selectedLanguage)}
                            onChange={handleLanguageChange}
                            options={options}
                        />
                    </div>
                </div>
                <div className="navigation__burger-menu">
                    <label className="navigation__label" htmlFor="check">
                        <input
                            className="navigation__input"
                            type="checkbox" name=""
                            id="check"
                            onChange={handleChekBox}
                        />
                        <span className="navigation__burger-span"></span>
                    </label>
                </div>
            </nav>
        </Container>
    )
};
