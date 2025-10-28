"use client"

import { useParams } from "react-router-dom"

export default function OrderDetail() {
  const { id } = useParams()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Order #{id}</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Customer Information</h3>
            <p className="text-gray-600">John Doe</p>
            <p className="text-gray-600">john@example.com</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Order Status</h3>
            <p className="text-green-600 font-semibold">Shipped</p>
          </div>
        </div>
      </div>
    </div>
  )
}
