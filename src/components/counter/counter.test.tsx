import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  it("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  it("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  it("renders a count of 1 after clicking the button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  it('renders a count of 2 after clicking the button twice', async () => {
    user.setup()
    render(<Counter />)
    const incrementButton = screen.getByRole('button', {
        name: 'Increment',
    })
    await user.dblClick(incrementButton)
    // from Convenience APIs https://testing-library.com/docs/user-event/convenience/
    // also check Pointer APIs https://testing-library.com/docs/user-event/pointer/

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  })

  it('renders a count of 10 after clicking the set button', async () => {
    user.setup()
    render(<Counter />)

    const amountInput = screen.getByRole('spinbutton')
    // from Utility API https://testing-library.com/docs/user-event/utility/

    await user.type(amountInput, '10')
    expect(amountInput).toHaveValue(10)
    const  setButton = screen.getByRole('button', {
        name: 'Set',
    })
    await user.click(setButton)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('10')
  })

  it('focuses in the correct order for keyboard users',async () => {
    user.setup()
    render(<Counter />)

    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', { name: 'Set' })
    const incrementButton = screen.getByRole('button', { name: 'Increment'})


    // From convenience API https://testing-library.com/docs/user-event/convenience/
    await user.tab()
    expect(incrementButton).toHaveFocus()
    await user.tab()
    expect(amountInput).toHaveFocus()
    await user.tab()
    expect(setButton).toHaveFocus()
    // Not used, but copy, paste and cut are in the Clipboard APIs https://testing-library.com/docs/user-event/clipboard/
  })
});
