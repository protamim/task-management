import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import placeholderImg from "../../assets/user-placeholder.webp";

const Profile = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
          .then(() => console.log("Logged Out Successfully!"))
          .catch(() => console.log("An error occured with Log Out"));
      };
      
    return (
        <>
             <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt={user?.displayName} src={user?.photoURL || placeholderImg} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={handleLogOut}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
        </>
    );
};

export default Profile;