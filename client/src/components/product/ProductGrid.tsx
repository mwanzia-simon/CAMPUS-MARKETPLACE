import ProductCard from "./ProductCard";

interface Product {
  _id: string;
  title: string;
  price: number;
  condition: string;
  location: string;
  images: string[];
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="py-16 text-center">
        <h3 className="text-lg font-semibold text-text-primary">
          No products available
        </h3>
        <p className="mt-2 text-sm text-text-secondary">
          Check back later for new listings.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          title={product.title}
          price={product.price}
          condition={product.condition}
          location={product.location}
          image={product.images[0] || "/placeholder.png"}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
