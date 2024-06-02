import { rest } from 'msw';

export const handlers = [
    rest.get('/api/user', (req, res, ctx) => {
        return res(
            ctx.json({
                name: 'Carl Angelo Abian',
                email: 'Carl_Angelo@example.com',
                bio: 'BSCS 4th Year Computer Science',
            })
        );
    }),
    rest.put('/api/user', (req, res, ctx) => {
        const { name, email, bio } = req.body;
        return res(
            ctx.json({
                name,
                email,
                bio,
            })
        );
    }),
    rest.post('/api/profile', (req, res, ctx) => {
        const { name, email, bio } = req.body;
        return res(
            ctx.json({
                name,
                email,
                bio,
            })
        );
    }),
];
