import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext'; // Import the custom hook
import './Details.css'; // Import custom styles (optional)

const Details = () => {
  const { user } = useUser(); // Access user data from context

  return (
    <div className="container p-4 flex flex-col gap-8 items-center justify-center">
      <h1 className="text-center mb-4">User Detail</h1>
      {user ? (
        <div className=" flex flex-col p-8 rounded-lg items-center mx-auto shadow-lg" style={{ maxWidth: '500px' }}>
          
            {/* Avatar Section */}
            
              <img
                src="/images/avatar.png" // Display the avatar image
                alt="User Avatar"
                className="rounded-circle img-fluid"
                width={120}
                height={120}
              />
            

            {/* User Info Section */}
            <h4 className="card-title mb-3">{user.first_name} {user.last_name}</h4>
            <p className="card-text">
              <strong>Email:</strong> {user.email}
            </p>
          
        </div>
      ) : (
        <p className="text-center">No user data found. Please select a user.</p>
      )}
      <Link to="/">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow">
            Back
          </button>
        </Link>
    </div>
    
  );
};

export default Details;
