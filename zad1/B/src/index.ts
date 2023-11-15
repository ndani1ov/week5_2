type PriceList = number[];

const calculateMaxProfit = () => {
    const inputElement = document.getElementById("input") as HTMLInputElement;
    const inputValues = inputElement.value.split(",").map(Number);
    const maxProfit = (prices: PriceList): number => {
        let minPrice = Infinity;
        let maxProfit = 0;

        for (const price of prices) {
            if (price < minPrice) {
                minPrice = price;
            } else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
            }
        }

        return maxProfit;
    };

    displayResult(maxProfit(inputValues));
};

const displayResult = (maxProfit: number) => {
    const outputElement = document.getElementById("output") as HTMLInputElement;
    outputElement.innerHTML = "<h3>Результат:</h3>";

    const div = document.createElement("div");
    div.innerHTML = `Максимальная прибыль: ${maxProfit}`;
    outputElement.appendChild(div);
};