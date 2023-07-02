import { Application } from "./application";
import { getByLabelText, render, screen } from "@testing-library/react";

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

        const paragraphElement = screen.getByText('All fields are mandatory')
        expect(paragraphElement).toBeInTheDocument()

        const paragraphElement1 = screen.getByText('all fields are mandatory', {exact:false})
        expect(paragraphElement1).toBeInTheDocument() // ignore case

        const paragraphElement2 = screen.getByText('All fields', {exact:false})
        expect(paragraphElement2).toBeInTheDocument() //substring match

        const paragraphElement3 = screen.getByText(/All/)
        expect(paragraphElement3).toBeInTheDocument() //substring regex

        const paragraphElement4 = screen.getByText(/all fiELds are manDatory/i)
        expect(paragraphElement4).toBeInTheDocument() //substring ignore case

        const paragraphElement5 = screen.getByText(/^All fields are mandatory$/)
        expect(paragraphElement5).toBeInTheDocument() //exact case, can add i for exact but ignore case

        const paragraphElement6 = screen.getByText((content) => content.startsWith('All'))
        expect(paragraphElement6).toBeInTheDocument() // custom function

        const closeElement = screen.getByTitle('close')
        expect(closeElement).toBeInTheDocument

        const imageElement = screen.getByAltText('people working in an office')
        expect(imageElement).toBeInTheDocument()

        const customElement = screen.getByTestId('custom-element')
        expect(customElement).toBeInTheDocument()

        const nameElement = screen.getByRole('textbox', {
            name: 'Name',
        })
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByLabelText('Name', {
            selector: 'input',
        })
        expect(nameElement2).toBeInTheDocument()

        const nameElement3 = screen.getByPlaceholderText('Full name')
        expect(nameElement3).toBeInTheDocument()

        const nameElement4 = screen.getByDisplayValue('batman')
        expect(nameElement4).toBeInTheDocument()

        const bioElement = screen.getByRole('textbox', {
            name: 'Bio',
        })
        expect(bioElement).toBeInTheDocument()

        const jobLocationElement = screen.getByRole("combobox")
        expect(jobLocationElement).toBeInTheDocument()

        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument()

        const termsElement2 = screen.getByLabelText('I agree to the terms and conditions')
        expect(termsElement2).toBeInTheDocument()

        const submitButtonElement = screen.getByRole('button')
        expect(submitButtonElement).toBeInTheDocument()
    
    })

})