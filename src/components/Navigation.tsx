import { ChangeEvent, FC, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import group from '../assets/images/navigation/Group.png';
import logo from '../assets/images/navigation/logo.png';
import Select, { SingleValue } from 'react-select';
import { Container } from "./Container";
import {useTranslation} from "react-i18next";
 
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
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [smallScreen, setSmallScreen] = useState<number>(1920);
    const { t, i18n } = useTranslation();
  
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
            i18n.changeLanguage(selectedOption.value.toLowerCase())
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
                    <NavLink className='navigation__link' to='/'>{t('navigation.main')}</NavLink>
                    <div className="navigation__lintel"></div>
                    <NavLink className='navigation__link' to='/about'>{t('navigation.about us')}</NavLink>
                    <div className="navigation__lintel"></div>
                    <NavLink className='navigation__link' to='/reserve'>{t('navigation.reserve')}</NavLink>
                    <div className="navigation__lintel"></div>
                    <NavLink className='navigation__link' to='/contacts'>{t('navigation.contacts')}</NavLink>
                    <div className="navigation__lintel"></div>
                    <NavLink className='navigation__link' to='/personal'>{t('navigation.personal')} {smallScreen < 768 ? null : <br />} {t('navigation.office')}</NavLink>
                    <div className="navigation__lintel"></div>
                    <div className='navigation__link navigation__link_flex'>
                        <img className='navigation__image-group' src={group} alt="Group Image" />
                        <Select
                            className="navigation__select"
                            classNamePrefix="navigation__select"
                            value={options.find(option => option.value.toLowerCase() === i18n.language)}
                            onChange={handleLanguageChange}
                            options={options}
                        />
                    </div>
                </div>
                <div className="navigation__burger-menu">
                    <label className="navigation__label">
                        <input
                            className="navigation__input"
                            name="changeLanguage"
                            type="checkbox" 
                            onChange={handleChekBox}
                        />
                        <span className="navigation__burger-span"></span>
                    </label>
                </div>
            </nav>
        </Container>
    )
};
