export function generateSquareArrayWithValues(dimensions: number): number[][] {
  let value = 0; // Начальное значение для заполнения массива
  const squareArray: number[][] = [];

  for (let i = 0; i < dimensions; i++) {
    squareArray[i] = []; // Инициализация подмассива
    for (let j = 0; j < dimensions; j++) {
      squareArray[i][j] = value++;
    }
  }

  return squareArray;
}

function generateAndShuffleArray(n: number) {
  let array = Array.from({length: n}, (_, i) => i);

  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export function generateSquareArrayWithRandomValues(dimensions: number): number[][] {
  const squareArray: number[][] = [];
  let index = 0;
  const values = generateAndShuffleArray(dimensions ** 2);

  for (let i = 0; i < dimensions; i++) {
    squareArray[i] = []; // Инициализация подмассива
    for (let j = 0; j < dimensions; j++) {
      squareArray[i][j] = values[index++];
    }
  }

  return squareArray;
}

