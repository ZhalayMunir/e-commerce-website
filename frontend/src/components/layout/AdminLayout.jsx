import { Outlet } from "react-router-dom"
import AdminSidebar from "../admin/AdminSidebar"
import AdminHeader from "../admin/AdminHeader"

export default function AdminLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
