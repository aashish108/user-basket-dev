import styled from '@emotion/styled';
import BasketItems from '../components/BasketItems';
import { Provider } from '../contexts/Context';

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
 return (
  <Provider>
   <ReviewContainer>
    <Headers>
     <Header>Product</Header>
     <Header>Price</Header>
     <Header>Quantity</Header>
     <Header>Cost</Header>
    </Headers>
    <BasketItems />
   </ReviewContainer>
  </Provider>
 );
};

export default ReviewPage;
