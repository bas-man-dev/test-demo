import { Application } from "./application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
    test("renders correctly", () => {
        render(<Application />);

        const pageHeading = screen.getByRole('heading', {
            level: 1,
        })

        const sectionHeading = screen.getByRole('heading', {
            level: 2,
        })
        expect(sectionHeading).toBeInTheDocument()

        expect(pageHeading).toBeInTheDocument()

        const nameElement = screen.getByRole('textbox', {
            name: 'Name',
        })
        expect(nameElement).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name: 'Bio',
        })
        expect(bioElement).toBeInTheDocument()

        const jobLocationElement = screen.getByRole("combobox")
        expect(jobLocationElement).toBeInTheDocument()

        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument()

        const submitButtonElement = screen.getByRole('button')
        expect(submitButtonElement).toBeInTheDocument()
    
    })

})