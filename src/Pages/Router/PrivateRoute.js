import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';

const PrivateRoute = ({ children, loading }) => {
    const { user } = useContext(AuthContext);
    // const location = useLocation();

    if (loading) {
        return <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }
    if (user) {
        return children;
    }

    // return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    return <Navigate to="/login"></Navigate>

};

export default PrivateRoute;