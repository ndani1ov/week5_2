const removeDuplicates = () => {
  const inputElement = document.getElementById("input") as HTMLInputElement;
  const inputArray = inputElement.value.split(",").map(Number);

  const uniqueArray = removeDuplicatesFromArray(inputArray);
  const sortedArray = sortArray(uniqueArray);

  displayOutput(sortedArray);
};

const removeDuplicatesFromArray = (array: number[]): number[] => {
  const set = new Set(array);
  return Array.from(set);
};

const sortArray = (array: number[]): number[] => {
  return array.sort((a, b) => a - b);
};

const displayOutput = (array: number[]) => {
  const outputElement = document.getElementById("output") as HTMLInputElement;
  outputElement.innerHTML = array.join(", ");
};