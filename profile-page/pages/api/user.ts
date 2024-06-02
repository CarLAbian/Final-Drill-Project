import type { NextApiRequest, NextApiResponse } from 'next';

let userData = {
    name: 'Carl Angelo Abian',
    email: 'Carl.Angelo@example.com',
    bio: '4th Year BSCS Computer Science',
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json(userData);
    } else if (req.method === 'PUT') {
        const { name, email, bio } = req.body;
        userData = { name, email, bio };
        res.status(200).json(userData);
    } else {
        res.setHeader('Allow', ['GET', 'PUT']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
