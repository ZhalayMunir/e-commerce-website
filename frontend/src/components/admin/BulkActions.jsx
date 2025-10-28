"use client"

import { Trash2, Download } from "lucide-react"

export default function BulkActions({ selectedCount, onDelete, onExport }) {
  if (selectedCount === 0) return null

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4 flex items-center justify-between">
      <span className="text-sm font-medium text-blue-900">{selectedCount} items selected</span>
      <div className="flex gap-2">
        <button
          onClick={onExport}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          <Download size={18} />
          Export
        </button>
        <button
          onClick={onDelete}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          <Trash2 size={18} />
          Delete
        </button>
      </div>
    </div>
  )
}
