import { useContext } from 'react';
import { Context } from '../contexts/Context';
import Product from './Product';
import styled from '@emotion/styled';

const Header = styled.div`
 font-weight: bold;
`;
const Headers = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
`;
const BasketItems = () => {
 const { basketItems } = useContext(Context);

 return (
  <>
   <Headers>
    <Header>Product</Header>
    <Header>Price</Header>
    <Header>Quantity</Header>
    <Header>Cost</Header>
    <Header>Options</Header>
   </Headers>
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
