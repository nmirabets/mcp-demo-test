import { add, multiply } from "../utils";

describe("add", () => {
  it("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("handles negative numbers", () => {
    expect(add(-1, 1)).toBe(0);
  });
});

describe("multiply", () => {
  it("multiplies two numbers", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it("handles zero", () => {
    expect(multiply(5, 0)).toBe(0);
  });
});
