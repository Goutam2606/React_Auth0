import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const LogoutButton = () => {
    const { logout, user } = useAuth0();

    console.log('Current User:', user);

    return (
        <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
            Log Out
        </button>
    );
};

export default LogoutButton;
