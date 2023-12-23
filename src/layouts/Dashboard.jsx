import { NavLink, Outlet } from "react-router-dom";
import DashTop from "../pages/Dashboard/DashTop/DashTop";

const Dashboard = () => {
    return (
        <>
        {/* Top */}
        <div className="bg-gray-400 px-5">
            <DashTop />
        </div>
           <section>
                <div className="grid grid-cols-12 gap-8">
                    {/* Sidebar */}
                    <div className="col-span-2 bg-lime-100 min-h-screen pt-4">
                        <ul className="pl-3 space-y-4">
                            <li><NavLink>Profile</NavLink></li>
                            <li><NavLink>New Task</NavLink></li>
                            <li><NavLink>Activities</NavLink></li>
                        </ul>
                    </div>
                    {/* Main Area */}
                    <div className="col-span-10 bg-slate-500">
                        <Outlet />
                    </div>
                </div>
            </section> 
        </>
    );
};

export default Dashboard;