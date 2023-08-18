import React from 'react';
import {useAuth} from '../../AuthContext';

const DeveloperDashboard = () => {
    const {userRole} = useAuth();

    return (
        <div>
            {userRole === 'developer' //&& ()

            }
        </div>
    );
};

export default DeveloperDashboard;
