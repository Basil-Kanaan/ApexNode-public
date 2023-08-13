import React from 'react';
import { useAuth } from '../../AuthContext';

const ClientDashboard = () => {
    const { userRole } = useAuth();

    return (
        <div>
            {userRole === 'client' //&& ()

            }
        </div>
    );
};

export default ClientDashboard;
