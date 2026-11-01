import { useState } from "react";
import { NavLink, Link } from "react-router";
import { Search, Plus, UserRound, Menu, X } from "lucide-react";
import { logo } from "../../assets/assets";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-primary" : "text-text-secondary hover:text-text-primary"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg">
            <img src={logo} alt="logo" />
          </div>

          <div className="leading-tight">
            <h1 className="text-base font-bold text-text-primary">Campus</h1>
            <span className="text-[10px] font-semibold tracking-wider text-primary">
              MARKETPLACE
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/products" className={navLinkClass}>
            Marketplace
          </NavLink>

          <NavLink to="/favorites" className={navLinkClass}>
            Favorites
          </NavLink>
        </div>

        {/* Search */}
        <div className="hidden lg:flex w-full max-w-xs">
          <div className="flex w-full items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 focus-within:border-primary">
            <Search size={17} className="text-text-muted" />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent text-sm text-text-primary outline-none placeholder:text-text-muted"
            />
          </div>
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/create-listing"
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            <Plus size={17} />
            Sell Item
          </Link>

          <Link
            to="/profile"
            aria-label="Your profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-colors hover:text-text-primary"
          >
            <UserRound size={19} />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="rounded-lg p-2 text-text-secondary hover:bg-surface md:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {/* Mobile search */}
            <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2">
              <Search size={17} className="text-text-muted" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-transparent text-sm text-text-primary outline-none placeholder:text-text-muted"
              />
            </div>

            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={navLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Marketplace
            </NavLink>

            <NavLink
              to="/favorites"
              className={navLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Favorites
            </NavLink>

            <NavLink
              to="/profile"
              className={navLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              My Profile
            </NavLink>

            <Link
              to="/create-listing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover"
            >
              <Plus size={17} />
              Sell Item
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
