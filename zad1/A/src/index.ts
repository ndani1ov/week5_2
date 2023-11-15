const calculatePermutations = () => {
  const inputElement = document.getElementById("input") as HTMLInputElement;
  const inputValues = inputElement.value.split(",").map(Number);
  const permutations = perms(inputValues);

  displayResult(permutations);
};

const perms = (nums: number[]): number[][] => {
  if (nums.length === 0) {
    return [[]];
  }

  const result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
    const remainingPermutations = perms(remainingNums);

    for (let j = 0; j < remainingPermutations.length; j++) {
      result.push([currentNum].concat(remainingPermutations[j]));
    }
  }

  return result;
};

const displayResult = (permutations: number[][]) => {
  const outputElement = document.getElementById("output") as HTMLInputElement;
  outputElement.innerHTML = "<h3>Результат:</h3>";

  for (let i = 0; i < permutations.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = permutations[i].join(", ");
    outputElement.appendChild(div);
  }
};