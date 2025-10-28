"use client"

import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ProductFormFields from "../../components/admin/ProductFormFields"
import ImageUploader from "../../components/admin/ImageUploader"
import api from "../../services/api"

export default function ProductForm() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
  })
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const data = new FormData()
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key])
      })
      if (image) {
        data.append("image", image)
      }

      if (id) {
        await api.put(`/products/${id}`, data)
      } else {
        await api.post("/products", data)
      }
      navigate("/admin/products")
    } catch (error) {
      console.error("Error saving product:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">{id ? "Edit" : "Add"} Product</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        <ProductFormFields formData={formData} onChange={handleChange} />
        <ImageUploader onUpload={setImage} />
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Product"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin/products")}
            className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
