const canvas = document.getElementById("original-canvas");
const canvasCtx = canvas.getContext("2d", {
  alpha: false,
  willReadFrequently: true,
});
const convertedCanvas = document.getElementById("converted-canvas");
const convertedCanvasCtx = convertedCanvas.getContext("2d", {
  alpha: false,
  willReadFrequently: true,
});
const imageUpload = document.getElementById("image-upload");
const saveButton = document.getElementById("save-button");
const formControls = document.getElementById("controls-form");

imageUpload.addEventListener("change", uploadImage);
saveButton.addEventListener("click", saveImage);

formControls.addEventListener("input", updateCanvas);

// load parameters from URL on document ready
window.addEventListener("DOMContentLoaded", () => {
  formControls.removeEventListener("input", updateCanvas);
  setParameters(loadParameters());
  formControls.addEventListener("input", updateCanvas);
});

function updateCanvas() {
  const image = canvasCtx.getImageData(0, 0, canvas.width, canvas.height);
  const convertedImage = convertImage(image, getParameters());
  convertedCanvasCtx.putImageData(convertedImage, 0, 0);
  updateURL(getParameters());
}
