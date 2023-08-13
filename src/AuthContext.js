import React, { createContext, useState, useContext } from 'react';

// Create a context for managing user authentication and role
const AuthContext = createContext();

// Custom hook to access the AuthContext
const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component to wrap your application and provide authentication context
const AuthProvider = ({ children }) => {
    const [userRole, setUserRole] = useState(null); // Set the initial user role to null or a default role

    // Update the user role when the user logs in
    const login = (role) => {
        setUserRole(role);
    };

    // Log the user out
    const logout = () => {
        setUserRole(null);
    };

    // Provide the context values to children components
    const authContextValues = {
        userRole,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={authContextValues}>
            {children}
        </AuthContext.Provider>
    );
};

export {
    AuthProvider,
    useAuth
};