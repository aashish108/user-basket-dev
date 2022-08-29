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
 font-size: 14px;
`;
const VatContainer = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 font-size: 14px;
 margin-top: 20px;
`;
const TotalContainer = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 font-size: 14px;
 margin-top: 20px;
`;

interface ITotals {
 subtotal: number;
 vat: number;
 total: number;
}
const Totals = () => {
 const [totals, setTotals] = useState<ITotals>({
  subtotal: 0,
  vat: 0,
  total: 0,
 });
 const { basketItems } = useContext(Context);

 interface A {
  quantity: number;
  priceGBP: number;
 }

 useEffect(() => {
  let subtotal: number = 0;
  basketItems.forEach((item: A) => {
   subtotal = Number((subtotal + item.quantity * item.priceGBP).toFixed(2));
  });
  let vat: number = Number(((subtotal / 100) * 20).toFixed(2));
  let total: number = Number((subtotal + vat).toFixed(2));
  setTotals({
   subtotal,
   vat,
   total,
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [basketItems]);
 return (
  <TotalsContainer>
   <SubtotalContainer>
    <div>Subtotal</div>
    <div>{totals.subtotal}</div>
   </SubtotalContainer>
   <VatContainer>
    <div>VAT @ 20%</div>
    <div>{totals.vat}</div>
   </VatContainer>
   <TotalContainer>
    <div>Total</div>
    <div>{totals.total}</div>
   </TotalContainer>
  </TotalsContainer>
 );
};

export default Totals;
