import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { CircularProgress, Box, Typography } from '@mui/material';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const UserProfile: React.FC = () => {
    const { data, error } = useSWR('/api/user', fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <CircularProgress />;

    return (
        <Box>
            <Typography variant="h4">{data.name}</Typography>
            <Typography variant="body1">{data.email}</Typography>
            <Typography variant="body2">{data.bio}</Typography>
        </Box>
    );
};

export default UserProfile;
