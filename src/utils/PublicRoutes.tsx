import { Navigate, Outlet } from 'react-router-dom'

const PublicRoutes = () => {
    const session = sessionStorage.getItem('session') || sessionStorage.getItem('accessToken')
    return (
        !session ? <Outlet /> : <Navigate to="/dashboard" />
    )
}

export default PublicRoutes