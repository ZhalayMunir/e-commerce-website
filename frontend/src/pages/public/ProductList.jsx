"use client"

import { useState, useEffect } from "react"
import { Search, Heart } from "lucide-react"
import { useCart } from "../../context/CartContext"
import { useUser } from "../../context/UserContext"

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const { addToCart } = useCart()
  const { addToWishlist } = useUser()

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const mockProducts = [
        {
          id: 1,
          name: "Product 1",
          price: 99.99,
          description: "High-quality product",
          image: "/abstract-geometric-product.png",
        },
        {
          id: 2,
          name: "Product 2",
          price: 149.99,
          description: "Premium item",
          image: "/abstract-product-display.png",
        },
        { id: 3, name: "Product 3", price: 199.99, description: "Luxury collection", image: "/wishlist1.jpg" },
        { id: 4, name: "Product 4", price: 79.99, description: "Best seller", image: "/wishlist2.jpg" },
        {
          id: 5,
          name: "Product 5",
          price: 129.99,
          description: "New arrival",
          image: "/abstract-geometric-product.png",
        },
        {
          id: 6,
          name: "Product 6",
          price: 179.99,
          description: "Exclusive item",
          image: "/abstract-product-display.png",
        },
      ]
      setProducts(mockProducts)
    } catch (error) {
      console.error("Error fetching products:", error)
    } finally {
      setLoading(false)
    }
  }

  const filteredProducts = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Products</h1>

      <div className="mb-8 flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition text-sm"
                    >
                      Add
                    </button>
                    <button onClick={() => addToWishlist(product)} className="text-red-600 hover:text-red-800 p-2">
                      <Heart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
