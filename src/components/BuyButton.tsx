import styled from '@emotion/styled';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../contexts/Context';

const ButtonContainer = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: end;
`;
const Button = styled.button`
 background-color: green;
 color: white;
 padding: 10px;
 margin-top: 20px;
 width: 100px;
 &:hover {
  background-color: darkgreen;
 }
`;

// type A = { name: string };

const BuyButton = () => {
 const { basketItems } = useContext(Context);
 const [buyButtonDisabled, setBuyButtonDisabled] = useState(false);

 const buy = () => {
  console.log('Buying!');
 };

 useEffect(() => {
  if (basketItems.length === 0) {
   return setBuyButtonDisabled(true);
  }
  return setBuyButtonDisabled(false);
 }, [basketItems]);

 return (
  <ButtonContainer>
   <Button onClick={buy} disabled={buyButtonDisabled}>
    Buy
   </Button>
  </ButtonContainer>
 );
};

export default BuyButton;
