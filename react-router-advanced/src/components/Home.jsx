import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem('auth', 'true');
        navigate('/profile'); 
    };

    const handleLogout = () => {
        localStorage.removeItem('auth');
        navigate('/');
    };

    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home;
