"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-background/90 backdrop-blur">
            <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">

                {/* Logo */}
                <Link href="/" className="flex flex-col">
                    <h1 className="font-heading text-5xl tracking-[0.28em] text-primary">
                        CHARIS
                    </h1>

                    <span className="mt-1 text-xs uppercase tracking-[0.42em] text-muted-foreground">
                        Symbolic Gifting
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden items-center gap-12 md:flex">
                    <Link href="#about" className="transition hover:text-primary">
                        About
                    </Link>

                    <Link href="#method" className="transition hover:text-primary">
                        Method
                    </Link>

                    <Link href="#consultation" className="transition hover:text-primary">
                        Consultation
                    </Link>
                </nav>

                {/* Button */}
                <Button className="rounded-full px-8">
                    Sign In
                </Button>

            </div>
        </header>
    );
}