import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PrimarySkills from './PrimarySkills';

describe('<PrimarySkills />', () => {
  test('it should mount', () => {
    render(<PrimarySkills />);
    
    const primarySkills = screen.getByTestId('PrimarySkills');

    expect(primarySkills).toBeInTheDocument();
  });
});