import axios from "axios";
import Options from "../Options/options";

const OrderEntry = () => {
    return (
        <div>
            <Options optionType="scoops" />
            <Options optionType="toppings" />
        </div>
    );
};

export default OrderEntry;
