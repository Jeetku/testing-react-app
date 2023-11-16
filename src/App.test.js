import { fireEvent, render, screen } from "@testing-library/react";
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

describe("UI Testcase group", () => {
  test("group-1 with describe", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("name", "username");
    expect(checkInput).toHaveAttribute("value", "jeetesh");
  });
  test("group-2 with describe", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("name", "username");
    expect(checkInput).toHaveAttribute("value", "jeetesh");
  });
  test("group-3 with describe", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("name", "username");
    expect(checkInput).toHaveAttribute("value", "jeetesh");
  });
});

describe("API Testcase group", () => {
  test("group-1 with describe", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("name", "username");
    expect(checkInput).toHaveAttribute("value", "jeetesh");
  });
  test("group-2 with describe", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("name", "username");
    expect(checkInput).toHaveAttribute("value", "jeetesh");
  });
  test("group-3 with describe", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("name", "username");
    expect(checkInput).toHaveAttribute("value", "jeetesh");
  });
  describe("Inner Describe Group", () => {
    test("nested with describe", () => {
      render(<App />);
      let checkInput = screen.getByRole("textbox");
      expect(checkInput).toBeInTheDocument();
    });
  });
});

// testing of change event

describe.only("Inout change event testing", () => {
  test("onchange event Testing", () => {
    render(<App />);
    let inputCheck = screen.getByRole("textbox");
    fireEvent.change(inputCheck, { target: { value: "a" } });
    expect(inputCheck.value).toBe("a");
  });
});
