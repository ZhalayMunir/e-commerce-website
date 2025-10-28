import { Routes, Route } from "react-router-dom"
import PublicLayout from "../components/layout/PublicLayout"
import Home from "../pages/public/Home"
import ProductList from "../pages/public/ProductList"
import ProductDetail from "../pages/public/ProductDetail"
import Checkout from "../pages/public/Checkout"
import Cart from "../pages/public/Cart"
import Account from "../pages/public/Account"

export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
      </Route>
    </Routes>
  )
}
