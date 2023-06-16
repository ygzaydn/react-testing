import Button from "react-bootstrap/Button";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { useState } from "react";
import { Form } from "react-bootstrap";

const popover = (
    <Popover>
        <Popover.Body>No icecream will actually be delivered</Popover.Body>
    </Popover>
);

const checkboxLabel = (
    <span>
        I agree to
        <OverlayTrigger placement="right" overlay={popover}>
            <span style={{ color: "blue" }}> Terms and Conditions</span>
        </OverlayTrigger>
    </span>
);

const SummaryForm = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <Form>
            <Form.Group controlId="terms-and-conditions">
                <Form.Check
                    type="checkbox"
                    checked={enabled}
                    onChange={() => setEnabled((old) => !old)}
                    label={checkboxLabel}
                />
            </Form.Group>

            <Button variant="success" type="submit" disabled={!enabled}>
                Confirm order
            </Button>
        </Form>
    );
};

export default SummaryForm;
