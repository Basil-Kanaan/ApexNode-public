import React, { useContext } from 'react';
import {useAuth} from '../../AuthContext';

const ClientDashboard = () => {
    const { userRole } = useContext(useAuth);

    return (
        <div>
            {userRole === 'client' //&& ()

            }
        </div>
    );
};

export default ClientDashboard;
