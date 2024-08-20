import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';


const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-gray-200 flex flex-col items-center justify-center min-h-screen">
            <nav className="bg-white w-full p-4 shadow-md flex justify-between items-center fixed top-0 left-0 z-10">
                <h1 className="text-2xl md:text-3xl mb-2">
                    {isAuthenticated ? user.nickname : 'React Auth0'}
                </h1>
                {isAuthenticated ? (
                    <LogoutButton />
                ) : (
                    <LoginButton />
                )}
            </nav>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center mt-10 w-full max-w-lg">
                {isAuthenticated ? (
                    <>
                        <img
                            src={user.picture}
                            alt={`${user.name}'s profile`}
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h1 className="text-2xl md:text-3xl mb-2">Hello, {user.name}</h1>
                        <p className="text-gray-600 mb-4">{user.email}</p>
                        <p className="text-gray-600 mb-4">
                            Last Login: {new Date(user.updated_at).toLocaleString()}
                        </p>
                        <p className="text-gray-600 mb-4">
                            Email Verified: {user.email_verified ? 'Yes' : 'No'}
                        </p>
                        {user.given_name && (
                            <p className="text-gray-600 mb-4">First Name: {user.given_name}</p>
                        )}
                        {user.family_name && (
                            <p className="text-gray-600 mb-4">Last Name: {user.family_name}</p>
                        )}
                        {user.name && (
                            <p className="text-gray-600 mb-4">Full Name: {user.name}</p>
                        )}
                        {user.gender && (
                            <p className="text-gray-600 mb-4">Gender: {user.gender}</p>
                        )}
                        {user.birthdate && (
                            <p className="text-gray-600 mb-4">Birthdate: {user.birthdate}</p>
                        )}
                        {user.phone_number && (
                            <>
                                <p className="text-gray-600 mb-4">
                                    Phone Verified: {user.phone_number_verified ? 'Yes' : 'No'}
                                </p>
                                <p className="text-gray-600 mb-4">Phone Number: {user.phone_number}</p>
                            </>
                        )}
                        {user.zoneinfo && (
                            <p className="text-gray-600 mb-4">Time Zone: {user.zoneinfo}</p>
                        )}
                    </>
                ) : (
                    <p className="text-lg mb-4">Login to React Auth0 App</p>
                )}
            </div>
        </div>
    );
};

export default Profile;
