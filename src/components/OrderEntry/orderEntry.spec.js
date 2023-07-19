import { findAllByRole, render, screen, waitFor } from "@testing-library/react";
import OrderEntry from "./orderEntry";
import { server } from "@/mocks/server";
import { errorHandlers } from "@/mocks/handlers";

describe('Component "OrderEntry" tests', () => {
    test("Handles error for scoops and toppings routes", async () => {
        server.resetHandlers(errorHandlers);
        await render(<OrderEntry />);
        await waitFor(async () => {
            const alerts = await screen.findAllByRole("alert", {
                value: /an unexpected error occured, please try again later/i,
            });
            expect(alerts).toHaveLength(2);
        });
    });
});
