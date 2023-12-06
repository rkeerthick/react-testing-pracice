import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("Greet component is tested", () => {
    render(<Greet />);
    const value = screen.getByText(/greet/i);
    expect(value).toBeInTheDocument();
  });

  test("Greet component with name is tested", () => {
    render(<Greet name="Keerthick" />);
    const value = screen.getByText(/greet keerthick/i);
    expect(value).toBeInTheDocument();
  });
});
