/**
 * @param {ImageData} image
 * @param {Object} parameters
 * @returns {ImageData}
 */
function convertImage(image, parameters) {
  const data = image.data;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const gray = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    data[i] = gray;
    data[i + 1] = gray;
    data[i + 2] = gray;
  }

  const contrast = parameters.contrast;
  const exposure = parameters.exposure;

  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i];

    const adjusted = (gray - 128) * contrast + 128 + exposure * 255;

    data[i] = adjusted;
    data[i + 1] = adjusted;
    data[i + 2] = adjusted;
  }
  image.data = data;

  const ditheringAlgorithm = parameters.ditheringAlgorithm;
  const ditheringThreshold = parameters.ditheringThreshold;

  switch (ditheringAlgorithm) {
    case "uniform":
      image = uniformDithering(image, ditheringThreshold);
      break;
    case "floyd-steinberg":
      image = floydSteinbergDithering(image, ditheringThreshold);
      break;
    case "atkinson":
      image = atkinsonDithering(image, ditheringThreshold);
      break;
    case "jarvis-judice-ninke":
      image = jarvisJudiceNinkeDithering(image, ditheringThreshold);
      break;
    case "stucki":
      image = stuckiDithering(image, ditheringThreshold);
      break;
    case "burkes":
      image = burkesDithering(image, ditheringThreshold);
      break;
    case "sierra":
      image = sierraDithering(image, ditheringThreshold);
      break;
    case "two-row-sierra":
      image = twoRowSierraDithering(image, ditheringThreshold);
      break;
    case "sierra-lite":
      image = sierraLiteDithering(image, ditheringThreshold);
      break;
    case "bayer":
      image = bayerDithering(image, ditheringThreshold);
      break;
    case "random":
      image = randomDithering(image, ditheringThreshold);
      break;
    default:
      throw new Error(`Unknown dithering algorithm "${ditheringAlgorithm}"`);
  }

  return image;
}
