import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import ProductGrid from "./components/ProductGrid";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <ProductGrid />

        {/* Footer section */}
        <section className="border-t border-zinc-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-md bg-black text-white text-sm font-semibold">SS</div>
                <span className="text-lg font-bold">SoleSelect</span>
              </div>
              <p className="max-w-xs text-sm text-zinc-600">
                Your destination for authentic, premium branded footwear.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold">Help</h4>
              <ul className="space-y-1 text-sm text-zinc-600">
                <li><a href="#" className="hover:text-zinc-900">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-zinc-900">Size Guide</a></li>
                <li><a href="#" className="hover:text-zinc-900">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold">Stay in the loop</h4>
              <form className="flex w-full max-w-sm items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-400"
                />
                <button className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-zinc-900">
                  Join
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-500">
            © {new Date().getFullYear()} SoleSelect. All rights reserved.
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
