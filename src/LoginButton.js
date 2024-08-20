import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const LoginButton = () => {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

    return (
        <div>
            {isAuthenticated ? (
                <>
                    {/* <h1>Hello {user.name}</h1> */}
                    <button
                        onClick={() => logout({ returnTo: window.location.origin })}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Log Out
                    </button>
                </>
            ) : (
                <button
                    onClick={() => loginWithRedirect()}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Log In
                </button>
            )}
        </div>
    );
};

export default LoginButton;
