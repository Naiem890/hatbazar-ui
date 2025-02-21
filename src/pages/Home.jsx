import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Dummy data for featured products
const featuredProducts = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: "$4.99/kg",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500&q=80",
    description: "Fresh, locally grown organic tomatoes",
    rating: 4.8,
    reviews: 128,
    stock: "In Stock",
    farm: "Green Valley Farms",
  },
  {
    id: 2,
    name: "Fresh Carrots",
    price: "$3.99/kg",
    image:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&q=80",
    description: "Crisp and sweet organic carrots",
    rating: 4.9,
    reviews: 95,
    stock: "In Stock",
    farm: "Sunrise Organics",
  },
  {
    id: 3,
    name: "Green Lettuce",
    price: "$2.99/piece",
    image:
      "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=500&q=80",
    description: "Freshly harvested green lettuce",
    rating: 4.7,
    reviews: 156,
    stock: "Low Stock",
    farm: "Fresh Fields Co.",
  },
];

// Dummy data for categories
const categories = [
  {
    id: 1,
    name: "Vegetables",
    icon: "🥬",
    count: "150+ items",
    featured: ["Tomatoes", "Carrots", "Lettuce", "Potatoes"],
  },
  {
    id: 2,
    name: "Fruits",
    icon: "🍎",
    count: "100+ items",
    featured: ["Apples", "Oranges", "Bananas", "Berries"],
  },
  {
    id: 3,
    name: "Grains",
    icon: "🌾",
    count: "75+ items",
    featured: ["Rice", "Wheat", "Oats", "Quinoa"],
  },
  {
    id: 4,
    name: "Dairy",
    icon: "🥛",
    count: "50+ items",
    featured: ["Milk", "Cheese", "Yogurt", "Butter"],
  },
];

// Dummy data for deals
const deals = [
  {
    id: 1,
    title: "Weekend Special",
    discount: "20% OFF",
    code: "FRESH20",
    validUntil: "Sunday",
  },
  {
    id: 2,
    title: "Bulk Purchase",
    discount: "15% OFF",
    code: "BULK15",
    validUntil: "Limited Time",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-6">
            <Badge className="bg-green-100 text-green-800 mb-4">
              Free Delivery on Orders Over $50
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-green-800">
              Fresh From Farm
              <br />
              <span className="text-green-600">To Your Table</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Discover the finest organic produce from local farmers. Quality
              guaranteed, delivered fresh to your doorstep.
            </p>
            <div className="space-x-4">
              <Link to="/products">
                <Button className="bg-green-600 hover:bg-green-700">
                  Shop Now
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80"
              alt="Fresh vegetables"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="bg-green-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {deals.map((deal) => (
              <Card key={deal.id} className="flex-shrink-0 w-72 bg-white">
                <CardHeader>
                  <CardTitle className="text-green-600">{deal.title}</CardTitle>
                  <CardDescription>
                    Valid until {deal.validUntil}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-800">
                    {deal.discount}
                  </p>
                  <p className="text-sm text-gray-500">Use code: {deal.code}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Shop by Category</h2>
          <Link to="/categories">
            <Button variant="ghost" className="text-green-600">
              View All Categories
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              to={`/categories/${category.name.toLowerCase()}`}
              key={category.id}
            >
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle>{category.name}</CardTitle>
                  <CardDescription>{category.count}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-500">
                    {category.featured.map((item, index) => (
                      <li key={index} className="mb-1">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      {/* Featured Products Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Featured Products
          </h2>
          <Link to="/products">
            <Button variant="ghost" className="text-green-600">
              View All Products
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-lg transition-shadow"
            >
              <Link to={`/products/${product.id}`}>
                <CardHeader>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{product.name}</CardTitle>
                      <p className="text-sm text-gray-500">by {product.farm}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-green-600 border-green-600"
                    >
                      {product.stock}
                    </Badge>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                </CardContent>
              </Link>
              <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-semibold text-green-600">
                  {product.price}
                </span>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: "🚚",
                title: "Free Delivery",
                description: "On orders over $50",
              },
              {
                icon: "🌱",
                title: "100% Organic",
                description: "Certified products",
              },
              {
                icon: "💯",
                title: "Quality Guarantee",
                description: "30-day money back",
              },
              {
                icon: "🤝",
                title: "Direct from Farmers",
                description: "Supporting local farms",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-green-600 text-white">
          <CardContent className="flex flex-col md:flex-row items-center justify-between p-8">
            <div className="space-y-4 text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">Start Shopping Fresh Today</h3>
              <p className="text-green-100">
                Join thousands of happy customers who trust our products
              </p>
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Fresh Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Secure Payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Link to="/signup">
                <Button className="bg-white text-green-600 hover:bg-green-50 w-full">
                  Create Account
                </Button>
              </Link>
              <p className="text-sm text-center text-green-100">
                Already have an account?{" "}
                <Link to="/signin" className="underline">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
