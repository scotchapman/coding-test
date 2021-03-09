import { render, screen } from '@testing-library/react';
import App from './App';
import getFertilizers from './api/getFertilizers';

jest.mock('./api/orderFertilizers');
jest.mock('./api/getFertilizers')

test('renders products table', async () => {
  const mockList = [{
    id: "0001",
    name: "FERT NAME 0001",
    nutrients: {
      N: 1,
      P: 2,
      k: 3
    },
    quantity: 12
  }]

  getFertilizers.mockReturnValue(mockList)
  render(<App />);

  const tableHeader = screen.getByText(/Product Name/i);
  expect(tableHeader).toBeInTheDocument();

  const productname = await screen.findByText(mockList[0].name)
  expect(productname).toBeInTheDocument();
});
