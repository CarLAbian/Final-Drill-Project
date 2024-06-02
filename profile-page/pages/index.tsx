import React from 'react';
import ProfileForm from '../components/ProfileForm';
import UserProfile from '../components/UserProfile';
import { Container } from '@mui/material';

const Home: React.FC = () => {
    return (
        <Container>
            <UserProfile />
            <ProfileForm />
        </Container>
    );
};

export default Home;
