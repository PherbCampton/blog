import { add } from "./math";
import { describe, expect, it } from "vitest";

describe("Math functions", () => {
  it("should add two numbers correctly", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
