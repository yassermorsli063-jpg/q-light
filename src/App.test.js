import { render, screen } from '@testing-library/react';
import App from './App';

test('links the Luster Crystal category to the Luster Crystal page', () => {
  render(<App />);

  const crystalLink = screen.getByRole('link', { name: /shop by luster crystal/i });
  expect(crystalLink).toHaveAttribute('href', '/luster-crystal');
});
