import { Link } from "react-router";
import { logo } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 w-fit">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg">
                <img src={logo} alt="logo" />
              </div>

              <div className="leading-tight">
                <h2 className="font-bold text-text-primary">Campus</h2>
                <span className="text-[10px] font-semibold tracking-wider text-primary">
                  MARKETPLACE
                </span>
              </div>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-text-secondary">
              Your campus, your market. Discover great deals and connect with
              students in your campus community.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 font-semibold text-text-primary">Explore</h3>

            <ul className="space-y-3 text-sm text-text-secondary">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-primary">
                  Marketplace
                </Link>
              </li>

              <li>
                <Link to="/favorites" className="hover:text-primary">
                  Favorites
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="mb-4 font-semibold text-text-primary">Account</h3>

            <ul className="space-y-3 text-sm text-text-secondary">
              <li>
                <Link to="/login" className="hover:text-primary">
                  Login
                </Link>
              </li>

              <li>
                <Link to="/register" className="hover:text-primary">
                  Create Account
                </Link>
              </li>

              <li>
                <Link to="/dashboard" className="hover:text-primary">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Selling */}
          <div>
            <h3 className="mb-4 font-semibold text-text-primary">Selling</h3>

            <ul className="space-y-3 text-sm text-text-secondary">
              <li>
                <Link to="/create-listing" className="hover:text-primary">
                  Create Listing
                </Link>
              </li>

              <li>
                <Link to="/my-listings" className="hover:text-primary">
                  My Listings
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border pt-6">
          <p className="text-center text-xs text-text-muted">
            © {new Date().getFullYear()} Campus Marketplace. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
