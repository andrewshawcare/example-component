/*global define, describe, it, expect */
define(["./index.js"], function (ExampleComponent) {
  describe("An example component", function () {
    it("has the example class", function () {
      var exampleComponentElement = ExampleComponent();
      expect(exampleComponentElement.classList.contains("example")).toBe(true);
    });
  });
});
