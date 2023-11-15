const calculateContainerVolume = () => {
  const inputElement = document.getElementById("input") as HTMLInputElement;
  const outputElement = document.getElementById("output") as HTMLDivElement;

  const input = inputElement.value.split(",").map(num => parseInt(num.trim()));
  const maxVolume = getMaxContainerVolume(input);
  outputElement.textContent = maxVolume.toString();
}

const getMaxContainerVolume = (heights: number[]): number => {
  let maxVolume = 0;
  let left = 0;
  let right = heights.length - 1;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(heights[left], heights[right]);
    const volume = width * minHeight;
    maxVolume = Math.max(maxVolume, volume);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxVolume;
}