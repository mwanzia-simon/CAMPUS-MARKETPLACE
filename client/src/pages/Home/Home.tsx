import { Link } from "react-router";
import { ArrowRight, ShoppingBag } from "lucide-react";
import CategoryGrid from "../../components/product/CategoryGrid";
import ProductGrid from "../../components/product/ProductGrid";
import { sampleProducts } from "../../assets/assets";

const Home = () => {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-blue-400">
            <ShoppingBag size={16} />
            Your Campus. Your Market.
          </span>

          <h1 className="mt-8 text-4xl font-bold tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
            Buy, Sell & Discover
            <span className="block text-primary">Within Your Campus.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
            Your campus marketplace makes it easy to discover great deals,
            connect with fellow students, and sell items you no longer need.
          </p>

          <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary-hover"
            >
              Explore Marketplace
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/create-listing"
              className="inline-flex flex-1 items-center justify-center rounded-lg border border-border bg-surface px-6 py-3 font-medium text-text-primary transition hover:bg-surface-elevated"
            >
              Start Selling
            </Link>
          </div>
        </div>
      </section>
      <CategoryGrid />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">
                Recently Listed
              </h2>
              <p className="mt-2 text-text-secondary">
                Discover what's new in your campus marketplace.
              </p>
            </div>

            <Link
              to="/products"
              className="hidden items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover sm:flex"
            >
              View all
              <ArrowRight size={16} />
            </Link>
          </div>

          <ProductGrid products={sampleProducts} />
        </div>
      </section>
    </div>
  );
};

export default Home;
