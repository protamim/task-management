import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(user){
        return children;
    }

    return <Navigate to={'/login'} state={location?.pathname} />
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}
export default PrivateRoute;