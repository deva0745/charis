"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Brain, Gift, HeartHandshake } from "lucide-react";

import aboutImage from "@/assets/images/about.jpg";

const features = [
    {
        icon: Brain,
        title: "Thoughtful Intelligence",
        description:
            "Artificial intelligence that understands people before recommending products.",
    },
    {
        icon: Gift,
        title: "Curated Excellence",
        description:
            "Every recommendation is selected from exceptional luxury brands and timeless collections.",
    },
    {
        icon: HeartHandshake,
        title: "Human Connection",
        description:
            "Because the most memorable gifts are those that express genuine emotion and intention.",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="bg-[#F7F3EF] py-36"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">

                {/* IMAGE + TEXT */}

                <div className="grid items-center gap-20 lg:grid-cols-[1.1fr_1fr]">

                    {/* IMAGE */}

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="overflow-hidden rounded-[40px] shadow-2xl transition duration-300 hover:scale-103">

                            <Image
                                src={aboutImage}
                                alt="About CHARIS"
                                width={900}
                                height={900}
                                priority
                                className="h-[700px] w-[700px] object-cover"
                            />

                        </div>
                    </motion.div>

                    {/* TEXT */}

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >

                        <p className="mb-5 uppercase tracking-[0.35em] text-sm text-primary">
                            WHY WE EXIST
                        </p>

                        <h2 className="max-w-xl font-heading text-[4.8rem] leading-[1.06] tracking-tight text-primary">
                            Luxury is not
                            <br />
                            about spending
                            <br />
                            more. It's about
                            <br />
                            meaning more.
                        </h2>

                        <p className="mt-10 max-w-xl text-[1.18rem] leading-9 text-muted-foreground">
                            CHARIS was created to redefine luxury gifting for the modern
                            world. We believe extraordinary gifts are never chosen by chance;
                            they are chosen through understanding. By combining human emotion,
                            thoughtful design, and artificial intelligence, we help people
                            celebrate life's most meaningful moments with gifts that feel
                            personal, timeless, and unforgettable.
                        </p>

                    </motion.div>

                </div>

                {/* FEATURES */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-28 grid gap-8 md:grid-cols-3"
                >

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                }}
                                className="group rounded-[40px] border border-primary/10 bg-background/40 p-10 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20"
                            >

                                <div className="flex justify-center">

                                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/15 bg-primary/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">

                                        <Icon
                                            size={34}
                                            strokeWidth={1.6}
                                        />

                                    </div>

                                </div>

                                <h3 className="mt-8 font-heading text-[2rem] text-primary">
                                    {feature.title}
                                </h3>

                                <p className="mx-auto mt-5 max-w-xs leading-8 text-muted-foreground">
                                    {feature.description}
                                </p>

                            </motion.div>
                        );
                    })}

                </motion.div>

            </div>
        </section>
    );
}