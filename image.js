function uploadImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    const image = new Image();
    image.src = event.target.result;
    image.onload = function () {
      const canvas = document.getElementById("original-canvas");
      const canvasCtx = canvas.getContext("2d");
      canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
      const ratio = Math.min(
        canvas.width / image.width,
        canvas.height / image.height
      );
      canvasCtx.drawImage(
        image,
        0,
        0,
        image.width * ratio,
        image.height * ratio
      );
      updateCanvas();
    };
  };
  reader.readAsDataURL(file);
}

function saveImage() {
  const link = document.createElement("a");
  link.download = "converted-image.png";
  link.href = document.getElementById("converted-canvas").toDataURL();
  link.click();
}
