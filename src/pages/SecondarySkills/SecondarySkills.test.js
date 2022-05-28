import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SecondarySkills from './SecondarySkills';

describe('<SecondarySkills />', () => {
  test('it should mount', () => {
    render(<SecondarySkills />);
    
    const secondarySkills = screen.getByTestId('SecondarySkills');

    expect(secondarySkills).toBeInTheDocument();
  });
});