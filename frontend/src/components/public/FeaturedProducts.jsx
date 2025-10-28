"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "TRADEMARK BARREL",
    collection: "ESPLENDIDOS",
    price: "€78.00",
    image: "/images/cigar1.png",
  },
  {
    id: 2,
    name: "TIEMPO",
    collection: "ESPLENDIDOS",
    price: "€58.00",
    image: "/images/cigar2.png",
  },
  {
    id: 3,
    name: "MONTECRISTO",
    collection: "ESPLENDIDOS",
    price: "€136.00",
    image: "/images/cigar3.png",
  },
  {
    id: 4,
    name: "REY DEL MUNDO",
    collection: "ESPLENDIDOS",
    price: "€50.00",
    image: "/images/cigar4.png",
  },
  {
    id: 5,
    name: "OLD ANTIQUARI",
    collection: "ESPLENDIDOS",
    price: "€197.00",
    image: "/images/cigar5.png",
  },
];

export default function FeaturedProducts() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 350;

    if (container) {
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative bg-background py-16 px-4 md:px-10 lg:px-20 overflow-hidden">
      {/* Title */}
      <h2 className="text-xl md:text-2xl tracking-[0.3em] font-semibold uppercase text-foreground text-center mb-10">
        Featured Products
      </h2>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-card text-foreground p-3 rounded-full shadow-md hover:bg-muted transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-card text-foreground p-3 rounded-full shadow-md hover:bg-muted transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-none w-[220px] flex flex-col items-center bg-card text-card-foreground rounded-lg p-4 hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-52 object-contain mb-4 hover:scale-105 transition-transform"
            />
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              {product.collection}
            </p>
            <h3 className="text-sm font-semibold tracking-wide text-foreground mt-1">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{product.price}</p>
            <button className="text-xs uppercase mt-2 text-muted-foreground hover:text-primary transition">
              add to cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
