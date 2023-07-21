const ditheringAlgorithms = [
  "uniform",
  "floyd-steinberg",
  "atkinson",
  "jarvis-judice-ninke",
  "stucki",
  "burkes",
  "sierra",
  "two-row-sierra",
  "sierra-lite",
  "bayer",
  "random",
];

let timer;
function updateURL(parameters) {
  orderedParamsArray = [];
  for (const param of Object.keys(parameters).sort()) {
    value = parameters[param];
    switch (param) {
      case "ditheringAlgorithm":
        value = ditheringAlgorithms.indexOf(value);
        break;
      case "ditheringThreshold":
      case "contrast":
      case "exposure":
        value = Math.round(value * 100);
    }
    orderedParamsArray.push(value);
  }
  const orderedParamsShorter = orderedParamsArray.join("|");

  const url = new URL(window.location.href);
  url.hash = orderedParamsShorter;

  upd = (url) => {
    window.history.replaceState({}, "", url);
  };
  // debounce with setTimeout
  clearTimeout(timer);
  timer = setTimeout(() => upd(url), 200);
}

function loadParameters() {
  const url = new URL(window.location.href);
  if (url.hash.length == 0) {
    return getParameters();
  }
  const orderedParamsShorter = url.hash.slice(1);
  const orderedParamsArray = orderedParamsShorter.split("|");
  const parameters = {};
  for (const [index, param] of Object.keys(getParameters()).sort().entries()) {
    value = orderedParamsArray[index];
    switch (param) {
      case "ditheringAlgorithm":
        value = ditheringAlgorithms[value];
        break;
      case "ditheringThreshold":
      case "contrast":
      case "exposure":
        value = value / 100;
    }
    parameters[param] = value;
  }
  return parameters;
}

function getParameters() {
  return {
    ditheringAlgorithm: document.getElementById("dithering-algorithm").value,
    ditheringThreshold: parseInt(
      formControls.querySelector("#dithering-threshold").value
    ),
    contrast: parseFloat(formControls.querySelector("#contrast").value),
    exposure: parseFloat(formControls.querySelector("#exposure").value),
  };
}

function setParameters(parameters) {
  formControls.querySelector("#dithering-algorithm").value =
    parameters.ditheringAlgorithm;
  formControls.querySelector("#dithering-threshold").value =
    parameters.ditheringThreshold;
  formControls.querySelector("#contrast").value = parameters.contrast;
  formControls.querySelector("#exposure").value = parameters.exposure;
}
