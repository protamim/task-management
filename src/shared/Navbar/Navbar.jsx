import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import placeholderImg from "../../assets/user-placeholder.webp";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Logged Out Successfully!"))
      .catch(() => console.log("An error occured with Log Out"));
  };
  return (
    <>
      <nav className="bg-slate-300">
        <div className="container mx-auto px-5">
          <div className="flex gap-5 justify-between items-center">
            <div className="hidden md:block">
              <a>ReactTask</a>
            </div>
            {/* Drawer */}
            <div className="drawer md:hidden">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="">
                  <FaBarsStaggered />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="flex flex-col gap-5 p-4 w-64 min-h-full bg-base-200">
                  {/* Sidebar content here */}
                  <li>
                    <NavLink to={"#"}>Link 1</NavLink>
                  </li>
                  <li>
                    <NavLink to={"#"}>Link 2</NavLink>
                  </li>
                  <li>
                    <NavLink to={"#"}>Link 3</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            {/* Desktop Nav Links */}
            <div className="hidden md:block">
              <ul className="flex gap-7">
                <li>
                  <NavLink to={"#"}>Link 1</NavLink>
                </li>
                <li>
                  <NavLink to={"#"}>Link 2</NavLink>
                </li>
                <li>
                  <NavLink to={"#"}>Link 3</NavLink>
                </li>
              </ul>
            </div>
            {/* User Area */}
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
