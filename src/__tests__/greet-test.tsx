import { render, screen } from "@testing-library/react";
import Greet from "../components/Greet/Greet";

describe("Greet", () => {
  it("Greet component is tested", () => {
    render(<Greet />);
    const value = screen.getByText(/greet/i);
    expect(value).toBeInTheDocument();
  });

  it("Greet component with name is tested", () => {
    render(<Greet name="Keerthick" />);
    const value = screen.getByText(/greet keerthick/i);
    expect(value).toBeInTheDocument();
  });
});
