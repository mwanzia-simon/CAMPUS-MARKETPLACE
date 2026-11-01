import { categories } from "../../assets/assets";

const CategoryGrid = () => {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text-primary">
            Browse Categories
          </h2>
          <p className="mt-2 text-text-secondary">
            Find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                className="group flex flex-col items-center gap-4 rounded-xl border border-border bg-surface p-6 transition hover:border-primary hover:bg-surface-elevated"
              >
                <div className="rounded-xl bg-primary/10 p-4 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Icon size={26} />
                </div>

                <span className="text-sm font-medium text-text-primary">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
