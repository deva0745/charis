"use client";

import { motion } from "motion/react";
import { MessageCircle, Brain, Gift } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: MessageCircle,
        title: "Tell us about them",
        description:
            "Share a little about the person, your relationship, the occasion, and what makes the moment meaningful.",
    },
    {
        number: "02",
        icon: Brain,
        title: "We understand",
        description:
            "CHARIS thoughtfully interprets the details to understand their personality, preferences, and the feeling behind your gift.",
    },
    {
        number: "03",
        icon: Gift,
        title: "Discover the right gift",
        description:
            "Receive carefully curated luxury recommendations, each selected with a thoughtful reason behind it.",
    },
];

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="bg-background py-32"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">

                {/* Section Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="mb-5 text-sm uppercase tracking-[0.35em] text-primary">
                        The CHARIS Experience
                    </p>

                    <h2 className="font-heading text-5xl leading-[1.08] tracking-tight text-primary lg:text-6xl">
                        Every meaningful gift begins
                        <br />
                        with a thoughtful conversation.
                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
                        From understanding the person to discovering the perfect
                        expression of thought, CHARIS makes luxury gifting personal,
                        intentional, and effortless.
                    </p>
                </motion.div>

                {/* Steps */}

                <div className="relative mt-24">

                    {/* Connecting Line */}

                    <div className="absolute left-[16.67%] right-[16.67%] top-10 hidden h-px bg-primary/20 md:block" />

                    <div className="grid gap-12 md:grid-cols-3 md:gap-8">

                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 35 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.15,
                                    }}
                                    className="relative text-center"
                                >

                                    {/* Icon */}

                                    <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-primary/20 bg-background shadow-sm">
                                        <Icon
                                            size={28}
                                            strokeWidth={1.5}
                                            className="text-primary"
                                        />
                                    </div>

                                    {/* Number */}

                                    <p className="mt-7 text-xs font-medium tracking-[0.3em] text-primary/60">
                                        {step.number}
                                    </p>

                                    {/* Title */}

                                    <h3 className="mt-3 font-heading text-3xl text-primary lg:text-4xl">
                                        {step.title}
                                    </h3>

                                    {/* Description */}

                                    <p className="mx-auto mt-4 max-w-sm text-base leading-7 text-muted-foreground">
                                        {step.description}
                                    </p>

                                </motion.div>
                            );
                        })}

                    </div>
                </div>

            </div>
        </section>
    );
}