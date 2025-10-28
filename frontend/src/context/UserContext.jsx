"use client"

import { createContext, useState, useContext } from "react"

const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    wishlist: [
      { id: 4, name: "Wishlist Product 1", price: 199.99, image: "/wishlist1.jpg" },
      { id: 5, name: "Wishlist Product 2", price: 249.99, image: "/wishlist2.jpg" },
    ],
  })

  const addToWishlist = (product) => {
    setUser({
      ...user,
      wishlist: [...user.wishlist, product],
    })
  }

  const removeFromWishlist = (productId) => {
    setUser({
      ...user,
      wishlist: user.wishlist.filter((item) => item.id !== productId),
    })
  }

  return <UserContext.Provider value={{ user, addToWishlist, removeFromWishlist }}>{children}</UserContext.Provider>
}

export function useUser() {
  return useContext(UserContext)
}
