export default function Categories() {
  const categories = [
    {
      key: "men",
      label: "Men",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1800&auto=format&fit=crop",
      accent: "from-blue-500/20 to-cyan-400/20",
    },
    {
      key: "women",
      label: "Women",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1800&auto=format&fit=crop",
      accent: "from-pink-500/20 to-fuchsia-400/20",
    },
    {
      key: "kids",
      label: "Kids",
      image:
        "https://images.unsplash.com/photo-1520975867597-0f2b0b03c6e5?q=80&w=1800&auto=format&fit=crop",
      accent: "from-amber-400/20 to-orange-400/20",
    },
    {
      key: "running",
      label: "Running",
      image:
        "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1800&auto=format&fit=crop",
      accent: "from-emerald-400/20 to-teal-400/20",
    },
    {
      key: "basketball",
      label: "Basketball",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1800&auto=format&fit=crop",
      accent: "from-purple-500/20 to-indigo-400/20",
    },
    {
      key: "boots",
      label: "Boots",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1800&auto=format&fit=crop",
      accent: "from-stone-500/20 to-zinc-400/20",
    },
  ];

  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Shop by category</h2>
          <p className="text-sm text-zinc-600">Find your perfect pair faster</p>
        </div>
        <a href="#shop" className="text-sm font-medium text-zinc-800 hover:text-black">Browse all</a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <a
            key={c.key}
            href={`#${c.key}`}
            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white"
            aria-label={`Explore ${c.label}`}
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-tr opacity-0 transition-opacity duration-500 group-hover:opacity-100 "
                 style={{
                   backgroundImage: `linear-gradient(to top right, var(--tw-gradient-from), var(--tw-gradient-to))`,
                 }}
            />
            <div className={`pointer-events-none absolute inset-0 z-10 bg-gradient-to-t ${c.accent} from-30% to-60%`} />
            <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-50">
              <img
                src={c.image}
                alt={`${c.label} footwear`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-4 left-4 z-20">
              <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-900 shadow">
                {c.label}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
