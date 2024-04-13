import { FC } from "react";
import { Container } from "../components/Container";
import { useTranslation } from "react-i18next";

const AboutUs: FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="about">
        <div className="about__titles">
          <h2 className="about__title">{t("about.title")}</h2>
        </div>
        <div className="about__image">
          <h2 className="about__image-title">{t("about.image title")}</h2>
          <p className="about__image-text">{t("about.image text")}</p>
        </div>
        <div className="about__content">
          <p className="about__text">{t("about.text")}</p>
        </div>
      </div>
    </Container>
  )
};

export default AboutUs;