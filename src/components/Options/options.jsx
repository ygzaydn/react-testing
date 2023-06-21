import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOptions from "../ScoopOptions/scoopOptions";
import { Row } from "react-bootstrap";

const Options = ({ optionType }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3030/${optionType}`)
            .then((resp) => setItems(resp.data))
            .catch((err) => {
                //todo
            });
    }, [optionType]);

    const ItemComponent = optionType === "scoops" ? ScoopOptions : null;

    const optionItems = items.map((el) => (
        <ItemComponent key={el.name} name={el.name} imagePath={el.imagePath} />
    ));

    return <Row>{optionItems}</Row>;
};

export default Options;
