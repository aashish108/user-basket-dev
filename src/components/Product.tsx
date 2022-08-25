import styled from '@emotion/styled';
import Quantity from './Quantity';

const ItemContainer = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
`;
const P = styled.p`
 font-size: 12px;
`;

interface ProductDefinition {
 name: string;
 priceGBP: number;
 quantity: number;
 setBasket: any;
}

const Product = ({
 name,
 priceGBP,
 quantity,
 setBasket,
}: ProductDefinition) => {
 return (
  <ItemContainer>
   <P>{name}</P>
   <P>{priceGBP}</P>
   <P>
    <Quantity quantity={quantity} setBasket={setBasket} productName={name} />
   </P>
   <P>{name}</P>
  </ItemContainer>
 );
};

export default Product;
