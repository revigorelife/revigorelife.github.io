import { categories } from "@/data/categories"
import { Link } from "wouter"

export default function ShopByCategory(){
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Shop by category</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map(c => (
          <Link key={c.id} href={`/categories/${c.slug}`} className="group">
            <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
              <img src={c.imageUrl} alt={c.name} className="h-28 w-full object-cover group-hover:scale-105 transition-transform" />
              <div className="p-3">
                <p className="font-medium">{c.name}</p>
                <p className="text-xs text-gray-500">{c.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
