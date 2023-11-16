import { render, screen } from "@testing-library/react";
import App from "./App";

// test("TestFirst React case", () => {
//   render(<App />);
//   const text = screen.getByText(/First React Test Case/i);
//   const title = screen.getByTitle(/AI Generated Image/i);
//   expect(text).toBeInTheDocument();
//   expect(title).toBeInTheDocument();
// });

test("Check Input box", () => {
  render(<App />);
  let checkbox = screen.getByRole("textbox");
  expect(checkbox).toBeInTheDocument();
  let placeholder = screen.getByPlaceholderText(/enter/i);
  expect(placeholder).toBeInTheDocument();
  expect(checkbox).toHaveAttribute("name", "username");
  expect(checkbox).toHaveAttribute("id", "userId");
  expect(checkbox).toHaveAttribute("type", "text");
  expect(checkbox).toHaveAttribute("value", "jeetesh");
});
