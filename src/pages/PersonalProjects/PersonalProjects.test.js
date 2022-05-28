import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PersonalProjects from './PersonalProjects';

describe('<PersonalProjects />', () => {
  test('it should mount', () => {
    render(<PersonalProjects />);
    
    const personalProjects = screen.getByTestId('PersonalProjects');

    expect(personalProjects).toBeInTheDocument();
  });
});