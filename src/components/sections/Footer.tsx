"use client";

import { motion } from "motion/react";

const exploreLinks = [
    {
        label: "About",
        href: "#about",
    },
    {
        label: "How It Works",
        href: "#how-it-works",
    },
    {
        label: "Consultation",
        href: "#consultation",
    },
];

const connectLinks = [
    {
        label: "Instagram",
        href: "#",
    },
    {
        label: "LinkedIn",
        href: "#",
    },
    {
        label: "Email",
        href: "mailto:hello@charis.com",
    },
];

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">

                {/* Upper Footer */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="grid gap-16 py-20 md:grid-cols-[1.5fr_1fr_1fr] md:gap-12"
                >

                    {/* Brand */}

                    <div>
                        <h2 className="font-heading text-5xl tracking-tight">
                            CHARIS
                        </h2>

                        <p className="mt-5 max-w-sm text-base leading-7 text-primary-foreground/70">
                            Thoughtful gifting, chosen with intention.
                        </p>
                    </div>

                    {/* Explore */}

                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/50">
                            Explore
                        </p>

                        <div className="mt-6 flex flex-col gap-4">
                            {exploreLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="w-fit text-sm text-primary-foreground/80 transition-colors duration-300 hover:text-primary-foreground"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Connect */}

                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/50">
                            Connect
                        </p>

                        <div className="mt-6 flex flex-col gap-4">
                            {connectLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="w-fit text-sm text-primary-foreground/80 transition-colors duration-300 hover:text-primary-foreground"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                </motion.div>

                {/* Bottom Footer */}

                <div className="border-t border-primary-foreground/15">
                    <div className="flex flex-col gap-4 py-7 text-sm text-primary-foreground/50 md:flex-row md:items-center md:justify-between">

                        <p>
                            © 2026 CHARIS. All rights reserved.
                        </p>

                        <div className="flex gap-6">
                            <a
                                href="#"
                                className="transition-colors duration-300 hover:text-primary-foreground"
                            >
                                Privacy
                            </a>

                            <a
                                href="#"
                                className="transition-colors duration-300 hover:text-primary-foreground"
                            >
                                Terms
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
}