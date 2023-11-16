import { render, screen } from "@testing-library/react";
import App from "./App";

test("Other TestFirst React case", () => {
  render(<App />);
  const text = screen.getByText(/First React Test Case/i);
  const title = screen.getByTitle(/AI Generated Image/i);
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
