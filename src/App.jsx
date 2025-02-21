import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Products from "./pages/products/Products";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Separator } from "./components/ui/separator";
import { Input } from "./components/ui/input";
import { Badge } from "./components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import BuyerLogin from "./pages/auth/BuyerLogin";
import SellerLogin from "./pages/auth/SellerLogin";

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

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/signin" element={<BuyerLogin />} />
            <Route path="/seller/login" element={<SellerLogin />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="products" element={<Products />} />
            {/* Add more routes here */}
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
