import { Link, useLocation } from "react-router-dom"
import { LayoutDashboard, Package, ShoppingCart, Users, Tag, MessageSquare, Settings } from "lucide-react"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
  { icon: Package, label: "Products", path: "/admin/products" },
  { icon: ShoppingCart, label: "Orders", path: "/admin/orders" },
  { icon: Users, label: "Users", path: "/admin/users" },
  { icon: Tag, label: "Discounts", path: "/admin/discounts" },
  { icon: MessageSquare, label: "Chatbot", path: "/admin/chatbot" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
]

export default function AdminSidebar() {
  const location = useLocation()

  return (
    <aside className="w-64 bg-white shadow-lg">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
      </div>
      <nav className="p-4">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
                isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
