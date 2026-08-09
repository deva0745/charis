"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section
            id="consultation"
            className="bg-[#F9F6F3] py-32"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="rounded-[40px] bg-primary px-6 py-24 text-center shadow-2xl md:px-12"
                >

                    <p className="mb-5 text-sm uppercase tracking-[0.35em] text-primary-foreground/70">
                        BEGIN WITH CHARIS
                    </p>

                    <h2 className="mx-auto max-w-4xl font-heading text-5xl leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
                        Give something that truly means something.
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-primary-foreground/75 md:text-xl">
                        Tell us about the person and the moment. CHARIS will help
                        you discover a thoughtful gift chosen with intention.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-10"
                    >
                        <button
                            className="inline-flex items-center gap-3 rounded-full bg-background px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all duration-300 hover:shadow-xl"
                        >
                            Begin Consultation
                            <ArrowRight size={18} />
                        </button>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
}