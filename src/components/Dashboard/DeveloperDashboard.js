import React, { useContext } from 'react';
import {useAuth} from '../../AuthContext';

const DeveloperDashboard = () => {
    const { userRole } = useContext(useAuth);

    return (
        <div>
            {userRole === 'developer' //&& ()

            }
        </div>
    );
};

export default DeveloperDashboard;
