define([], function () {
  return function (data) {
    var data = data || {};
    var value = data.value || "";

    var primitiveElement = document.createElement("span");
    primitiveElement.classList.add("primitive");
    primitiveElement.textContent = value;

    return primitiveElement;
  };
});
