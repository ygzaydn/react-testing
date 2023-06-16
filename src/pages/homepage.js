import { useState } from "react";

export const replaceCamelWithSpaces = (colorName) => {
    return colorName.replace(/\B([A-Z])\B/g, " $1");
};

export default function Home() {
    const [color, setColor] = useState("MediumVioletRed");
    const [disabled, setDisabled] = useState(false);
    return (
        <div>
            <button
                style={{
                    backgroundColor: disabled ? "lightgray" : color,
                    color: disabled ? "black" : "white",
                    opacity: disabled && 0.9,
                }}
                disabled={disabled}
                onClick={() =>
                    color === "MediumVioletRed"
                        ? setColor("MidnightBlue")
                        : setColor("MediumVioletRed")
                }
            >
                Change to{" "}
                {color === "MediumVioletRed"
                    ? replaceCamelWithSpaces("MidnightBlue")
                    : replaceCamelWithSpaces("MediumVioletRed")}
            </button>
            <br />
            <input
                id="disable-button-checkbox"
                type="checkbox"
                value={disabled}
                onClick={() => setDisabled((old) => !old)}
            />
            <label htmlFor="disable-button-checkbox">Disable button</label>
        </div>
    );
}
