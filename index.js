ExampleComponent = function(args) {
  var package = args.package;
  var data = args.data;
  var component = args.component;

  var exampleElement = document.createElement("article");
  exampleElement.classList.add("example");

  var headerElement = document.createElement("header");
  headerElement.classList.add("header");
  exampleElement.appendChild(headerElement);

  var nameElement = document.createElement("h1");
  nameElement.classList.add("name");
  nameElement.innerText = package.name;
  headerElement.appendChild(nameElement);

  var descriptionElement = document.createElement("p");
  descriptionElement.classList.add("description");
  descriptionElement.innerText = package.description;
  headerElement.appendChild(descriptionElement);

  var dataElement = document.createElement("section");
  dataElement.classList.add("data");
  exampleElement.appendChild(dataElement);

  var editor = ace.edit(dataElement);
  editor.setTheme("ace/theme/github")

  var session = editor.getSession();
  session.setValue(JSON.stringify(data));
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

  var jasmineHtmlReporterElement = document.querySelector(".jasmine_html-reporter") || document.createElement("div");
  jasmineHtmlReporterElement.classList.add("jasmine_html-reporter");
  specElement.appendChild(jasmineHtmlReporterElement);

  return exampleElement;
};
