import { Link, Outlet } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-2xl font-bold text-green-600">
                HatBazar
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link
                  to="/products"
                  className="text-gray-600 hover:text-green-600"
                >
                  Products
                </Link>
                <Link
                  to="/categories"
                  className="text-gray-600 hover:text-green-600"
                >
                  Categories
                </Link>
                <Link
                  to="/deals"
                  className="text-gray-600 hover:text-green-600"
                >
                  Deals
                </Link>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-green-600"
                >
                  About
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex relative">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-64 pl-8"
                />
                <svg
                  className="absolute left-2 top-2.5 h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <Link to="/cart">
                <Button variant="ghost" className="relative">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <Badge className="absolute -top-1 -right-1 bg-green-600">
                    3
                  </Badge>
                </Button>
              </Link>
              <Link to="/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About HatBazar</h3>
              <p className="text-gray-600 text-sm">
                Connecting local farmers with consumers, bringing fresh produce
                directly to your table.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/faq">FAQs</Link>
                </li>
                <li>
                  <Link to="/become-seller">Become a Seller</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="/shipping">Shipping Policy</Link>
                </li>
                <li>
                  <Link to="/returns">Return Policy</Link>
                </li>
                <li>
                  <Link to="/track-order">Track Order</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-sm text-gray-600 mb-4">
                Subscribe to get special offers and updates
              </p>
              <div className="flex gap-2">
                <Input type="email" placeholder="Your email" />
                <Button className="bg-green-600">Subscribe</Button>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-sm text-gray-600">
            © 2024 HatBazar. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
