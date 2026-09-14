import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  title: string;
  description: string;
  price: number;
  category: string;
  condition: "new" | "like-new" | "good" | "fair";
  images: string[];
  location: string;
  seller: mongoose.Types.ObjectId;
  status: "available" | "sold" | "reserved";
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    condition: {
      type: String,
      enum: ["new", "like-new", "good", "fair"],
      required: true,
    },

    images: {
      type: [String],
      required: true,
      default: [],
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    seller: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    status: {
      type: String,
      enum: ["available", "sold", "reserved"],
      default: "available",
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model<IProduct>("Product", productSchema);

export default Product;