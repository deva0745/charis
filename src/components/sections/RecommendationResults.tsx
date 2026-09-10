"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export type Recommendation = {
    productId: string;
    name: string;
    description: string;
    reason: string;
    estimatedPrice: string;
};

type RecommendationResultsProps = {
    message: string;
    recommendations: Recommendation[];
};

export default function RecommendationResults({
    message,
    recommendations,
}: RecommendationResultsProps) {
    if (!recommendations || recommendations.length === 0) {
        return null;
    }

    return (
        <section className="mt-24">

            {/* Header */}

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="text-center"
            >
                <p className="text-sm uppercase tracking-[0.35em] text-primary/60">
                    CURATED FOR YOU
                </p>

                <h2 className="mx-auto mt-5 max-w-4xl font-heading text-5xl leading-tight text-primary md:text-6xl">
                    Gifts chosen with intention.
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                    {message}
                </p>
            </motion.div>

            {/* Recommendation Cards */}

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
                {recommendations.map((recommendation, index) => (

                    <motion.div
                        key={recommendation.productId}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.7,
                            delay: index * 0.12,
                        }}
                        className="flex flex-col overflow-hidden rounded-[40px] border border-primary/10 bg-background/60 shadow-xl backdrop-blur-sm"
                    >

                        {/* Product Image */}

                        <div className="relative h-72 w-full overflow-hidden bg-[#F7F3EF]">
                            <Image
                                src={`/products/${recommendation.productId.replace(
                                    "charis-",
                                    ""
                                )}.jpg`}
                                alt={recommendation.name}
                                fill
                                sizes="(max-width: 1024px) 100vw, 33vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>

                        {/* Card Content */}

                        <div className="flex flex-1 flex-col p-8">

                            {/* Card Header */}

                            <p className="text-xs uppercase tracking-[0.3em] text-primary/50">
                                CURATED GIFT {index + 1}
                            </p>

                            <h3 className="mt-4 min-h-[76px] font-heading text-3xl leading-tight text-primary">
                                {recommendation.name}
                            </h3>

                            <div className="my-6 h-px bg-primary/10" />

                            {/* Description */}

                            <div className="h-[145px] overflow-y-auto pr-2">
                                <p className="text-base leading-7 text-muted-foreground">
                                    {recommendation.description}
                                </p>
                            </div>

                            {/* Reason */}

                            <div className="mt-1 h-[145px] overflow-y-auto pr-2">
                                <p className="text-base leading-7 text-primary/75">
                                    {recommendation.reason}
                                </p>
                            </div>

                            <div className="mt-8 h-px bg-primary/10" />

                            {/* Price */}

                            <div className="mt-6 flex items-end justify-between gap-4">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-primary/50">
                                        ESTIMATED PRICE
                                    </p>

                                    <p className="mt-2 font-heading text-2xl text-primary">
                                        {recommendation.estimatedPrice}
                                    </p>
                                </div>
                            </div>

                            {/* Explore Gift */}

                            <Link
                                href={`/products/${recommendation.productId}`}
                                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                Explore Gift
                                <ArrowRight size={17} />
                            </Link>

                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}