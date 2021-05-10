import React from 'react';
import { render, screen } from '@testing-library/react';
import Header, { Props } from "./Header";

test('renders children', () => {
    render(
        <Header title="test jobs"/>
    );
    const childElement = screen.getByText(/test jobs/i);
    expect(childElement).toBeInTheDocument();
});
