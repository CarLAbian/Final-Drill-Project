import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import ProfileForm from '../components/ProfileForm';

describe('ProfileForm', () => {
    it('renders form fields correctly', async () => {
        await act(async () => {
            render(<ProfileForm />);
        });

        expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/bio/i)).toBeInTheDocument();
    });

    it('validates form fields and shows errors', async () => {
        await act(async () => {
            render(<ProfileForm />);
        });

        await act(async () => {
            fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
        });

        expect(await screen.findAllByText(/required/i)).toHaveLength(3);
    });

    it('submits form with valid data', async () => {
        await act(async () => {
            render(<ProfileForm />);
        });

        await act(async () => {
            fireEvent.change(screen.getByPlaceholderText(/name/i), { target: { value: 'Jane Doe' } });
            fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'jane.doe@example.com' } });
            fireEvent.change(screen.getByPlaceholderText(/bio/i), { target: { value: 'Frontend Developer' } });
        });

        await act(async () => {
            fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
        });

        expect(await screen.findByDisplayValue('Jane Doe')).toBeInTheDocument();
        expect(await screen.findByDisplayValue('jane.doe@example.com')).toBeInTheDocument();
        expect(await screen.findByDisplayValue('Frontend Developer')).toBeInTheDocument();
    });
});
