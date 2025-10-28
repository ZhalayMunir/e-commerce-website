"use client"

import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { LogOut, User } from "lucide-react"

export default function AdminHeader() {
  const { user, logout } = useContext(AuthContext)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="flex items-center justify-between px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800">Welcome, {user?.name}</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-gray-700">
            <User size={20} />
            <span>{user?.email}</span>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}
