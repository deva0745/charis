"use client";

import Image from "next/image";
import { motion } from "motion/react";
import heroImage from "@/assets/images/hero.jpg";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="bg-background">
            <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pt-20 pb-20 sm:gap-16 sm:px-6 sm:pt-32 sm:pb-24 lg:grid-cols-[1fr_1.1fr] lg:px-10">

                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    <p className="mb-6 text-sm uppercase tracking-[0.3em] text-primary sm:mb-8 sm:tracking-[0.35em]">
                        Luxury AI Gift Concierge
                    </p>

                    <h1 className="font-heading text-5xl leading-[1.1] tracking-tight text-primary sm:text-6xl sm:leading-[1.15] lg:text-[6rem]">
                        The right gift
                        <br />
                        begins with
                        <br />
                        understanding.
                    </h1>

                    <p className="mt-7 mb-7 max-w-xl text-base leading-7 text-muted-foreground sm:mt-8 sm:text-lg sm:leading-8 lg:mt-10 lg:text-xl lg:leading-10">
                        CHARIS helps you discover meaningful luxury gifts through an
                        intelligent conversation that understands the recipient,
                        the relationship, and the moment.
                    </p>

                    <motion.div
                        className="mt-9 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:gap-5 lg:mt-12"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.6,
                        }}
                    >
                        <Button
                            onClick={() => {
                                document
                                    .getElementById("consultation")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                            size="lg"
                            className="w-full rounded-full px-8 py-7 sm:w-auto sm:px-10"
                        >
                            Begin Consultation
                        </Button>


                        <Button
                            onClick={() => {
                                document
                                    .getElementById("how-it-works")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                            size="lg"
                            variant="outline"
                            className="w-full rounded-full border-primary px-8 py-7 sm:w-auto sm:px-10"
                        >
                            Explore Method
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Right */}
                <motion.div
                    className="flex justify-center lg:justify-end"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                    }}
                >
                    <div className="overflow-hidden rounded-[40px] shadow-2xl transition duration-300 hover:scale-103">
                        <Image
                            src={heroImage}
                            alt="Luxury Gift"
                            width={900}
                            height={900}
                            priority
                            className="h-[650px] w-[650px] object-cover"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}