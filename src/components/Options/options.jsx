import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOptions from "../ScoopOptions/scoopOptions";
import { Row } from "react-bootstrap";
import ToppingOptions from "../ToppingOptions/toppingOptions";
import { Alert } from "react-bootstrap";

const Options = ({ optionType }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3030/${optionType}`)
            .then((resp) => setItems(resp.data))
            .catch((err) => {
                setItems("alert");
            });
    }, [optionType]);

    const ItemComponent =
        optionType === "scoops" ? ScoopOptions : ToppingOptions;

    const optionItems =
        items === "alert" ? (
            <Alert />
        ) : (
            items.map((el) => (
                <ItemComponent
                    key={el.name}
                    name={el.name}
                    imagePath={el.imagePath}
                />
            ))
        );

    return <Row>{optionItems}</Row>;
};

export default Options;
