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
});
