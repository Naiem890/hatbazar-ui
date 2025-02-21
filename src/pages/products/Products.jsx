import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Extended product data
const products = [
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
    category: "Vegetables",
    tags: ["organic", "fresh", "local"],
    weight: "1 kg",
    discount: 0,
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
    category: "Vegetables",
    tags: ["organic", "fresh"],
    weight: "1 kg",
    discount: 10,
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
    category: "Vegetables",
    tags: ["fresh", "local"],
    weight: "1 piece",
    discount: 0,
  },
  {
    id: 4,
    name: "Organic Apples",
    price: "$5.99/kg",
    image:
      "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=500&q=80",
    description: "Sweet and crispy organic apples",
    rating: 4.6,
    reviews: 89,
    stock: "In Stock",
    farm: "Green Valley Farms",
    category: "Fruits",
    tags: ["organic", "fresh", "seasonal"],
    weight: "1 kg",
    discount: 15,
  },
  {
    id: 5,
    name: "Fresh Milk",
    price: "$3.49/L",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&q=80",
    description: "Fresh organic whole milk",
    rating: 4.9,
    reviews: 201,
    stock: "In Stock",
    farm: "Happy Cows Dairy",
    category: "Dairy",
    tags: ["organic", "fresh"],
    weight: "1 L",
    discount: 0,
  },
  {
    id: 6,
    name: "Brown Rice",
    price: "$6.99/kg",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80",
    description: "Organic brown rice",
    rating: 4.5,
    reviews: 78,
    stock: "In Stock",
    farm: "Nature's Grain Co.",
    category: "Grains",
    tags: ["organic", "whole grain"],
    weight: "1 kg",
    discount: 5,
  },
];

const categories = ["All", "Vegetables", "Fruits", "Dairy", "Grains"];
const sortOptions = [
  "Popularity",
  "Price: Low to High",
  "Price: High to Low",
  "Rating",
];
const tags = ["organic", "fresh", "local", "seasonal", "whole grain"];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState("Popularity");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });

  // Filter products based on search, category, tags, and price
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => product.tags.includes(tag));
    const price = parseFloat(product.price.replace(/[^0-9.]/g, ""));
    const matchesPrice = price >= priceRange.min && price <= priceRange.max;

    return matchesSearch && matchesCategory && matchesTags && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "Price: Low to High":
        return (
          parseFloat(a.price.replace(/[^0-9.]/g, "")) -
          parseFloat(b.price.replace(/[^0-9.]/g, ""))
        );
      case "Price: High to Low":
        return (
          parseFloat(b.price.replace(/[^0-9.]/g, "")) -
          parseFloat(a.price.replace(/[^0-9.]/g, ""))
        );
      case "Rating":
        return b.rating - a.rating;
      default: // Popularity (by reviews)
        return b.reviews - a.reviews;
    }
  });

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header and Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
          Our Products
        </h1>
        <div className="w-full md:w-96">
          <Input
            type="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Categories */}
              <div>
                <h3 className="font-semibold mb-2">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-2 py-1 rounded ${
                        selectedCategory === category
                          ? "bg-green-100 text-green-800"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Tags */}
              <div>
                <h3 className="font-semibold mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={
                        selectedTags.includes(tag) ? "default" : "outline"
                      }
                      className={`cursor-pointer ${
                        selectedTags.includes(tag)
                          ? "bg-green-600"
                          : "hover:bg-green-100"
                      }`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Sort */}
              <div>
                <h3 className="font-semibold mb-2">Sort By</h3>
                <div className="space-y-2">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSortBy(option)}
                      className={`block w-full text-left px-2 py-1 rounded ${
                        sortBy === option
                          ? "bg-green-100 text-green-800"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Product Grid */}
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <Card
                key={product.id}
                className="hover:shadow-lg transition-shadow"
              >
                <Link to={`/products/${product.id}`}>
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      {product.discount > 0 && (
                        <Badge className="absolute top-2 right-2 bg-red-500">
                          {product.discount}% OFF
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">
                          {product.name}
                        </CardTitle>
                        <p className="text-sm text-gray-500">
                          by {product.farm}
                        </p>
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
                <CardFooter className="flex justify-between items-center p-4">
                  <div>
                    {product.discount > 0 ? (
                      <div className="space-y-1">
                        <span className="text-lg font-semibold text-green-600">
                          $
                          {(
                            parseFloat(product.price.replace(/[^0-9.]/g, "")) *
                            (1 - product.discount / 100)
                          ).toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-500 line-through block">
                          {product.price}
                        </span>
                      </div>
                    ) : (
                      <span className="text-lg font-semibold text-green-600">
                        {product.price}
                      </span>
                    )}
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold text-gray-900">
                No products found
              </h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
