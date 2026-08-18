import { Product } from "@/data/dummy-products";

export type UserProfile = {
    occasion: string;
    recipientType: string;
    interests: string[];
    budget: number;
};

export type MatchedProduct = Product & {
    score: number;
};

const normalize = (value: string) => {
    return value.toLowerCase().trim();
};

const calculateInterestScore = (
    userInterests: string[],
    productInterests: string[]
) => {
    if (userInterests.length === 0) {
        return 0;
    }

    const normalizedUserInterests = userInterests.map(normalize);
    const normalizedProductInterests = productInterests.map(normalize);

    const matchedInterests = normalizedUserInterests.filter((interest) =>
        normalizedProductInterests.includes(interest)
    );

    const matchRatio =
        matchedInterests.length / normalizedUserInterests.length;

    return Math.round(matchRatio * 35);
};

const calculateBudgetScore = (
    budget: number,
    productPrice: number
) => {
    if (budget <= 0) {
        return 0;
    }

    if (productPrice <= budget) {
        return 25;
    }

    const difference = productPrice - budget;
    const percentageOverBudget = difference / budget;

    if (percentageOverBudget <= 0.1) {
        return 15;
    }

    if (percentageOverBudget <= 0.2) {
        return 8;
    }

    return 0;
};

const calculateProductScore = (
    product: Product,
    userProfile: UserProfile
) => {
    let score = 0;

    // Recipient match — 20 points
    const recipientMatches = product.recipientTypes
        .map(normalize)
        .includes(normalize(userProfile.recipientType));

    if (recipientMatches) {
        score += 20;
    }

    // Interest match — 35 points
    score += calculateInterestScore(
        userProfile.interests,
        product.interests
    );

    // Occasion match — 20 points
    const occasionMatches = product.occasions
        .map(normalize)
        .includes(normalize(userProfile.occasion));

    if (occasionMatches) {
        score += 20;
    }

    // Budget match — 25 points
    score += calculateBudgetScore(
        userProfile.budget,
        product.price
    );

    return score;
};

export function matchProducts(
    products: Product[],
    userProfile: UserProfile,
    limit = 3
): MatchedProduct[] {
    return products
        .map((product) => ({
            ...product,
            score: calculateProductScore(product, userProfile),
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);
}