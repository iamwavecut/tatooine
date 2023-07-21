function grayScale(image) {
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

  image.data = data;
  return image;
}

function uniformDithering(image, threshold) {
  const data = grayScale(image).data;

  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i];

    const adjusted = gray < threshold ? 0 : 255;

    data[i] = adjusted;
    data[i + 1] = adjusted;
    data[i + 2] = adjusted;
  }

  image.data = data;
  return image;
}

function floydSteinbergDithering(image, threshold) {
  const data = grayScale(image).data;

  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i];

    const adjusted = gray < threshold ? 0 : 255;

    data[i] = adjusted;
    data[i + 1] = adjusted;
    data[i + 2] = adjusted;

    const error = gray - adjusted;

    data[i + 4] += (7 / 16) * error;
    data[i + 5] += (5 / 16) * error;
    data[i + 6] += (3 / 16) * error;
    data[i + 7] += (1 / 16) * error;
  }

  image.data = data;
  return image;
}

function atkinsonDithering(image, threshold) {
  const data = grayScale(image).data;

  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i];

    const adjusted = gray < threshold ? 0 : 255;

    data[i] = adjusted;
    data[i + 1] = adjusted;
    data[i + 2] = adjusted;

    const error = gray - adjusted;

    data[i + 4] += (1 / 8) * error;
    data[i + 5] += (1 / 8) * error;
    data[i + 6] += (1 / 8) * error;
    data[i + 7] += (1 / 8) * error;
    data[i + 8] += (1 / 8) * error;
    data[i + 9] += (1 / 8) * error;
    data[i + 12] += (1 / 8) * error;
  }

  image.data = data;
  return image;
}

function jarvisJudiceNinkeDithering(image, threshold) {
  const data = grayScale(image).data;

  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i];

    const adjusted = gray < threshold ? 0 : 255;

    data[i] = adjusted;
    data[i + 1] = adjusted;
    data[i + 2] = adjusted;

    const error = gray - adjusted;

    data[i + 4] += (7 / 48) * error;
    data[i + 5] += (5 / 48) * error;
    data[i + 6] += (3 / 48) * error;
    data[i + 7] += (5 / 48) * error;
    data[i + 8] += (7 / 48) * error;
    data[i + 9] += (5 / 48) * error;
    data[i + 10] += (3 / 48) * error;
    data[i + 11] += (1 / 48) * error;
    data[i + 12] += (3 / 48) * error;
    data[i + 13] += (5 / 48) * error;
    data[i + 14] += (7 / 48) * error;
    data[i + 15] += (5 / 48) * error;
    data[i + 16] += (3 / 48) * error;
    data[i + 17] += (5 / 48) * error;
    data[i + 18] += (7 / 48) * error;
    data[i + 19] += (5 / 48) * error;
    data[i + 20] += (3 / 48) * error;
    data[i + 21] += (1 / 48) * error;
  }

  image.data = data;
  return image;
}

function stuckiDithering(image, threshold) {
  const data = grayScale(image).data;

  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i];

    const adjusted = gray < threshold ? 0 : 255;

    data[i] = adjusted;
    data[i + 1] = adjusted;
    data[i + 2] = adjusted;

    const error = gray - adjusted;

    data[i + 4] += (8 / 42) * error;
    data[i + 5] += (4 / 42) * error;
    data[i + 6] += (2 / 42) * error;
    data[i + 7] += (4 / 42) * error;
    data[i + 8] += (8 / 42) * error;
    data[i + 9] += (4 / 42) * error;
    data[i + 10] += (2 / 42) * error;
    data[i + 11] += (1 / 42) * error;
    data[i + 12] += (4 / 42) * error;
    data[i + 13] += (8 / 42) * error;
    data[i + 14] += (4 / 42) * error;
    data[i + 15] += (2 / 42) * error;
    data[i + 16] += (1 / 42) * error;
    data[i + 17] += (2 / 42) * error;
    data[i + 18] += (4 / 42) * error;
    data[i + 19] += (2 / 42) * error;
    data[i + 20] += (1 / 42) * error;
  }

  image.data = data;
  return image;
}

function burkesDithering(image, threshold) {
  const data = grayScale(image).data;

  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i];

    const adjusted = gray < threshold ? 0 : 255;

    data[i] = adjusted;
    data[i + 1] = adjusted;
    data[i + 2] = adjusted;

    const error = gray - adjusted;

    data[i + 4] += (8 / 32) * error;
    data[i + 5] += (4 / 32) * error;
    data[i + 6] += (2 / 32) * error;
    data[i + 7] += (4 / 32) * error;
    data[i + 8] += (8 / 32) * error;
    data[i + 9] += (4 / 32) * error;
    data[i + 10] += (2 / 32) * error;
  }

  image.data = data;
  return image;
}

function sierraDithering(image, threshold) {
  const data = grayScale(image).data;

  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i];

    const adjusted = gray < threshold ? 0 : 255;

    data[i] = adjusted;
    data[i + 1] = adjusted;
    data[i + 2] = adjusted;

    const error = gray - adjusted;

    data[i + 4] += (5 / 32) * error;
    data[i + 5] += (3 / 32) * error;
    data[i + 6] += (2 / 32) * error;
    data[i + 7] += (4 / 32) * error;
    data[i + 8] += (5 / 32) * error;
    data[i + 9] += (4 / 32) * error;
    data[i + 10] += (2 / 32) * error;
    data[i + 11] += (3 / 32) * error;
    data[i + 12] += (2 / 32) * error;
    data[i + 13] += (2 / 32) * error;
    data[i + 14] += (1 / 32) * error;
  }

  image.data = data;
  return image;
}

function twoRowSierraDithering(image, threshold) {
  const data = grayScale(image).data;

  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i];

    const adjusted = gray < threshold ? 0 : 255;

    data[i] = adjusted;
    data[i + 1] = adjusted;
    data[i + 2] = adjusted;

    const error = gray - adjusted;

    data[i + 4] += (4 / 16) * error;
    data[i + 5] += (3 / 16) * error;
    data[i + 6] += (1 / 16) * error;
    data[i + 7] += (2 / 16) * error;
    data[i + 8] += (3 / 16) * error;
    data[i + 9] += (2 / 16) * error;
    data[i + 10] += (1 / 16) * error;
  }

  image.data = data;
  return image;
}

function sierraLiteDithering(image, threshold) {
  const data = grayScale(image).data;

  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i];

    const adjusted = gray < threshold ? 0 : 255;

    data[i] = adjusted;
    data[i + 1] = adjusted;
    data[i + 2] = adjusted;

    const error = gray - adjusted;

    data[i + 4] += (2 / 4) * error;
    data[i + 5] += (1 / 4) * error;
    data[i + 6] += (1 / 4) * error;
  }

  image.data = data;
  return image;
}

function bayerDithering(image, threshold) {
  const data = grayScale(image).data;

  const bayerMatrix = [
    [1, 9, 3, 11],
    [13, 5, 15, 7],
    [4, 12, 2, 10],
    [16, 8, 14, 6],
  ];

  const bayerMatrixSize = bayerMatrix.length;

  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i];

    const x = (i / 4) % image.width;
    const y = Math.floor(i / 4 / image.width);

    const threshold =
      (bayerMatrix[x % bayerMatrixSize][y % bayerMatrixSize] /
        (bayerMatrixSize * bayerMatrixSize)) *
      255;

    const adjusted = gray < threshold ? 0 : 255;

    data[i] = adjusted;
    data[i + 1] = adjusted;
    data[i + 2] = adjusted;
  }

  image.data = data;
  return image;
}

function randomDithering(image, threshold) {
  const data = grayScale(image).data;

  const randomMatrix = [
    [0.1, 0.6, 0.2, 0.7],
    [0.5, 0.0, 0.8, 0.3],
    [0.3, 0.8, 0.1, 0.6],
    [0.7, 0.2, 0.6, 0.1],
  ];

  const randomMatrixSize = randomMatrix.length;

  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i];

    const x = (i / 4) % image.width;
    const y = Math.floor(i / 4 / image.width);

    threshold =
      (randomMatrix[x % randomMatrixSize][y % randomMatrixSize] *
        threshold *
        255) /
      255;

    const adjusted = gray < threshold ? 0 : 255;

    data[i] = adjusted;
    data[i + 1] = adjusted;
    data[i + 2] = adjusted;
  }

  image.data = data;
  return image;
}
