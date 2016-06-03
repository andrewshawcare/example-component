define(["ace/ace", "./node_modules/primitive-component/index"], function (ace, PrimitiveComponent) {
  return function(args) {
    var args = args || {};
    var name = args.name || "NoNameProvided";
    var version = args.version || "no.version.provided";
    var description = args.description || "No description provided.";
    var data = args.data || {"value": "No data provided."};
    var component = args.component || PrimitiveComponent;

    var exampleElement = document.createElement("article");
    exampleElement.classList.add("example");

    var headerElement = document.createElement("header");
    headerElement.classList.add("header");
    exampleElement.appendChild(headerElement);

    var nameElement = document.createElement("h1");
    nameElement.classList.add("name");
    nameElement.innerText = name;
    headerElement.appendChild(nameElement);

    var descriptionElement = document.createElement("p");
    descriptionElement.classList.add("description");
    descriptionElement.innerText = description;
    headerElement.appendChild(descriptionElement);

    var dataElement = document.createElement("section");
    dataElement.classList.add("data");
    exampleElement.appendChild(dataElement);

    var editor = ace.edit(dataElement);
    editor.$blockScrolling = Infinity;
    editor.setTheme("ace/theme/github")

    var session = editor.getSession();
    session.setValue(JSON.stringify(data, null, 2));
    session.setMode("ace/mode/json");
    session.on("change", function (event) {
      try {
        var data = JSON.parse(session.getValue());
        previewElement.innerHTML = "";
        previewElement.appendChild(component(data));
      } catch (error) {
        console.log(error);
      }
    });

    var previewElement = document.createElement("section");
    previewElement.classList.add("preview");
    previewElement.appendChild(component(data));
    exampleElement.appendChild(previewElement);

    var specElement = document.createElement("section");
    specElement.classList.add("spec");
    exampleElement.appendChild(specElement);

    var jasmineHtmlReporterElement = document.createElement("div");
    jasmineHtmlReporterElement.classList.add("jasmine_html-reporter");
    specElement.appendChild(jasmineHtmlReporterElement);

    return exampleElement;
  };
});
