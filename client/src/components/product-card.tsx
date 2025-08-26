import { Button } from "@/components/ui/button";
import StarRating from "@/components/star-rating.tsx";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  rating: string;
  reviewCount: number;
  categoryId: string;
  isFeatured: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
        <div className="flex items-center mb-3">
          <StarRating rating={parseFloat(product.rating)} />
          <span className="text-xs text-gray-500 ml-2">({product.reviewCount})</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-black">${product.price}</span>
          <Button className="bg-wellness-primary hover:bg-wellness-secondary text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}
