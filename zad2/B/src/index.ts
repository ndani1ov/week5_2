interface SaleRecord {
  buyer: string;
  item: string;
  quantity: number;
}

const parseSalesData = (contents: string): SaleRecord[] => {
  const lines = contents.trim().split("\n");

  const salesData: SaleRecord[] = lines.map(line => {
    const [buyer, item, quantity] = line.split(" ");
    return {
      buyer,
      item,
      quantity: parseInt(quantity)
    };
  });

  return salesData;
};

const getBuyers = (salesData: SaleRecord[]): string[] => {
  const buyersSet = new Set<string>();

  salesData.forEach(record => {
    buyersSet.add(record.buyer);
  });

  return Array.from(buyersSet).sort();
};

const getBuyerItems = (salesData: SaleRecord[]): Map<string, Map<string, number>> => {
  const buyerItems = new Map<string, Map<string, number>>();

  salesData.forEach(record => {
    const { buyer, item, quantity } = record;

    if (!buyerItems.has(buyer)) {
      buyerItems.set(buyer, new Map<string, number>());
    }

    const items = buyerItems.get(buyer)!;
    const currentQuantity = items.has(item) ? items.get(item)! : 0;

    items.set(item, currentQuantity + quantity);
  });

  return buyerItems;
};

const generateResultText = (buyers: string[], buyerItems: Map<string, Map<string, number>>): string => {
  let result = "";

  buyers.forEach(buyer => {
    const items = buyerItems.get(buyer)!;

    result += `${buyer}:\n`;
    Array.from(items).sort().forEach(([item, quantity]) => {
      result += `${item} ${quantity}\n`;
    });
    result += "\n";
  });

  return result;
};

const handleProcessSalesData = () => {
  const inputTextarea = document.getElementById("input-textarea") as HTMLTextAreaElement;
  const outputTextarea = document.getElementById("output-textarea") as HTMLTextAreaElement;

  const salesData = parseSalesData(inputTextarea.value);
  const buyers = getBuyers(salesData);
  const buyerItems = getBuyerItems(salesData);

  const result = generateResultText(buyers, buyerItems);
  outputTextarea.value = result;
};