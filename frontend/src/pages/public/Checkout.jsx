export default function Checkout() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              <input type="text" placeholder="Address" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="City" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$299.97</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$10.00</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>$309.97</span>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
