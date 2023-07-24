import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../components/Loader';

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
  
    if (loading) {
      return <Loader/>
    }
  
    if (user) {
      return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
  }

export default PrivateRoutes;