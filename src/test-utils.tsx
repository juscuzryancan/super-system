import * as React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

export function render(ui: any, options?: any) {
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

function Wrapper({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>;
    </Provider>
  );
}
