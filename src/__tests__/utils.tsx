import * as React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

export function render(ui: any, options?: any) {
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

function Wrapper({ children }: { children: React.ReactNode }): JSX.Element {
  return <BrowserRouter>{children}</BrowserRouter>;
}
