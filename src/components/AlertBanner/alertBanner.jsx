import { Alert } from "react-bootstrap";

const AlertBanner = ({ message, variant }) => {
    const alertMessage =
        message || "an unexpected error occured, please try again later";

    const alertVariant = variant || "danger";

    return <Alert variant={alertVariant}>{alertMessage}</Alert>;
};

export default AlertBanner;
