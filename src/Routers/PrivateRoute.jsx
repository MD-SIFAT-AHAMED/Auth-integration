import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const{user,loading}=use(AuthContext);
    const location = useLocation();

    if(loading)
    {
        return <p className=" text-center loading loading-ring loading-xl"></p>
    }

    if(!user)
    {
        return <Navigate to={'/login'} state={location?.pathname} />
    }
    return children;

};

export default PrivateRoute;