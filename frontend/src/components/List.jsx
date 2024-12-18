import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../contexts/UserContext';

const List = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 10; // Items per page
  const { selectUser } = useUser();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:4000/api/users?page=${page}&perPage=${perPage}`);
        setUsers(response.data.result);
        setPagination(response.data.pagination);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="mx-auto h-screen flex flex-col justify-start items-center py-8 w-full">
      {/* Top Section */}
      <div className="w-full flex justify-between items-center mb-8 px-4">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800">User Details</h1>
        {/* Add User Button */}
        <Link to="/addUser">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow">
            Add User
          </button>
        </Link>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div className="mt-20 grid grid-cols-5 gap-6 w-full px-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-start"
            >
              <h2 className="text-xl font-bold text-gray-800">
                {user.first_name} {user.last_name}
              </h2>
              <p className="text-gray-600"><strong>Phone:</strong> {user.phone_no}</p>
              <p className="text-gray-600"><strong>Role:</strong> {user.role}</p>
              <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
              <div className="mt-auto w-full">
                <button
                  onClick={() => selectUser(user)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md w-full text-center"
                >
                  <Link className="text-white font-medium text-decoration: none;"to={`/details/${user.id}`}>View Details</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-auto w-full px-4">
        {/* Previous Button */}
        <button
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
          className={`px-4 py-2 text-white rounded-md ${
            page === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          Previous
        </button>

        {/* Pagination Info */}
        <span className="text-gray-600">
          Page {page} of {pagination.totalPages || 1}
        </span>

        {/* Next Button */}
        <button
          disabled={page === pagination.totalPages}
          onClick={() => handlePageChange(page + 1)}
          className={`px-4 py-2 text-white rounded-md ${
            page === pagination.totalPages ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default List;
