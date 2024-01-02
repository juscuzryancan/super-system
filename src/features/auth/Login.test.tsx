import { renderWithProviders } from '@/test-utils';
import Login from './Login';
import { http, HttpResponse, delay } from 'msw';
import { setupServer } from 'msw/node';
import { screen } from '@testing-library/react';

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  http.get('/api/user', async () => {
    await delay(150);
    return HttpResponse.json('John Smith');
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('Login', () => {
  it('has a login button', () => {
    renderWithProviders(<Login />);
    expect(screen.getByRole('button', { name: 'Log in' })).not.toBeNull();
  });
});
