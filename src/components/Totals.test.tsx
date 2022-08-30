import { render, screen } from '@testing-library/react';
import React from 'react';
import Totals from './Totals';

it('renders', async () => {
 render(<Totals />);
 const subTotalsText = await screen.findAllByText(/Subtotal/);
 expect(subTotalsText).toBeTruthy();

 const vatText = await screen.findAllByText(/VAT @ 20%/);
 expect(vatText).toBeTruthy();

 const totalText = await screen.findAllByText(/Total/);
 expect(totalText).toBeTruthy();
});
