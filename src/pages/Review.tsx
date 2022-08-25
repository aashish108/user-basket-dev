import styled from '@emotion/styled';
import { useContext } from 'react';
import Product from '../components/Product';
import { Context, Provider } from '../contexts/Context';

const ReviewContainer = styled.div`
 display: flex;
 flex-direction: column;
 padding: 10px;
`;
const Header = styled.div`
 font-weight: bold;
`;
const Headers = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
`;

const ReviewPage = () => {
 const { basketItems, setBasketItems } = useContext(Context);
 return (
  <Provider>
   <ReviewContainer>
    <Headers>
     <Header>Product</Header>
     <Header>Price</Header>
     <Header>Quantity</Header>
     <Header>Cost</Header>
    </Headers>
    {basketItems.map(
     (item: { quantity: number; productName: string; priceGBP: number }) => (
      <Product
       name={item.productName}
       priceGBP={item.priceGBP}
       quantity={item.quantity}
       setBasket={setBasketItems}
      />
     )
    )}
   </ReviewContainer>
  </Provider>
 );
};

export default ReviewPage;
