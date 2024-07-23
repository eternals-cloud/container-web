import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    const session = sessionStorage.getItem('session') || sessionStorage.getItem('accessToken')
    return (
        session ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes