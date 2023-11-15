class FibonacciCalculator {
    calculateFibonacciClassic(number: number): number[] {
      const fibonacciNumbers: number[] = [0, 1];
  
      for (let i = 2; i <= number; i++) {
        const nextNumber = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
        fibonacciNumbers.push(nextNumber);
      }
  
      return fibonacciNumbers;
    }
  
    calculateFibonacciRecursive(number: number): number[] {
      const fibonacciNumbers: number[] = [];
  
      for (let i = 0; i <= number; i++) {
        const fibonacciNumber = this.calculateFibonacciRecursiveHelper(i);
        fibonacciNumbers.push(fibonacciNumber);
      }
  
      return fibonacciNumbers;
    }
  
    private calculateFibonacciRecursiveHelper(number: number): number {
      if (number <= 1) {
        return number;
      }
  
      return this.calculateFibonacciRecursiveHelper(number - 1) + this.calculateFibonacciRecursiveHelper(number - 2);
    }
  }
  
  const handleCalculateFibonacciClassic = () => {
    const numberInput = document.getElementById("number-input") as HTMLInputElement;
    const fibonacciOutput = document.getElementById("fibonacci-output") as HTMLTextAreaElement;
    const timeOutput = document.getElementById("time-output") as HTMLTextAreaElement;
  
    const number = parseInt(numberInput.value);
  
    const fibonacciCalculator = new FibonacciCalculator();
  
    const startTime = performance.now();
    const fibonacciNumbers = fibonacciCalculator.calculateFibonacciClassic(number);
    const endTime = performance.now();
  
    const executionTime = endTime - startTime;
  
    fibonacciOutput.value = fibonacciNumbers.join("\n");
    timeOutput.value = `Время выполнения (классический): ${executionTime.toFixed(10)} мс`;
    console.log(number)
    console.log(executionTime)
  };
  
  const handleCalculateFibonacciRecursive = () => {
    const numberInput = document.getElementById("number-input") as HTMLInputElement;
    const fibonacciOutput = document.getElementById("fibonacci-output") as HTMLTextAreaElement;
    const timeOutput = document.getElementById("time-output") as HTMLTextAreaElement;
  
    const number = parseInt(numberInput.value);
  
    const fibonacciCalculator = new FibonacciCalculator();
  
    const startTime = performance.now();
    const fibonacciNumbers = fibonacciCalculator.calculateFibonacciRecursive(number);
    const endTime = performance.now();
  
    const executionTime = endTime - startTime;
  
    fibonacciOutput.value = fibonacciNumbers.join("\n");
    timeOutput.value = `Время выполнения (рекурсивный): ${executionTime.toFixed(10)} мс`;
    console.log(executionTime)
  };

  