import React from 'react';
import { render, screen, act } from '@testing-library/react';
import UserProfile from '../components/UserProfile';
import { server } from '../mocks/server';
import { rest } from 'msw';

describe('UserProfile', () => {
    it('fetches and displays user data', async () => {
        await act(async () => {
            render(<UserProfile />);
        });

        expect(await screen.findByText('Carl Angelo Abian')).toBeInTheDocument();
        expect(screen.getByText('Carl_Angelo@example.com')).toBeInTheDocument();
        expect(screen.getByText('BSCS 4th Year Computer Science')).toBeInTheDocument();
    });

    it('displays loading indicator while fetching data', async () => {
        await act(async () => {
            render(<UserProfile />);
        });

        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('handles fetch errors gracefully', async () => {
        server.use(
            rest.get('/api/user', (req, res, ctx) => {
                return res(ctx.status(500));
            })
        );

        await act(async () => {
            render(<UserProfile />);
        });

        expect(await screen.findByText('Failed to load')).toBeInTheDocument();
    });
});
