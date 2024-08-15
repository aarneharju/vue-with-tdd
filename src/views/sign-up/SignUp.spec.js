import SignUp from "./SignUp.vue";

const { render, screen } = require("@testing-library/vue");

describe("Sign up page tests", () => {
  it("should have 'Sign Up' header", () => {
    render(SignUp);
    const headerElement = screen.getByRole("heading", { name: /Sign Up/i });
  });
});
