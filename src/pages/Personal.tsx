import { FC } from "react";
import { Container } from "../components/Container";
import { useSelector, useDispatch } from "react-redux";
import { TypeAppDispatch, TypeRootState } from "../store/store";
import { setPlace } from "../store/placeSlice";

const Personal: FC = () => {
    const placeChoice = useSelector((state: TypeRootState) => state.places.place);

    return (
        <Container>
            <div>
               <h2>Ky</h2>
            </div>
        </Container>
    )
};

export default Personal;