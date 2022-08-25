interface BasketDef {
  productName: string;
  priceGBP: number;
  quantity: number;
};

const basket: BasketDef[] = [
  { 
    productName: 'Apple',
    priceGBP: 0.52,
    quantity: 1,
  },
  { 
    productName: 'Banana',
    priceGBP: 0.67,
    quantity: 1,
  },
];

export default basket;