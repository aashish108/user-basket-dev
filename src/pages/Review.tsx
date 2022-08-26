import styled from '@emotion/styled';
import BasketItems from '../components/BasketItems';
import Totals from '../components/Totals';
import { Provider } from '../contexts/Context';

const Container = styled.div`
 display: flex;
 padding: 10px;
 margin: 0 auto;
 width: 75%;
`;
const ReviewContainer = styled.div`
 display: flex;
 flex-direction: column;
 padding: 10px;
 flex: 1 1 10%;
 justify-content: center;
 align-content: center;
`;
const Title = styled.h1`
 display: flex;
 flex-direction: row;
 justify-content: center;
 padding: 0;
 margin: 0;
`;
const Border = styled.div`
 width: 100%;
 border-bottom: 1px solid lightgrey;
 margin: 20px 0 20px 0;
`;

const ReviewPage = () => {
 return (
  <Provider>
   <Container>
    <ReviewContainer>
     <Title>Review your Order & Complete Checkout</Title>
     <Border />
     <BasketItems />
     <Border />
     <Totals />
    </ReviewContainer>
   </Container>
  </Provider>
 );
};

export default ReviewPage;
