import styled from '@emotion/styled';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../contexts/Context';

const QuantityContainer = styled.div`
 display: flex;
 flex-direction: row;
`;
const QuantityInput = styled.input`
 display: flex;
 flex-direction: column;
 width: 25px;
 /* Chrome, Safari, Edge, Opera */
 &::-webkit-outer-spin-button,
 &::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
 }

 /* Firefox */
 &[type='number'] {
  -moz-appearance: textfield;
 }
`;
const QuantityButton = styled.button`
 display: flex;
 flex-direction: column;
 margin-left: 10px;
`;

type A = { quantity: number; productName: string };
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

const Quantity = ({ quantity, productName }: A) => {
 const [quantityState, setQuantityState] = useState(quantity);
 const { basketItems, setBasketItems } = useContext(Context);

 const changeHandler = (event: { target: { value: any } }) => {
  let value = Number(event.target.value);
  if (value <= 0) {
   return setQuantityState(0);
  }
  return setQuantityState(Number(event.target.value));
 };

 useEffect(() => {
  const newProductQuantity = incrementQuantity(
   basketItems,
   productName,
   quantityState
  );
  setBasketItems(newProductQuantity);
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [quantityState]);

 function handleQuantityIncrease() {
  return setQuantityState(quantityState + 1);
 }

 const handleQuantityDecrease = () => {
  if (quantityState <= 0) {
   return setQuantityState(0);
  }
  return setQuantityState(quantityState - 1);
 };

 return (
  <QuantityContainer>
   <QuantityInput
    type="number"
    value={quantityState}
    name={productName}
    onChange={changeHandler}
   />
   <QuantityButton onClick={handleQuantityDecrease}>-</QuantityButton>
   <QuantityButton onClick={handleQuantityIncrease}>+</QuantityButton>
  </QuantityContainer>
 );
};

export default Quantity;
