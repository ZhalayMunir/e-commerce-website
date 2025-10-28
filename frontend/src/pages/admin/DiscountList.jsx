"use client"

import { useState, useEffect } from "react"
import { Plus } from "lucide-react"
import DataTable from "../../components/admin/DataTable"
import api from "../../services/api"

export default function DiscountList() {
  const [discounts, setDiscounts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDiscounts()
  }, [])

  const fetchDiscounts = async () => {
    try {
      setLoading(true)
      const response = await api.get("/discounts")
      setDiscounts(response.data)
    } catch (error) {
      console.error("Error fetching discounts:", error)
    } finally {
      setLoading(false)
    }
  }

  const columns = [
    { key: "code", label: "Code" },
    { key: "discount", label: "Discount %" },
    { key: "expiry", label: "Expiry Date" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Discounts</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          <Plus size={20} />
          Add Discount
        </button>
      </div>
      {loading ? <div>Loading...</div> : <DataTable columns={columns} data={discounts} />}
    </div>
  )
}
