import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

test("Greet component is tested", () => {
    render(<Greet />);
    const value = screen.getByText(/greet/i);
    expect(value).toBeInTheDocument();
})