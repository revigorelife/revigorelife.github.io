import { Button } from "@/components/ui/button"
import { Link } from "wouter"

export default function Hero(){
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Premium Wellness, Daily Vitality
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Curated supplements, gear, and gadgets to help you feel your best.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/categories/health"><Button>Shop Health</Button></Link>
          <Link href="/categories/gadgets"><Button variant="secondary">Shop Gadgets</Button></Link>
        </div>
      </div>
    </section>
  )
}
