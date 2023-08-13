import React, { useContext } from 'react';
import { useAuth } from '../../AuthContext';

const AdminDashboard = () => {
    const { userRole } = useContext(useAuth);

    return (
        <div>
            {userRole === 'admin' //&& ()

            }
        </div>
    );
};

export default AdminDashboard;
