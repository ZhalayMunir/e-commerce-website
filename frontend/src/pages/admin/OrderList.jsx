"use client"

import { useState, useEffect } from "react"
import DataTable from "../../components/admin/DataTable"
import api from "../../services/api"

export default function OrderList() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      setLoading(true)
      const response = await api.get("/orders")
      setOrders(response.data)
    } catch (error) {
      console.error("Error fetching orders:", error)
    } finally {
      setLoading(false)
    }
  }

  const columns = [
    { key: "id", label: "Order ID" },
    { key: "customer", label: "Customer" },
    { key: "total", label: "Total" },
    { key: "status", label: "Status" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Orders</h1>
      {loading ? <div>Loading...</div> : <DataTable columns={columns} data={orders} />}
    </div>
  )
}
