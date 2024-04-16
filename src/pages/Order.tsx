import { FC } from "react";
import { Container } from "../components/Container";
import { useSelector, useDispatch } from "react-redux";
import { TypeAppDispatch, TypeRootState } from "../store/store";
import { setPlace } from "../store/placeSlice";
import { FormUsers} from "../components/FormRegistration";

const Order: FC = () => {
    const placeChoice = useSelector((state: TypeRootState) => state.places.place);

    return (
        <Container>
            <div>
               <h2>Order</h2>

            </div>
        </Container>
    )
};

export default Order;