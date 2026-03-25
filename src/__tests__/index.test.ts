import { greet } from "../index";

describe("greet", () => {
  it("greets by name", () => {
    expect(greet("Alice")).toBe("Hello, Alice! Welcome to the MCP demo.");
  });
});
