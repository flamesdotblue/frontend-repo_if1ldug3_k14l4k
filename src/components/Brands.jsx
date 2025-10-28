export default function Brands() {
  const brands = [
    "Nike",
    "Adidas",
    "Puma",
    "Reebok",
    "New Balance",
    "ASICS",
    "Converse",
    "Vans",
  ];

  return (
    <section aria-label="Featured brands" className="border-y border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-6 overflow-x-auto px-4 py-6 [scrollbar-width:none] [-ms-overflow-style:none]">
        {brands.map((b) => (
          <span
            key={b}
            className="shrink-0 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}
