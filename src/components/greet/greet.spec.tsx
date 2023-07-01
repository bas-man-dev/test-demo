import { Greet } from "./greet"
import { render, screen } from "@testing-library/react"

/* 
* Greet should render the text 'hello' and if a name is passed into the component
* It should render 'hello' followed by the name
*/

describe('Greet', () => {
  it('renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
  })
  
  it('renders with a name', () => {
    render(<Greet name ='Batman' />)
  
    const textElement = screen.getByText('Hello Batman')
    expect(textElement).toBeInTheDocument()
  })

})

