"use client"

import { Link } from "react-router-dom"
import { ShoppingCart, Menu, X, User } from "lucide-react"
import { useState } from "react"
import { useCart } from "../../context/CartContext"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { cartItems } = useCart()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Store
          </Link>

          <nav className="hidden md:flex gap-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-gray-900">
              Products
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative text-gray-700 hover:text-gray-900">
              <ShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <Link to="/account" className="text-gray-700 hover:text-gray-900">
              <User size={24} />
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-gray-900 py-2">
              Home
            </Link>
            <Link to="/products" className="block text-gray-700 hover:text-gray-900 py-2">
              Products
            </Link>
            <Link to="/cart" className="block text-gray-700 hover:text-gray-900 py-2">
              Cart
            </Link>
            <Link to="/account" className="block text-gray-700 hover:text-gray-900 py-2">
              Account
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
