import { FC } from "react";
import { Container } from "../components/Container";
import { useSelector, useDispatch } from "react-redux";
import { TypeAppDispatch, TypeRootState } from "../store/store";
import { setPlace } from "../store/placeSlice";
import { FormRegistration} from "../components/FormRegistration";

const Personal: FC = () => {

    return (
        <Container>
            <div>
               <h2>Personal</h2>
               <FormRegistration />
            </div>
        </Container>
    )
};

export default Personal;