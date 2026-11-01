import { Heart, MapPin } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: number;
  condition: string;
  location: string;
  image: string;
}

const ProductCard = ({
  title,
  price,
  condition,
  location,
  image,
}: ProductCardProps) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-surface transition hover:-translate-y-1 hover:border-primary/50">
      {/* Product Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <button
          type="button"
          aria-label="Add to favourites"
          className="absolute right-3 top-3 rounded-full bg-background/80 p-2 text-text-primary backdrop-blur transition hover:text-red-500"
        >
          <Heart size={18} />
        </button>

        <span className="absolute bottom-3 left-3 rounded-full bg-background/80 px-3 py-1 text-xs text-text-primary backdrop-blur">
          {condition}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="truncate font-semibold text-text-primary">{title}</h3>

        <p className="mt-2 text-lg font-bold text-primary">
          KSh {price.toLocaleString("en-KE")}
        </p>

        <div className="mt-3 flex items-center gap-1 text-sm text-text-secondary">
          <MapPin size={15} />
          <span className="truncate">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
