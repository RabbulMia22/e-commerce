import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },

    price: { type: Number, required: true, min: 0 },

    images: [{ type: String, required: true }], 

    category: { type: String, required: true }, 
    brand: { type: String }, // optional

    stock: { type: Number, required: true, min: 0 }, 
    sku: { type: String, unique: true }, 

    rating: {
      average: { type: Number, default: 0, min: 0, max: 5 },
      count: { type: Number, default: 0 },
    },

    tags: [{ type: String }], // e.g. ["laptop", "gaming", "tech"]

    isFeatured: { type: Boolean, default: false },
    discount: { type: Number, default: 0 }, // percentage discount (e.g. 10 = 10%)

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true, 
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
