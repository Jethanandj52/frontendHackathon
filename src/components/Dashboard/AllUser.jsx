import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import axios from 'axios';
import { toast } from 'react-toastify';
import Footer from '../Home/Footer';

const AllUser = () => {
  const [users, setUsers] = useState([]);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:7000/auth/users');
      setUsers(res.data.users || []);
    } catch (error) {
      toast.error('Failed to fetch users');
      console.error(error);
    }
  };

  // Delete user
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/auth/users/${id}`);
      toast.success('User deleted successfully');
      fetchUsers(); // Refresh
    } catch (error) {
      toast.error('Failed to delete user');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Nav />
      <div className="max-w-5xl mx-auto mt-12 px-6 mb-20">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">All Registered Users</h1>

        {users.length === 0 ? (
          <p className="text-center text-gray-500">No users found.</p>
        ) : (
          <div className="overflow-x-auto rounded shadow-lg border border-gray-300">
            <table className="w-full text-left">
              <thead className="bg-blue-100 text-gray-700 font-semibold text-sm">
                <tr>
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Email</th>
                  <th className="p-3 border">Status</th>
                  <th className="p-3 border text-center">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white text-sm">
                {users.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-50 transition">
                    <td className="p-3 border">{user.firstName} {user.lastName}</td>
                    <td className="p-3 border">{user.email}</td>
                    <td className="p-3 border">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {user.isActive ? 'Online' : 'Offline'}
                      </span>
                    </td>
                    <td className="p-3 border text-center">
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Footer/>
    </>
  );
};

export default AllUser;
