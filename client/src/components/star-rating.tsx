import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  className?: string;
}

export default function StarRating({ rating, className = "" }: StarRatingProps) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className={`flex text-yellow-400 text-sm ${className}`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`full-${i}`} className="h-4 w-4 fill-current" />
      ))}

      {half && (
        <div className="relative">
          <Star className="h-4 w-4 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="h-4 w-4 fill-current text-yellow-400" />
          </div>
        </div>
      )}

      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
      ))}
    </div>
  );
}
