import { renderWithProviders } from './test-utils';
import App from './App';

describe('App', () => {
  it('Renders', () => {
    renderWithProviders(<App />);
  });
});
