import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
    return localStorage.getItem('auth') === 'true';
};

function ProtectedRoute({ children }) {
    if (!isAuthenticated()) {
        return <Navigate to="/" replace />;
    }
    return children;
}

export default ProtectedRoute;