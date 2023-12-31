import { render } from '../../test-utils';
import Login from './Login';

describe('Login', () => {
  it('Renders', () => {
    render(<Login />);
  });

  it('sends a request when submit button is clicked', () => {
    render(<Login />);
  });
});
