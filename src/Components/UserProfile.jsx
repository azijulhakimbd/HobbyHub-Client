import { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const UserProfile = () => {
  const { user } = use(AuthContext);

  return (
    <div className="relative group mr-3 flex items-center sm:space-x-2">
      <div className="relative flex-shrink-0">
        {/* Online status */}
        <span className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 border-2 border-white rounded-full z-10"></span>

        {/* Profile Image */}
        <img
          src={user?.photoURL || 'https://i.postimg.cc/WbcwsVP1/man-wearing-vr-glasses-with-gradient-background-23-2148864957.jpg'}
          alt="Profile"
          className="lg:w-10 lg:h-10 w-10 h-8 border rounded-full object-cover"
        />
      </div>

      {/* Tooltip (visible on hover) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-14 sm:top-16 bg-white 
                text-sm text-gray-800 px-3 py-1 rounded shadow-md opacity-0 
                group-hover:opacity-100 transition-opacity duration-300 z-50 whitespace-nowrap"
      >
        {user?.displayName || "User"}
      </div>
    </div>
  );
};

export default UserProfile;
