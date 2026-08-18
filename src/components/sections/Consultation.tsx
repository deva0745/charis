"use client";

import { FormEvent, useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

import RecommendationResults, {
    type Recommendation,
} from "./RecommendationResults";

type ConsultationResponse = {
    success: boolean;
    data?: {
        message: string;
        recommendations: Recommendation[];
    };
    error?: string;
};

export default function Consultation() {
    const [recipient, setRecipient] = useState("");
    const [relationship, setRelationship] = useState("");
    const [occasion, setOccasion] = useState("");
    const [interests, setInterests] = useState("");
    const [budget, setBudget] = useState("");

    const [recommendations, setRecommendations] = useState<
        Recommendation[]
    >([]);

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Restore previous consultation results when returning
    // from a product page using the browser Back button.
    useEffect(() => {
        const savedResults = sessionStorage.getItem(
            "charis-consultation-results"
        );

        if (!savedResults) {
            return;
        }

        try {
            const parsed = JSON.parse(savedResults);

            setMessage(parsed.message || "");
            setRecommendations(parsed.recommendations || []);
        } catch (error) {
            console.error(
                "Failed to restore consultation results:",
                error
            );

            sessionStorage.removeItem(
                "charis-consultation-results"
            );
        }
    }, []);

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setLoading(true);
        setError("");
        setRecommendations([]);
        setMessage("");

        try {
            const response = await fetch("/api/consultation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    recipient,
                    relationship,
                    occasion,
                    interests,
                    budget,
                }),
            });

            const result: ConsultationResponse =
                await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.error || "Something went wrong."
                );
            }

            const newMessage = result.data?.message || "";

            const newRecommendations =
                result.data?.recommendations || [];

            setMessage(newMessage);

            setRecommendations(newRecommendations);

            // Save consultation results so they survive
            // navigation to a product detail page.
            sessionStorage.setItem(
                "charis-consultation-results",
                JSON.stringify({
                    message: newMessage,
                    recommendations: newRecommendations,
                })
            );
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Something went wrong while getting recommendations."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="consultation"
            className="bg-[#F9F6F3] py-32"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">

                {/* HEADER */}

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="mb-5 text-sm uppercase tracking-[0.35em] text-primary">
                        CHARIS CONCIERGE
                    </p>

                    <h2 className="font-heading text-5xl leading-[1.08] tracking-tight text-primary md:text-6xl lg:text-7xl">
                        Find a gift that feels{" "}
                        <span className="text-primary/50">
                            truly personal.
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                        Tell CHARIS a little about the person you are
                        gifting for, and our AI concierge will curate
                        thoughtful recommendations for you.
                    </p>
                </motion.div>

                {/* FORM */}

                <motion.div
                    initial={{ opacity: 0, y: 45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.1,
                    }}
                    className="mx-auto mt-16 max-w-4xl rounded-[40px] border border-primary/10 bg-white/60 p-6 shadow-xl backdrop-blur-sm md:p-10 lg:p-12"
                >
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-7"
                    >

                        {/* Recipient + Relationship */}

                        <div className="grid gap-7 md:grid-cols-2">

                            <div>
                                <label
                                    htmlFor="recipient"
                                    className="mb-3 block text-sm font-medium text-primary"
                                >
                                    Who are you gifting for?
                                </label>

                                <input
                                    id="recipient"
                                    type="text"
                                    value={recipient}
                                    onChange={(e) =>
                                        setRecipient(e.target.value)
                                    }
                                    placeholder="e.g. Mother, Father, Partner"
                                    required
                                    className="w-full rounded-2xl border border-primary/10 bg-[#F7F3EF] px-5 py-4 text-primary outline-none transition-all duration-300 placeholder:text-primary/35 focus:border-primary/30 focus:bg-white focus:ring-4 focus:ring-primary/5"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="relationship"
                                    className="mb-3 block text-sm font-medium text-primary"
                                >
                                    Your relationship
                                </label>

                                <input
                                    id="relationship"
                                    type="text"
                                    value={relationship}
                                    onChange={(e) =>
                                        setRelationship(e.target.value)
                                    }
                                    placeholder="e.g. Son, Daughter, Friend"
                                    required
                                    className="w-full rounded-2xl border border-primary/10 bg-[#F7F3EF] px-5 py-4 text-primary outline-none transition-all duration-300 placeholder:text-primary/35 focus:border-primary/30 focus:bg-white focus:ring-4 focus:ring-primary/5"
                                />
                            </div>

                        </div>

                        {/* Occasion */}

                        <div>
                            <label
                                htmlFor="occasion"
                                className="mb-3 block text-sm font-medium text-primary"
                            >
                                What is the occasion?
                            </label>

                            <input
                                id="occasion"
                                type="text"
                                value={occasion}
                                onChange={(e) =>
                                    setOccasion(e.target.value)
                                }
                                placeholder="e.g. Birthday, Anniversary, Graduation"
                                required
                                className="w-full rounded-2xl border border-primary/10 bg-[#F7F3EF] px-5 py-4 text-primary outline-none transition-all duration-300 placeholder:text-primary/35 focus:border-primary/30 focus:bg-white focus:ring-4 focus:ring-primary/5"
                            />
                        </div>

                        {/* Interests */}

                        <div>
                            <label
                                htmlFor="interests"
                                className="mb-3 block text-sm font-medium text-primary"
                            >
                                What do they love?
                            </label>

                            <textarea
                                id="interests"
                                value={interests}
                                onChange={(e) =>
                                    setInterests(e.target.value)
                                }
                                placeholder="e.g. Classical music, reading, fashion, photography"
                                rows={5}
                                className="w-full resize-none rounded-2xl border border-primary/10 bg-[#F7F3EF] px-5 py-4 text-primary outline-none transition-all duration-300 placeholder:text-primary/35 focus:border-primary/30 focus:bg-white focus:ring-4 focus:ring-primary/5"
                            />
                        </div>

                        {/* Budget */}

                        <div>
                            <label
                                htmlFor="budget"
                                className="mb-3 block text-sm font-medium text-primary"
                            >
                                Your budget
                            </label>

                            <div className="relative">
                                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/50">
                                    ₹
                                </span>

                                <input
                                    id="budget"
                                    type="number"
                                    min="0"
                                    value={budget}
                                    onChange={(e) =>
                                        setBudget(e.target.value)
                                    }
                                    placeholder="20000"
                                    className="w-full rounded-2xl border border-primary/10 bg-[#F7F3EF] py-4 pl-10 pr-5 text-primary outline-none transition-all duration-300 placeholder:text-primary/35 focus:border-primary/30 focus:bg-white focus:ring-4 focus:ring-primary/5"
                                />
                            </div>
                        </div>

                        {/* ERROR */}

                        {error && (
                            <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
                                {error}
                            </div>
                        )}

                        {/* BUTTON */}

                        <motion.button
                            type="submit"
                            disabled={loading}
                            whileHover={
                                !loading
                                    ? { scale: 1.01 }
                                    : undefined
                            }
                            whileTap={
                                !loading
                                    ? { scale: 0.98 }
                                    : undefined
                            }
                            className="group flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? (
                                <>
                                    <Sparkles
                                        size={18}
                                        className="animate-pulse"
                                    />
                                    CHARIS is curating...
                                </>
                            ) : (
                                <>
                                    Get My Recommendations
                                    <ArrowRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </>
                            )}
                        </motion.button>

                    </form>
                </motion.div>

                {/* RESULTS */}

                <RecommendationResults
                    message={message}
                    recommendations={recommendations}
                />

            </div>
        </section>
    );
}