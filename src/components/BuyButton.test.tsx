import renderer from 'react-test-renderer';
import { cleanup, render, screen } from '@testing-library/react';
import BuyButton from './BuyButton';

afterEach(cleanup);

it('renders correctly', async () => {
 const component = renderer.create(<BuyButton />);
 let tree = component.toJSON();
 expect(tree).toMatchSnapshot();

 render(<BuyButton />);
 const text = await screen.findAllByText(/Buy/);
 expect(text).toBeTruthy();
});
