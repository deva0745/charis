import { getGiftRecommendations } from "@/services/gemini";
import {
    matchProducts,
    type UserProfile,
} from "@/services/product-matcher";
import { products } from "@/data/dummy-products";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            recipient,
            relationship,
            occasion,
            interests,
            budget,
        } = body;

        // --------------------------------
        // Validate required fields
        // --------------------------------

        if (!recipient || !relationship || !occasion) {
            return Response.json(
                {
                    success: false,
                    error: "Recipient, relationship, and occasion are required.",
                },
                { status: 400 }
            );
        }

        // --------------------------------
        // Normalize interests
        // --------------------------------

        const normalizedInterests: string[] = Array.isArray(interests)
            ? interests
                .map((interest: string) => interest.trim())
                .filter(Boolean)
            : typeof interests === "string"
                ? interests
                    .split(",")
                    .map((interest: string) => interest.trim())
                    .filter(Boolean)
                : [];

        // --------------------------------
        // Normalize budget
        // --------------------------------

        const normalizedBudget =
            typeof budget === "number"
                ? budget
                : typeof budget === "string" && budget.trim() !== ""
                    ? Number(budget)
                    : 0;

        if (Number.isNaN(normalizedBudget) || normalizedBudget < 0) {
            return Response.json(
                {
                    success: false,
                    error: "Budget must be a valid positive number.",
                },
                { status: 400 }
            );
        }

        // --------------------------------
        // Create UserProfile
        // --------------------------------

        const userProfile: UserProfile = {
            recipientType: recipient.toLowerCase().trim(),
            occasion: occasion.toLowerCase().trim(),
            interests: normalizedInterests,
            budget: normalizedBudget,
        };

        // --------------------------------
        // Match products
        // --------------------------------

        const matchedProducts = matchProducts(
            products,
            userProfile,
            3
        );

        // --------------------------------
        // Make sure products were found
        // --------------------------------

        if (matchedProducts.length === 0) {
            return Response.json(
                {
                    success: false,
                    error: "We couldn't find suitable gifts for this consultation.",
                },
                { status: 404 }
            );
        }

        // --------------------------------
        // Prepare product information
        // for Gemini
        // --------------------------------

        const productContext = matchedProducts
            .map(
                (product, index) => `
PRODUCT ${index + 1}

ID: ${product.id}
Name: ${product.name}
Brand: ${product.brand}
Category: ${product.category}
Price: ₹${product.price}
Description: ${product.description}
Occasions: ${product.occasions.join(", ")}
Recipient Types: ${product.recipientTypes.join(", ")}
Interests: ${product.interests.join(", ")}
Tags: ${product.tags.join(", ")}
Match Score: ${product.score}
`
            )
            .join("\n");

        // --------------------------------
        // Gemini prompt
        // --------------------------------

        const prompt = `
You are CHARIS, a thoughtful luxury AI gift concierge.

Your purpose is to help people discover meaningful gifts based on
the recipient, relationship, occasion, personality, interests,
preferences, and budget.

Think like a luxury gift consultant rather than simply listing
random products.

CONSULTATION DETAILS

Recipient:
${recipient}

Relationship:
${relationship}

Occasion:
${occasion}

Interests and preferences:
${normalizedInterests.length > 0
                ? normalizedInterests.join(", ")
                : "Not provided"
            }

Budget:
${normalizedBudget > 0
                ? `₹${normalizedBudget}`
                : "Not provided"
            }

MATCHED PRODUCTS

${productContext}

TASK

Recommend exactly 3 gifts from the matched products above.

IMPORTANT RULES:

- You MUST recommend only products provided above.
- Do NOT invent products.
- Do NOT change product names.
- Do NOT change product IDs.
- Do NOT change product prices.
- Prioritize products with higher match scores.
- Make each recommendation feel personal and intentional.
- Consider the recipient.
- Consider the relationship.
- Consider the occasion.
- Consider the interests.
- Respect the budget whenever possible.
- Explain why each selected product is meaningful.

Return ONLY valid JSON using exactly this structure:

{
  "message": "A short warm introduction to the recommendations.",
  "recommendations": [
    {
      "productId": "Exact product ID",
      "name": "Exact product name",
      "description": "Short description of the product.",
      "reason": "Why this gift is meaningful for this particular recipient.",
      "estimatedPrice": "Exact product price"
    }
  ]
}

The recommendations array MUST contain exactly 3 items.

Do not include Markdown.
Do not include code fences.
Do not add any text outside the JSON.
`;

        // --------------------------------
        // Get Gemini recommendations
        // --------------------------------

        const recommendations = await getGiftRecommendations(prompt);

        // --------------------------------
        // Final response
        // --------------------------------

        return Response.json({
            success: true,
            data: {
                userProfile,
                matchedProducts,
                ...recommendations,
            },
        });
    } catch (error) {
        console.error("Consultation API error:", error);

        return Response.json(
            {
                success: false,
                error: "Something went wrong while processing the consultation.",
            },
            { status: 500 }
        );
    }
}