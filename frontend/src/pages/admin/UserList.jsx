"use client"

import { useState, useEffect } from "react"
import DataTable from "../../components/admin/DataTable"
import api from "../../services/api"

export default function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await api.get("/users")
      setUsers(response.data)
    } catch (error) {
      console.error("Error fetching users:", error)
    } finally {
      setLoading(false)
    }
  }

  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Users</h1>
      {loading ? <div>Loading...</div> : <DataTable columns={columns} data={users} />}
    </div>
  )
}
