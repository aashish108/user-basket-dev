import React, { createContext, useMemo, useState } from 'react';
import basket from '../functions/getBasket';

export const Context = createContext<{
 basketItems: any[];
 setBasketItems: any;
}>({
 basketItems: basket,
 setBasketItems: () => {},
});

export const Provider = ({ children }: any) => {
 const [basketItems, setBasketItems] = useState(basket);
 const value = useMemo(() => ({ basketItems, setBasketItems }), [basketItems]);

 return <Context.Provider value={value}>{children}</Context.Provider>;
};
