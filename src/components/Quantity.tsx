import styled from '@emotion/styled';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../contexts/Context';

const QuantityContainer = styled.div`
 display: flex;
 flex-direction: column;
`;
const QuantityInput = styled.input`
 display: flex;
 flex-direction: column;
`;

type A = { quantity: number; setBasket: any; productName: string };
type B = { productName: string; priceGBP?: number; quantity: number };

const incrementQuantity = (
 array: any[],
 nameSearch: string,
 newQuantity: any
) => {
 const foundProduct: B[] = array.map((item: A) => {
  if (item.productName === nameSearch) {
   return {
    ...item,
    quantity: newQuantity,
   };
  }

  return item;
 });
 return foundProduct;
};

const Quantity = ({ quantity, setBasket, productName }: A) => {
 const [quantityState, setQuantityState] = useState(quantity);
 const { basketItems, setBasketItems } = useContext(Context);

 const changeHandler = (event: { target: { value: any } }) => {
  setQuantityState(Number(event.target.value));
 };

 useEffect(() => {
  console.log('basketItems', basketItems);
 }, [basketItems]);

 useEffect(() => {
  const newProductQuantity = incrementQuantity(
   basketItems,
   productName,
   quantityState
  );
  setBasketItems(newProductQuantity);
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [quantityState]);

 return (
  <QuantityContainer>
   <QuantityInput
    type="number"
    value={quantityState}
    name={productName}
    onChange={changeHandler}
   />
  </QuantityContainer>
 );
};

export default Quantity;
