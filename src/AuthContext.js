import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [userRole, setUserRole] = useState(() => {
        const storedUserRole = localStorage.getItem('userRole');
        return storedUserRole || null;
    });

    const login = (role) => {
        setUserRole(role);
        localStorage.setItem('userRole', role);
    };

    const logout = () => {
        setUserRole(null);
        localStorage.removeItem('userRole');
    };

    const authContextValues = {
        userRole,
        login,
        logout,
    };

    useEffect(() => {
        // Ensure userRole is updated when localStorage changes
        const storedUserRole = localStorage.getItem('userRole');
        if (storedUserRole !== userRole) {
            setUserRole(storedUserRole);
        }
    }, [userRole]);

    return (
        <AuthContext.Provider value={authContextValues}>
            {children}
        </AuthContext.Provider>
    );
};
