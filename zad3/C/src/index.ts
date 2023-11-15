class BracketValidator {
  private openBrackets: Set<string>;
  private bracketsMap: Map<string, string>;

  constructor() {
    this.openBrackets = new Set(["(", "{", "["]);
    this.bracketsMap = new Map([
      [")", "("],
      ["}", "{"],
      ["]", "["]
    ]);
}};
const isValid = (input: string): boolean => {
  const stack: string[] = [];
  const pairs = { '(': ')', '{': '}', '[': ']' };

  let valid = true;
  let currentString = '';
  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
      currentString += char;
    } else if (char === ')' || char === '}' || char === ']') {
      const lastChar = stack.pop();
      currentString += char;

      if (!lastChar || pairs[lastChar] !== char) {
        valid = false;
        break;
      }
    } else if (char === ',') {
      currentString += char;
    }
  }

  if (valid && stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

const processInput = () => {
  const inputElement = document.getElementById("input") as HTMLTextAreaElement;
  const outputElement = document.getElementById("output") as HTMLBodyElement;

  const input = inputElement.value.trim();
  const valid = isValid(input);

  const output = valid ? "валидно" : "не валидно";
  outputElement.innerHTML = output;
};