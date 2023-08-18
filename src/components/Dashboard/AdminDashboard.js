import React from 'react';
import {useAuth} from '../../AuthContext';

const AdminDashboard = () => {
    const {userRole} = useAuth();

    return (
        <div>
            {userRole === 'admin' //&& ()

            }
        </div>
    );
};

export default AdminDashboard;
