import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(99,102,241,0.15)_0%,rgba(255,255,255,0)_60%)]" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
          <span className="mb-3 inline-flex w-max items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
            Premium Brands • New Season Arrivals
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
            Step into style with curated branded footwear
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-600">
            Discover sneakers, boots, and sandals from the world’s most trusted labels. Guaranteed authentic, delivered fast.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#shop"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white shadow-lg shadow-black/10 hover:bg-zinc-900"
            >
              Shop Now <ChevronRight className="h-5 w-5" />
            </a>
            <a
              href="#men"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-zinc-800 hover:bg-zinc-50"
            >
              Explore Men
            </a>
            <a
              href="#women"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-zinc-800 hover:bg-zinc-50"
            >
              Explore Women
            </a>
          </div>
          <p className="mt-6 text-sm text-zinc-500">Free shipping over $99 • 30-day returns • Secure checkout</p>
        </div>
        <div className="relative">
          <div className="absolute -inset-10 -z-0 rounded-full bg-gradient-to-tr from-indigo-200 via-white to-pink-100 blur-3xl" />
          <img
            src="https://images.unsplash.com/photo-1542291024-69b89f6a86a6?q=80&w=1800&auto=format&fit=crop"
            alt="Hero sneaker showcase"
            className="relative z-10 mx-auto w-full max-w-lg rounded-3xl border border-white/40 shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
