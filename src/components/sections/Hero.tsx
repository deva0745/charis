"use client";

import Image from "next/image";
import { motion } from "motion/react";
import heroImage from "@/assets/images/hero.jpg";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="bg-background">
            <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pt-32 pb-24 lg:grid-cols-[1fr_1.1fr] lg:px-10">

                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    <p className="mb-8 uppercase tracking-[0.35em] text-sm text-primary">
                        Luxury AI Gift Concierge
                    </p>

                    <h1 className="font-heading text-6xl leading-[1.15] tracking-tight text-primary lg:text-[6rem]">
                        The right gift
                        <br />
                        begins with
                        <br />
                        understanding.
                    </h1>

                    <p className="mt-10 max-w-xl text-xl leading-10 text-muted-foreground">
                        CHARIS helps you discover meaningful luxury gifts through an
                        intelligent conversation that understands the recipient,
                        the relationship, and the moment.
                    </p>

                    <motion.div
                        className="mt-12 flex gap-5"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.6,
                        }}
                    >
                        <Button
                            size="lg"
                            className="rounded-full px-10 py-7"
                        >
                            Begin Consultation
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-full border-primary px-10 py-7"
                        >
                            Explore Method
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Right */}
                <motion.div
                    className="flex justify-end"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                    }}
                >
                    <div className="overflow-hidden rounded-[40px] transition duration-300 hover:scale-103 shadow-2xl">
                        <Image
                            src={heroImage}
                            alt="Luxury Gift"
                            width={900}
                            height={900}
                            priority
                            className="h-[700px] w-[700px] object-cover"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}