import dotenv from "dotenv";
import mongoose from "mongoose";

import { connectToDatabase } from "../src/lib/mongodb";
import Product from "../src/models/Product";
import { products } from "../src/data/dummy-products";

dotenv.config({ path: ".env.local" });

async function seedProducts() {
    try {
        await connectToDatabase();

        console.log("Connected to MongoDB");

        await Product.deleteMany({});

        console.log("Existing products cleared");

        await Product.insertMany(products);

        console.log(
            `Successfully seeded ${products.length} products`
        );
    } catch (error) {
        console.error("Error seeding products:", error);
    } finally {
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    }
}

seedProducts();