"use client"

import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export function useAdminAuth() {
  const { user, loading } = useContext(AuthContext)

  const isAdmin = user?.role === "admin"

  return { isAdmin, user, loading }
}
