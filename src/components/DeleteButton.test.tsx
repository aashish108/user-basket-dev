import { render, screen } from '@testing-library/react';
import DeleteButton from './DeleteButton';

it('renders', async () => {
 render(<DeleteButton name="Apple" />);
 const text = await screen.findAllByText(/Delete/);
 expect(text).toBeTruthy();
});
