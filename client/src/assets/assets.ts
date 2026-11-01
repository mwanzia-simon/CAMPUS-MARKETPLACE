import logo from "./logo.png";
import HP_EliteBook_840_G5 from "./products/HP Elitebook 840 G5.jpg";
import Samsung_Galaxy_A54 from "./products/Samsung Galaxy A54.jpg";
import Study_Desk from "./products/Study Desk.jpg";
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
    images: [HP_EliteBook_840_G5],
  },
  {
    _id: "2",
    title: "Samsung Galaxy A54",
    price: 32000,
    condition: "Like New",
    location: "Nairobi",
    images: [Samsung_Galaxy_A54],
  },
  {
    _id: "3",
    title: "Study Desk",
    price: 4500,
    condition: "New",
    location: "Nairobi",
    images: [Study_Desk],
  },
];

export { logo, categories, sampleProducts };
