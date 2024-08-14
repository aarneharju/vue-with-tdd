import HelloWorld from "../HelloWorld.vue";
import { render, screen } from "@testing-library/vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    render(HelloWorld, { props: { msg: "Hello Vitest" } });
    const element = screen.getByText("Hello Vitest");
    console.log(element);
    expect(element).toBeInTheDocument();
  });
});
