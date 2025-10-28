"use client"

import { Heart, LogOut } from "lucide-react"
import { useUser } from "../../context/UserContext"

export default function Account() {
  const { user, removeFromWishlist } = useUser()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="text-gray-600 text-sm">Name</label>
                <p className="text-lg font-semibold">{user.name}</p>
              </div>
              <div>
                <label className="text-gray-600 text-sm">Email</label>
                <p className="text-lg font-semibold">{user.email}</p>
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition mt-6">
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Wishlist */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Heart size={24} className="text-red-600" />
              My Wishlist
            </h2>

            {user.wishlist.length === 0 ? (
              <p className="text-gray-600">Your wishlist is empty</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {user.wishlist.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4 hover:shadow-lg transition">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-40 object-cover rounded mb-3"
                    />
                    <h3 className="font-semibold mb-2">{item.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-blue-600">${item.price.toFixed(2)}</span>
                      <button onClick={() => removeFromWishlist(item.id)} className="text-red-600 hover:text-red-800">
                        <Heart size={20} fill="currentColor" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
