import logo from "./logo.png";
import {
  Laptop,
  BookOpen,
  Shirt,
  Armchair,
  Watch,
  LayoutGrid,
} from "lucide-react";

const categories = [
  { name: "Electronics", icon: Laptop },
  { name: "Books & Stationery", icon: BookOpen },
  { name: "Clothing", icon: Shirt },
  { name: "Furniture", icon: Armchair },
  { name: "Accessories", icon: Watch },
  { name: "Other", icon: LayoutGrid },
];

const sampleProducts = [
  {
    _id: "1",
    title: "HP EliteBook 840 G5",
    price: 25000,
    condition: "Used",
    location: "Nairobi",
    images: ["/images/laptop.jpg"],
  },
  {
    _id: "2",
    title: "Samsung Galaxy A54",
    price: 32000,
    condition: "Like New",
    location: "Nairobi",
    images: ["/images/phone.jpg"],
  },
  {
    _id: "3",
    title: "Study Desk",
    price: 4500,
    condition: "New",
    location: "Nairobi",
    images: ["/images/desk.jpg"],
  },
];

export { logo, categories, sampleProducts };
