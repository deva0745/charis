export type Product = {
    id: string;
    name: string;
    brand: string;
    category: string;
    price: number;
    description: string;
    occasions: string[];
    recipientTypes: string[];
    interests: string[];
    tags: string[];
};

export const products: Product[] = [
    {
        id: "charis-001",
        name: "Premium Leather Journal",
        brand: "CHARIS Collection",
        category: "stationery",
        price: 4500,
        description:
            "A refined leather-bound journal designed for thoughtful writing and personal reflection.",
        occasions: ["birthday", "anniversary", "graduation", "thank-you"],
        recipientTypes: ["mother", "father", "partner", "friend", "professional"],
        interests: ["reading", "writing", "journaling", "art"],
        tags: ["elegant", "personal", "timeless", "thoughtful"],
    },

    {
        id: "charis-002",
        name: "Artisan Silk Stole",
        brand: "CHARIS Collection",
        category: "fashion",
        price: 8500,
        description:
            "A handcrafted silk stole with a timeless design suitable for elegant everyday and occasion wear.",
        occasions: ["birthday", "anniversary", "festival", "celebration"],
        recipientTypes: ["mother", "partner", "friend"],
        interests: ["fashion", "art", "luxury", "design"],
        tags: ["elegant", "luxury", "artisanal", "fashionable"],
    },

    {
        id: "charis-003",
        name: "Luxury Scented Candle Set",
        brand: "CHARIS Collection",
        category: "home",
        price: 6500,
        description:
            "A curated set of sophisticated fragrances designed to create a calm and luxurious atmosphere.",
        occasions: ["birthday", "anniversary", "housewarming", "thank-you"],
        recipientTypes: ["mother", "partner", "friend"],
        interests: ["wellness", "interiors", "relaxation", "luxury"],
        tags: ["calm", "elegant", "premium", "relaxing"],
    },

    {
        id: "charis-004",
        name: "Classic Leather Card Holder",
        brand: "CHARIS Collection",
        category: "accessories",
        price: 7000,
        description:
            "A minimalist leather card holder crafted for someone who appreciates understated sophistication.",
        occasions: ["birthday", "anniversary", "graduation", "promotion"],
        recipientTypes: ["father", "partner", "friend", "professional"],
        interests: ["fashion", "business", "design", "luxury"],
        tags: ["minimal", "professional", "timeless", "elegant"],
    },

    {
        id: "charis-005",
        name: "Premium Classical Music Headphones",
        brand: "CHARIS Collection",
        category: "technology",
        price: 16000,
        description:
            "High-quality headphones designed for immersive listening and detailed musical experiences.",
        occasions: ["birthday", "anniversary", "celebration"],
        recipientTypes: ["mother", "father", "partner", "friend"],
        interests: ["classical music", "music", "audio", "technology"],
        tags: ["premium", "immersive", "music", "technology"],
    },

    {
        id: "charis-006",
        name: "Curated Tea & Wellness Collection",
        brand: "CHARIS Collection",
        category: "wellness",
        price: 5500,
        description:
            "A carefully assembled collection of premium teas and relaxing wellness essentials.",
        occasions: ["birthday", "thank-you", "housewarming", "celebration"],
        recipientTypes: ["mother", "father", "partner", "friend"],
        interests: ["tea", "wellness", "relaxation", "self-care"],
        tags: ["calm", "thoughtful", "wellness", "relaxing"],
    },

    {
        id: "charis-007",
        name: "Artisan Coffee Experience Set",
        brand: "CHARIS Collection",
        category: "food-and-beverage",
        price: 6000,
        description:
            "A premium coffee collection designed for someone who enjoys slow and intentional coffee rituals.",
        occasions: ["birthday", "thank-you", "housewarming", "celebration"],
        recipientTypes: ["father", "partner", "friend", "professional"],
        interests: ["coffee", "food", "travel", "lifestyle"],
        tags: ["artisan", "premium", "experience", "thoughtful"],
    },

    {
        id: "charis-008",
        name: "Minimalist Luxury Watch",
        brand: "CHARIS Collection",
        category: "accessories",
        price: 19000,
        description:
            "A sophisticated minimalist watch designed around timeless proportions and understated elegance.",
        occasions: ["birthday", "anniversary", "graduation", "promotion"],
        recipientTypes: ["father", "partner", "professional"],
        interests: ["watches", "fashion", "design", "luxury"],
        tags: ["timeless", "luxury", "professional", "elegant"],
    },
];