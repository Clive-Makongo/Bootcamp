import { render, screen } from '@testing-library/react';
import * as userEvent from '@testing-library/user-event';
import App from '../App';

// Test 1: Write a test that checks to see if our `App` component renders without throwing an error.
it('App Component Renders Without Error', () => {
    render(<App />);
});

// Test 2: Write a test that checks if the button within the `App` component renders properly.
it('App Component Renders a Button', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'count is 0' });

    expect(button).toBeDefined();
});

// Test 3: Write a test which checks if the counter starts at 0.
it('Counter Starts At 0', () => {
    render(<App />);
    const count = screen.getByText('count is 0');

    expect(count).toBeDefined();
});

// Test 4: Write a test which checks if the increment button increases the count.
it('Clicking Increment Button Increases Counter Display', async () => {
    render(<App />);

    await userEvent.click(
        screen.getByRole('button', { name: 'count is 0' })
    );

    const count = screen.getByText('1');

    expect(count).toBeDefined();
});
