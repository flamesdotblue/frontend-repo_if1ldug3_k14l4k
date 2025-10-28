import { ShoppingCart, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-black text-white font-semibold">SS</div>
          <span className="text-xl font-bold tracking-tight">SoleSelect</span>
        </a>

        <div className="hidden md:flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 w-full max-w-lg">
          <Search className="h-4 w-4 text-zinc-500" />
          <input
            placeholder="Search branded footwear"
            className="w-full bg-transparent outline-none placeholder:text-zinc-500"
          />
        </div>

        <nav className="flex items-center gap-3">
          <a href="#men" className="hidden md:inline text-sm text-zinc-700 hover:text-black">Men</a>
          <a href="#women" className="hidden md:inline text-sm text-zinc-700 hover:text-black">Women</a>
          <a href="#kids" className="hidden md:inline text-sm text-zinc-700 hover:text-black">Kids</a>
          <button className="relative rounded-full p-2 hover:bg-zinc-100" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-black text-[10px] font-bold text-white">2</span>
          </button>
          <button className="rounded-full p-2 hover:bg-zinc-100" aria-label="Account">
            <User className="h-5 w-5" />
          </button>
        </nav>
      </div>

      <div className="md:hidden px-4 pb-4">
        <div className="flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2">
          <Search className="h-4 w-4 text-zinc-500" />
          <input
            placeholder="Search branded footwear"
            className="w-full bg-transparent outline-none placeholder:text-zinc-500"
          />
        </div>
      </div>
    </header>
  );
}
