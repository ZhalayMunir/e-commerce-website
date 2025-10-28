import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { CartProvider } from "./context/CartContext"
import { UserProvider } from "./context/UserContext"
import PublicRoutes from "./routes/PublicRoutes"
import AdminRoutes from "./routes/AdminRoutes"

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <UserProvider>
            <Routes>
              <Route path="/*" element={<PublicRoutes />} />
              <Route path="/admin/*" element={<AdminRoutes />} />
            </Routes>
          </UserProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  )
}
