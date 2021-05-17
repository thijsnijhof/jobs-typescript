import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout, { Props } from "./Layout";

test('renders children', () => {
    render(
        <Layout>
            <div>Renders children</div>
        </Layout>
    );
    const childElement = screen.getByText(/Renders children/i);
    expect(childElement).toBeInTheDocument();
});
