import {FC} from "react";
import {useTranslation} from "react-i18next";

const AboutUs: FC = () => {
    const { t, i18n } = useTranslation();

    return(
      <div>
        <h2>About us</h2>
        <p>вибрано {i18n.language}</p>
        <p>{ t('navigation.main') }</p>
      </div>
    )
};

export default AboutUs;