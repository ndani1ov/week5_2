// Функция для разбиения входных данных на массивы
const parseInput = (input: string): string[][] => {
  const lines = input.trim().split("\n");
  const numStudents = parseInt(lines[0]);
  const arrays: string[][] = [];

  let currentIndex = 1;
  for (let i = 0; i < numStudents; i++) {
    const numLanguages = parseInt(lines[currentIndex]);
    const languages = lines.slice(currentIndex + 1, currentIndex + 1 + numLanguages);
    arrays.push(languages.sort()); // Сортировка языков в каждом массиве
    currentIndex += numLanguages + 1;
  }

  return arrays;
};

// Функция для нахождения общих элементов во всех массивах
const findCommonElements = (arrays: string[][]): string[] => {
  if (arrays.length === 0) {
    return [];
  }

  const commonElements = new Set(arrays[0]);

  for (let i = 1; i < arrays.length; i++) {
    const currentArray = new Set(arrays[i]);
    for (const element of commonElements) {
      if (!currentArray.has(element)) {
        commonElements.delete(element);
      }
    }
  }

  return Array.from(commonElements);
};

// Функция для нахождения массива с максимальным количеством элементов
const findMaxArray = (arrays: string[][]): string[] => {
  let maxArray: string[] = [];

  for (const array of arrays) {
    if (array.length > maxArray.length) {
      maxArray = array;
    }
  }

  return maxArray;
};

// Функция для вывода результатов
const displayResults = (commonElements: string[], maxArray: string[]): string => {
  let output = "";
  output += commonElements.length + "\n";
  output += commonElements.join("\n") + "\n";
  output += maxArray.length + "\n";
  output += maxArray.join("\n");
  return output;
};

// Функция для обработки ввода и вывода результатов
const handleLanguages = () => {
  const inputElement = document.getElementById("input") as HTMLTextAreaElement;
  const outputElement = document.getElementById("output") as HTMLTextAreaElement;
  outputElement.style.display = "none";

  const input = inputElement.value.trim();
  const arrays = parseInput(input);
  const commonElements = findCommonElements(arrays);
  const maxArray = findMaxArray(arrays);
  const output = displayResults(commonElements, maxArray);

  outputElement.innerText = output;
  outputElement.style.display = "block";
};