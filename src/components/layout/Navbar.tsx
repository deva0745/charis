"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-background/90 backdrop-blur-md">

            {/* Navbar */}
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-24 lg:px-10">

                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="flex flex-col"
                >
                    <h1 className="font-heading text-3xl tracking-[0.2em] text-primary sm:text-4xl lg:text-5xl lg:tracking-[0.28em]">
                        CHARIS
                    </h1>

                    <span className="mt-0.5 text-[8px] uppercase tracking-[0.32em] text-muted-foreground sm:mt-1 sm:text-xs sm:tracking-[0.42em]">
                        Symbolic Gifting
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-10 md:flex lg:gap-12">
                    <Link
                        href="#about"
                        className="transition-colors hover:text-primary"
                    >
                        About
                    </Link>

                    <Link
                        href="#how-it-works"
                        className="transition-colors hover:text-primary"
                    >
                        Method
                    </Link>

                    <Link
                        href="#consultation"
                        className="transition-colors hover:text-primary"
                    >
                        Consultation
                    </Link>
                </nav>

                {/* Desktop Sign In */}
                <div className="hidden md:block">
                    <Button className="rounded-full px-7 lg:px-8">
                        Sign In
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? (
                        <X size={25} strokeWidth={1.5} />
                    ) : (
                        <Menu size={25} strokeWidth={1.5} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{
                            x: "100%",
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        exit={{
                            x: "100%",
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="border-t border-neutral-200 bg-background px-5 py-5 shadow-lg md:hidden"
                    >
                        <nav className="flex flex-col">

                            <Link
                                href="#about"
                                onClick={closeMenu}
                                className="border-b border-neutral-200 py-4 text-base transition-colors hover:text-primary"
                            >
                                About
                            </Link>

                            <Link
                                href="#how-it-works"
                                onClick={closeMenu}
                                className="border-b border-neutral-200 py-4 text-base transition-colors hover:text-primary"
                            >
                                Method
                            </Link>

                            <Link
                                href="#consultation"
                                onClick={closeMenu}
                                className="border-b border-neutral-200 py-4 text-base transition-colors hover:text-primary"
                            >
                                Consultation
                            </Link>

                            <Button
                                className="mt-5 w-full rounded-full"
                                onClick={closeMenu}
                            >
                                Sign In
                            </Button>

                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}