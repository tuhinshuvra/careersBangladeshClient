import React, { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider';

const AdminRoutes = ({ children, loading }) => {
    const { user } = useContext(AuthContext);
    
    return (
        <div>
            <h2>This is Admin Route</h2>
        </div>
    );
};

export default AdminRoutes;