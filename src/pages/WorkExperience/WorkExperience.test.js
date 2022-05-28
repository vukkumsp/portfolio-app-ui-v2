import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WorkExperience from './WorkExperience';

describe('<WorkExperience />', () => {
  test('it should mount', () => {
    render(<WorkExperience />);
    
    const workExperience = screen.getByTestId('WorkExperience');

    expect(workExperience).toBeInTheDocument();
  });
});