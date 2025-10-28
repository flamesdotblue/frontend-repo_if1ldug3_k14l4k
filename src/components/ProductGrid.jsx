import { Star, Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    brand: "Nike",
    price: 149.99,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Adidas Ultraboost 22",
    brand: "Adidas",
    price: 179.99,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Puma RS-X3",
    brand: "Puma",
    price: 129.99,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "New Balance 550",
    brand: "New Balance",
    price: 139.99,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1612976023590-4a835d1e3b25?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "ASICS Gel-Kayano 29",
    brand: "ASICS",
    price: 164.99,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Converse Chuck 70",
    brand: "Converse",
    price: 89.99,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1542291021-1e0e037bb177?q=80&w=1600&auto=format&fit=crop",
  },
];

function ProductCard({ product }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      <button
        aria-label="Wishlist"
        className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-zinc-700 shadow-sm hover:bg-white"
      >
        <Heart className="h-5 w-5" />
      </button>
      <div className="aspect-square w-full overflow-hidden bg-zinc-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="space-y-1 p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-zinc-500">{product.brand}</span>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-xs font-semibold text-zinc-700">{product.rating}</span>
          </div>
        </div>
        <h3 className="line-clamp-1 text-sm font-semibold text-zinc-900">{product.name}</h3>
        <div className="flex items-center justify-between pt-1">
          <span className="text-base font-bold">${product.price.toFixed(2)}</span>
          <button className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-zinc-900">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section id="shop" className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Trending now</h2>
          <p className="text-sm text-zinc-600">Hand-picked bestsellers from top brands</p>
        </div>
        <a href="#" className="text-sm font-medium text-zinc-800 hover:text-black">View all</a>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
