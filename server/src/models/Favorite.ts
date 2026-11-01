import mongoose, { Document, Schema } from "mongoose";

export interface IFavourite extends Document {
  user: mongoose.Types.ObjectId;
  product: mongoose.Types.ObjectId;
  createdAt: Date;
}

const favouriteSchema = new Schema<IFavourite>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent a user from favouriting the same product more than once
favouriteSchema.index({ user: 1, product: 1 }, { unique: true });

const Favourite = mongoose.model<IFavourite>("Favourite", favouriteSchema);

export default Favourite;