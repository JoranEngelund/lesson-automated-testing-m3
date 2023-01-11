import apple from "./apple.js";

describe("My apple", () => {
  it("is red and juicy", () => {
    expect(apple.color).toEqual("red");
    expect(apple.texture).toEqual("juicy");
  });

  it("is delicius", () => {
    expect(apple.rating).toBeGreaterThan(6);
  });

  it("is it vegan friendly", () => {
    expect(apple.animalProduct).not.toBeTruthy();
  });
});
