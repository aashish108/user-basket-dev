import { useContext } from 'react';
import { Context } from '../contexts/Context';
import Product from './Product';

const BasketItems = () => {
 const { basketItems } = useContext(Context);

 return (
  <>
   {basketItems.map(
    (
     item: { quantity: number; productName: string; priceGBP: number },
     index
    ) => (
     <Product
      key={index}
      name={item.productName}
      priceGBP={Number(item.priceGBP.toFixed(2))}
      quantity={item.quantity}
     />
    )
   )}
  </>
 );
};

export default BasketItems;
