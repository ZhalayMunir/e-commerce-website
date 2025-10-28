import { Routes, Route, Navigate } from "react-router-dom"
import AdminLayout from "../components/layout/AdminLayout"
import RequireAdmin from "../components/admin/RequireAdmin"
import Dashboard from "../pages/admin/Dashboard"
import ProductList from "../pages/admin/ProductList"
import ProductForm from "../pages/admin/ProductForm"
import OrderList from "../pages/admin/OrderList"
import OrderDetail from "../pages/admin/OrderDetail"
import UserList from "../pages/admin/UserList"
import DiscountList from "../pages/admin/DiscountList"
import ChatbotTraining from "../pages/admin/ChatbotTraining"
import Settings from "../pages/admin/Settings"

export default function AdminRoutes() {
  return (
    <Routes>
      <Route element={<RequireAdmin />}>
        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="/products/:id/edit" element={<ProductForm />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/orders/:id" element={<OrderDetail />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/discounts" element={<DiscountList />} />
          <Route path="/chatbot" element={<ChatbotTraining />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  )
}
