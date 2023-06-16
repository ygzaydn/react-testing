import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SummaryForm } from "..";

describe('Component "Summary Form" Tests', () => {
    test("Button should be disabled at render", () => {
        render(<SummaryForm />);
        const button = screen.getByRole("button", {
            name: "Confirm order",
        });
        expect(button).toBeDisabled();
    });
    test("Checkbox should be unchecked at render", () => {
        render(<SummaryForm />);
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).not.toBeChecked();
    });
    test("Button should be enabled after clicking checkbox", async () => {
        const user = userEvent.setup();
        render(<SummaryForm />);
        const checkbox = screen.getByRole("checkbox");
        const button = screen.getByRole("button", {
            name: "Confirm order",
        });
        await user.click(checkbox);
        expect(button).toBeEnabled();
    });

    test("Enabled button should be disabled after clicking checkbox", () => {
        render(<SummaryForm />);
        const checkbox = screen.getByRole("checkbox", {
            name: "I agree to Terms and Conditions",
        });
        const button = screen.getByRole("button", {
            name: "Confirm order",
        });
        fireEvent.click(checkbox);
        fireEvent.click(checkbox);
        expect(button).toBeDisabled();
    });
    test("Popover should be visible on hover", async () => {
        const user = userEvent.setup();
        render(<SummaryForm />);

        // popover is hidden
        const nullPopover = screen.queryByText(
            /no icecream will actually be delivered/i
        );
        expect(nullPopover).not.toBeInTheDocument();
        // hover action and popover is active
        const text = screen.getByText(/terms and conditions/i);
        await user.hover(text);

        const popover = screen.queryByText(
            /no icecream will actually be delivered/i
        );
        expect(popover).toBeInTheDocument();
        // unhover and popover disappears

        await user.unhover(text);
        expect(popover).not.toBeInTheDocument();
    });
});
