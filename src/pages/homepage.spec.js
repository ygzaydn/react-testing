import { render, screen, fireEvent } from "@testing-library/react";
import Home, { replaceCamelWithSpaces } from "./homepage";

describe("first tests", () => {
    test("initial values", () => {
        render(<Home />);
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).not.toBeChecked();
        const myButton = screen.getByRole("button", {
            name: `Change to ${replaceCamelWithSpaces("MidnightBlue")}`,
        });
        expect(myButton).toBeEnabled();
    });

    test("click color of box if checkbox is unchecked", () => {
        render(<Home />);
        const myButton = screen.getByRole("button", {
            name: `Change to ${replaceCamelWithSpaces("MidnightBlue")}`,
        });
        const checkbox = screen.getByRole("checkbox");

        expect(checkbox).not.toBeChecked();
        expect(myButton).toBeEnabled();

        expect(myButton).toHaveStyle(`background-color: MediumVioletRed`);

        fireEvent.click(myButton);

        expect(myButton).toHaveTextContent(
            `Change to ${replaceCamelWithSpaces("MediumVioletRed")}`
        );
        expect(myButton).toHaveStyle(`background-color: MidnightBlue`);
    });

    test("confirm button disable on checkbox check", () => {
        render(<Home />);
        const myButton = screen.getByRole("button", {
            name: `Change to ${replaceCamelWithSpaces("MidnightBlue")}`,
        });
        const checkbox = screen.getByRole("checkbox", {
            name: "Disable button",
        });

        expect(checkbox).not.toBeChecked();
        expect(myButton).toBeEnabled();

        fireEvent.click(checkbox);

        expect(checkbox).toBeChecked();
        expect(myButton).toBeDisabled();
    });
});

describe("spaces before camel-case capital letters", () => {
    test("works for no inner capital letters", () => {
        expect(replaceCamelWithSpaces("Red")).toBe("Red");
    });
    test("works for one inner capital letter", () => {
        expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
    });
    test("works for multiple capital letters", () => {
        expect(replaceCamelWithSpaces("MediumViolentRed")).toBe(
            "Medium Violent Red"
        );
    });
});
