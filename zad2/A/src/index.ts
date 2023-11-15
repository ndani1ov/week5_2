const convertDictionary = () => {
  const inputElement = document.getElementById("input") as HTMLTextAreaElement;
  const outputElement = document.getElementById("output") as HTMLTextAreaElement;

  const input = inputElement.value.trim().split("\n");
  const latinEnglishDictionary = getLatinEnglishDictionary(input);
  const output = formatOutput(latinEnglishDictionary);
  outputElement.value = output;
}

const getLatinEnglishDictionary = (input: string[]): Map<string, string[]> => {
  const latinEnglishDictionary = new Map<string, string[]>();

  for (let i = 1; i < input.length; i++) {
    const [englishWord, latinTranslations] = input[i].split(" - ");
    const translations = latinTranslations.split(", ");
    
    for (const latinWord of translations) {
      if (!latinEnglishDictionary.has(latinWord)) {
        latinEnglishDictionary.set(latinWord, []);
      }
      latinEnglishDictionary.get(latinWord)!.push(englishWord);
    }
  }

  return latinEnglishDictionary;
}

const formatOutput = (latinEnglishDictionary: Map<string, string[]>): string => {
  let output = `${latinEnglishDictionary.size}\n`;

  for (const [latinWord, englishTranslations] of latinEnglishDictionary) {
    output += `${latinWord} - ${englishTranslations.sort().join(", ")}\n`;
  }

  return output;
}