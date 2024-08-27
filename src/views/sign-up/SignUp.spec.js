import { expect } from "vitest";
import SignUp from "./SignUp.vue";
import userEvent from "@testing-library/user-event";

const { render, screen } = require("@testing-library/vue");

describe("Sign up page tests", () => {
  it("should have 'Sign Up' header", () => {
    render(SignUp);
    const headerElement = screen.getByRole("heading", { name: /Sign Up/i });
  });

  it("has username input", () => {
    render(SignUp);
    const inputUsernameElement = screen.getByRole("textbox", { name: /username/i }); // aria-label needed in html to make the getByRole work
    // const inputUsernameElement = screen.getByLabelText(/username/i);
    // expect(inputUsernameElement).toBeInTheDocument(); <-- expect is not needed, as it's implicitly tested in the previous step
  });

  it("has email input", () => {
    render(SignUp);
    const inputEmailElement = screen.getByLabelText(/email/i);
  });

  it("has password type for password input", () => {
    render(SignUp);
    const inputPasswordElement = screen.getByLabelText(/^password/i);
    expect(inputPasswordElement).toHaveAttribute("type", "password");
  });

  it("has password type for repeat password input", () => {
    render(SignUp);
    const inputRepeatPasswordElement = screen.getByLabelText(/repeat password/i);
    expect(inputRepeatPasswordElement).toHaveAttribute("type", "password");
  });

  it("has a sign up button", () => {
    render(SignUp);
    const buttonElement = screen.getByRole("button", { name: /Sign up/i });
  });

  it("has the sign up button disabled initially", () => {
    render(SignUp);
    const buttonElement = screen.getByRole("button", { name: /Sign up/i });
    expect(buttonElement).toBeDisabled();
  });

  describe("when user sets same value for password inputs", () => {
    it("enables button", async () => {
      const user = userEvent.setup();
      render(SignUp);
      const inputPasswordElement = screen.getByLabelText(/^password/i);
      const inputRepeatPasswordElement = screen.getByLabelText(/repeat password/i);
      const buttonElement = screen.getByRole("button", { name: /Sign up/i });
      await user.type(inputPasswordElement, "password");
      await user.type(inputRepeatPasswordElement, "password");
      expect(buttonElement).toBeEnabled();
    });
  });
});
