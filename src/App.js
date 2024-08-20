import './App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="bg-gray-200 flex flex-col items-center justify-center min-h-screen">
      <nav className="bg-white w-full p-4 shadow-md flex justify-between items-center fixed top-0 left-0 z-10">
        <h1 className="text-3xl mb-2">{isAuthenticated ? 'Welcome' : 'React Auth0'}</h1>
        {isAuthenticated && <LogoutButton />}
      </nav>

      <div className="mt-16 w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3">
        {isAuthenticated ? (
          <Profile />
        ) : (
          <div className="flex flex-col items-center">
            <LoginButton />
            <p className="text-lg mt-4">Please log in to access your profile.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
