import styled from '@emotion/styled';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../contexts/Context';

const TotalsContainer = styled.div`
 display: flex;
 flex-direction: column;
`;
const SubtotalContainer = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 font-size: 12px;
`;
const VatContainer = styled.div`
 display: flex;
 flex-direction: column;
 padding: 10px;
`;
const Totals = () => {
 const [totalPrice, setTotalPrice] = useState(0);
 const { basketItems } = useContext(Context);

 useEffect(() => {
  let subTotal: number = 0;
  basketItems.forEach((item) => {
   subTotal = subTotal + item.quantity * item.priceGBP;
  });
  setTotalPrice(subTotal);
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [basketItems]);
 return (
  <TotalsContainer>
   <SubtotalContainer>
    <div>Subtotal</div>
    <div>{totalPrice.toFixed(2)}</div>
   </SubtotalContainer>
   <VatContainer></VatContainer>
  </TotalsContainer>
 );
};

export default Totals;
