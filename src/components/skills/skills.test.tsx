import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />)
    const listItemsElements = screen.getAllByRole('listitem')
    expect(listItemsElements).toHaveLength(skills.length)
  })

  test('renders login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button')
    expect(loginButton).toBeInTheDocument()
  })

  test('Start Learning button is not rendered', () => {
    render(<Skills skills={skills} />)

    const startLearningButton = screen.queryByRole('button', {
        name: 'Start Learning',
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  test('Start Learning button is eventually displayed', async () => {
    render(<Skills skills={skills} />)
    const startLearningButton = await screen.findByRole('button', {
        name: 'Start Learning',
    },
    {
        timeout: 1050,
    })
    expect(startLearningButton).toBeInTheDocument()
  })
});
