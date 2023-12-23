import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Home/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";


const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <h2>404 Not Found Error!!</h2>, 
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/sign-up",
                element: <SignUp />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute> <Dashboard /></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <div>Dashboard Overview content goes here!</div>
            }
        ]
    }
])

export default MainRoutes;