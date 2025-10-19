 

      import React, { useEffect, useState } from 'react';
import { FiSearch, FiBell, FiShoppingCart, FiUser } from 'react-icons/fi';
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';
import { toast } from 'react-toastify';

const Nav = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetch currently logged-in user
  const fetchUser = async () => {
    try {
      const res = await axios.get('http://localhost:7000/auth/users');
      // You might want to adjust logic if multiple users come
      const activeUser = res.data.users.find(u => u.isActive === true);
      setUser(activeUser);
    } catch (error) {
      console.error('Error fetching user:', error.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:7000/auth/logout', {
        email: user?.email,
      });
      toast.success('Logged out successfully');
      navigate('/');
    } catch (err) {
      toast.error('Logout failed');
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center px-10 py-5 bg-white text-black shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
  <img
    src="https://static.vecteezy.com/system/resources/previews/050/524/094/non_2x/home-furniture-logo-design-free-png.png"
    alt="Logo"
    className="w-10 h-10 "
  />
  <span className="text-2xl font-bold text-blue-600">FurniVerse</span>
</div>

        {/* Navigation Links */}
        <div className="flex gap-8 text-lg font-medium">
       <Link
                   to="/dashboard"
                   className="hover:text-blue-500"
                 >
                  home
                 </Link>
        
        <Link
                   to="/dashboard/addProduct"
                   className="hover:text-blue-500"
                 >
                  Add Product
                 </Link>
         <Link
                   to="/dashboard/allProduct"
                   className="hover:text-blue-500"
                 >
                  All Product
                 </Link>

       
  <Link
                   to="/dashboard/allUsers"
                   className="hover:text-blue-500"
                 >
                  All Users
                 </Link>


        
        
      </div>

        {/* Action Icons */}
        <div className="flex items-center gap-6 text-xl relative">
          <FiSearch className="cursor-pointer hover:text-blue-500" />
          <FiBell className="cursor-pointer hover:text-blue-500" />
          <FiShoppingCart className="cursor-pointer hover:text-blue-500" />
          <FiUser
            className="cursor-pointer hover:text-blue-500"
            onClick={() => setShowPopup(!showPopup)}
          />

          {/* User Info Popup */}
          {showPopup && user && (
            <div className="absolute right-0 top-14 bg-white border rounded shadow-md w-64 p-4 z-50">
              <div className="flex flex-col items-center text-center">
                <img
                  src={user.url || 'https://via.placeholder.com/100'}
                  alt="User"
                  className="w-16 h-16 rounded-full object-cover mb-2"
                />
                <p className="font-semibold text-lg">{user.firstName} {user.lastName}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-1 rounded"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
