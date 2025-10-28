"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ChevronLeft, ChevronRight, Heart } from "lucide-react"
import { useCart } from "../../context/CartContext"
import { useUser } from "../../context/UserContext"
import FeaturedProducts from "../../components/public/FeaturedProducts";

export default function Home() {
  const { addToCart } = useCart()
  const { addToWishlist } = useUser()

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Product 1",
      price: 99.99,
      image: "/abstract-geometric-product.png",
      description: "High-quality product",
    },
    {
      id: 2,
      name: "Premium Product 2",
      price: 149.99,
      image: "/abstract-product-display.png",
      description: "Luxury item",
    },
    {
      id: 3,
      name: "Premium Product 3",
      price: 199.99,
      image: "/wishlist1.jpg",
      description: "Exclusive collection",
    },
  ]

  // === Hero Slider Logic ===
  const slides = [
    {
      image: "/abstract-geometric-product.png",
      title: "Welcome to Our Store",
      subtitle: "Discover amazing products at great prices",
    },
    {
      image: "/abstract-product-display.png",
      title: "Exclusive Collections",
      subtitle: "Find premium items handpicked for you",
    },
    {
      image: "/wishlist1.jpg",
      title: "Unmatched Quality",
      subtitle: "Experience products built to last",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 flex flex-col items-center justify-center text-center text-white">
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl mb-8 text-blue-100">{slide.subtitle}</p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Shop Now <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        ))}

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
        >
          <ChevronLeft size={28} className="text-white" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
        >
          <ChevronRight size={28} className="text-white" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-white/40"
              } transition`}
            />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Call to Action */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore More?</h2>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            View All Products <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
