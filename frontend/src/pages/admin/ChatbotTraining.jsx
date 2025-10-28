"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export default function ChatbotTraining() {
  const [trainingData, setTrainingData] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      // API call to train chatbot
      console.log("Training chatbot with:", trainingData)
    } catch (error) {
      console.error("Error training chatbot:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Chatbot Training</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Training Data</label>
            <textarea
              value={trainingData}
              onChange={(e) => setTrainingData(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="8"
              placeholder="Enter training data for the chatbot..."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            <Send size={20} />
            {loading ? "Training..." : "Train Chatbot"}
          </button>
        </form>
      </div>
    </div>
  )
}
