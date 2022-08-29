import styled from '@emotion/styled';
import { useContext, useState } from 'react';
import { Context } from '../contexts/Context';

const Button = styled.button`
 background-color: red;
 color: white;
 padding: 10px;
 &:hover {
  background-color: darkred;
 }
`;

type A = { name: string };

const DeleteButton = ({ name }: A) => {
 const { basketItems, setBasketItems } = useContext(Context);
 const [currentProductName] = useState(name);
 const deleteProduct = () => {
  const newBasket = basketItems.filter(
   (item) => item.productName !== currentProductName
  );
  setBasketItems(newBasket);
 };
 return <Button onClick={deleteProduct}>Delete</Button>;
};

export default DeleteButton;
