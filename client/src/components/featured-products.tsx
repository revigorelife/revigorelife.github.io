import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/product-card";
import { featuredProducts } from "@/data/products";
import { Button } from "@/components/ui/button"; // keep Button for consistent styling

export default function FeaturedProducts() {
  const products = featuredProducts;
  const firstRow = products?.slice(0, 5) || [];
  const secondRow = products?.slice(5, 10) || [];

  return (
    <section className="py-16" id="featured">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Featured Products
            </h2>
            <p className="text-gray-600">
              Hand-selected wellness products from trusted brands to support your health journey
            </p>
          </div>
          <a
            href="#"
            className="text-wellness-primary hover:text-wellness-secondary font-semibold flex items-center"
          >
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {firstRow.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {secondRow.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-wellness-primary hover:bg-wellness-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
