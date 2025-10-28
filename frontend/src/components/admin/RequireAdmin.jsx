import { Navigate, Outlet } from "react-router-dom"
import { useAdminAuth } from "../../hooks/useAdminAuth"

export default function RequireAdmin() {
  const { isAdmin, loading } = useAdminAuth()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
