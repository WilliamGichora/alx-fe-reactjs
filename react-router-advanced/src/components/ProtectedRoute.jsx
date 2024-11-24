import React from 'react';
import { Navigate } from 'react-router-dom';

const useAuth = () => {
    return localStorage.getItem('auth') === 'true';
};

function ProtectedRoute({ children }) {
    if (!useAuth()) {
        return <Navigate to="/" replace />;
    }
    return children;
}

export default ProtectedRoute;
