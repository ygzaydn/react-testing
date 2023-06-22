/* eslint-disable @next/next/no-img-element */
import { Col } from "react-bootstrap";

const ToppingOptions = ({ name, imagePath }) => {
    return (
        <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            style={{
                textAlign: "center",
            }}
        >
            <img
                src={`http://localhost:3030/${imagePath}`}
                alt={`${name} topping`}
                style={{ width: "75%" }}
            />
        </Col>
    );
};

export default ToppingOptions;
