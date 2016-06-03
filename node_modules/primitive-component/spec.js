define(["./index.js"], function (PrimitiveComponent) {
  describe("A primitive component", function () {
    it("creates a span from a primitive value", function () {
      var value = "Hello, world!";
      var primitiveComponent = PrimitiveComponent({value: value});
      expect(primitiveComponent.classList).toContain("primitive");
    });
  });
});
