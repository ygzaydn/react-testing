import { render, screen, act } from "@testing-library/react";
import Options from "./options";

describe('Component "Option" tests', () => {
    test("displays image for each scoop option from server", async () => {
        await render(<Options optionType="scoops" />);

        // find images
        const scoopImages = await screen.findAllByRole("img", {
            name: /scoop$/i,
        });
        expect(scoopImages).toHaveLength(2);

        // confirm alt text of images
        const altText = scoopImages.map((el) => el.alt);
        expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
    });
});
