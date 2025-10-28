"use client"

import { Upload } from "lucide-react"
import { useState } from "react"

export default function ImageUploader({ onUpload }) {
  const [preview, setPreview] = useState(null)

  const handleChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
        onUpload(file)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
      {preview ? (
        <div>
          <img
            src={preview || "/placeholder.svg"}
            alt="Preview"
            className="w-32 h-32 object-cover mx-auto rounded-lg mb-4"
          />
          <label className="cursor-pointer text-blue-500 hover:text-blue-700">
            Change Image
            <input type="file" onChange={handleChange} className="hidden" accept="image/*" />
          </label>
        </div>
      ) : (
        <label className="cursor-pointer">
          <Upload className="mx-auto mb-2 text-gray-400" size={32} />
          <p className="text-gray-600">Click to upload image</p>
          <input type="file" onChange={handleChange} className="hidden" accept="image/*" />
        </label>
      )}
    </div>
  )
}
