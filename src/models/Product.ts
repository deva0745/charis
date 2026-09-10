import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProduct extends Document {
    id: string;
    name: string;
    brand: string;
    description: string;
    price: number;
    category: string;
    image: string;
    recipientTypes: string[];
    interests: string[];
    occasions: string[];
}

const ProductSchema = new Schema<IProduct>(
    {
        id: {
            type: String,
            required: true,
            unique: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
        },

        brand: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        image: {
            type: String,
            required: true,
        },

        recipientTypes: {
            type: [String],
            default: [],
        },

        interests: {
            type: [String],
            default: [],
        },

        occasions: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

const Product: Model<IProduct> =
    mongoose.models.Product ||
    mongoose.model<IProduct>("Product", ProductSchema);

export default Product;