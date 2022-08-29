import styled from '@emotion/styled';
import { useContext, useEffect, useState } from 'react';
import Quantity from './Quantity';
import { Context } from '../contexts/Context';
import DeleteButton from './DeleteButton';

const ItemContainer = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
`;
const P = styled.p`
 font-size: 14px;
`;

interface ProductDefinition {
 name: string;
 priceGBP: number;
 quantity: number;
}

const Product = ({ name, priceGBP, quantity }: ProductDefinition) => {
 const [totalUnitPrice, setTotalUnitPrice] = useState(quantity);
 const { basketItems } = useContext(Context);
 useEffect(() => {
  setTotalUnitPrice(quantity * priceGBP);
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [basketItems]);
 return (
  <ItemContainer>
   <P>{name}</P>
   <P>{priceGBP}</P>
   <P>
    <Quantity quantity={quantity} productName={name} />
   </P>
   <P>{totalUnitPrice.toFixed(2)}</P>
   <P>
    <DeleteButton name={name} />
   </P>
  </ItemContainer>
 );
};

export default Product;
