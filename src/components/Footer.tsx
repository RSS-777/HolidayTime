import { FC } from "react";
import { Container } from "./Container";

export const Footer: FC = () => {
    return(
        <Container>
            <footer className="footer">
                <p className="footer__text">&copy; 2021 HolidayTime.  All rights reserved.</p>
            </footer>
        </Container>

    )
}