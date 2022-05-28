import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePageHeader from './HomePageHeader';

describe('<HomePageHeader />', () => {
  test('it should mount', () => {
    render(<HomePageHeader />);
    
    const homePageHeader = screen.getByTestId('HomePageHeader');

    expect(homePageHeader).toBeInTheDocument();
  });
});