import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/dummy-products";

type ProductPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ProductPage({
    params,
}: ProductPageProps) {
    const { id } = await params;

    const product = products.find(
        (product) => product.id === id
    );

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#F9F6F3] px-6 py-32">
            <div className="mx-auto max-w-6xl">

                {/* Header */}

                <p className="text-sm uppercase tracking-[0.35em] text-primary/60">
                    CHARIS COLLECTION
                </p>

                <h1 className="mt-6 max-w-3xl font-heading text-5xl leading-tight text-primary md:text-6xl">
                    {product.name}
                </h1>

                <p className="mt-4 text-lg text-muted-foreground">
                    {product.brand}
                </p>

                {/* Product */}

                <div className="mt-12 grid gap-12 lg:grid-cols-2">

                    {/* Product Image */}

                    <div className="relative min-h-[550px] overflow-hidden rounded-[40px] bg-[#F7F3EF] shadow-xl">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>

                    {/* Product information */}

                    <div className="rounded-[40px] bg-background p-10 shadow-xl">

                        <p className="text-base leading-8 text-muted-foreground">
                            {product.description}
                        </p>

                        <div className="my-8 h-px bg-primary/10" />

                        <div>
                            <p className="text-sm uppercase tracking-[0.25em] text-primary/60">
                                PRICE
                            </p>

                            <p className="mt-3 font-heading text-4xl text-primary">
                                ₹{product.price.toLocaleString("en-IN")}
                            </p>
                        </div>

                        <div className="my-8 h-px bg-primary/10" />

                        <div>
                            <p className="text-sm uppercase tracking-[0.25em] text-primary/60">
                                CATEGORY
                            </p>

                            <p className="mt-3 text-lg capitalize text-primary">
                                {product.category}
                            </p>
                        </div>

                    </div>

                </div>

                {/* Product Details */}

                <div className="mt-12 rounded-[40px] border border-primary/10 bg-background/40 p-10">

                    <p className="text-sm uppercase tracking-[0.25em] text-primary/60">
                        DETAILS
                    </p>

                    <div className="mt-8">

                        <p className="text-sm uppercase tracking-[0.2em] text-primary/50">
                            Suitable For
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {product.recipientTypes.map((type) => (
                                <span
                                    key={type}
                                    className="rounded-full border border-primary/10 px-4 py-2 text-sm text-primary"
                                >
                                    {type}
                                </span>
                            ))}
                        </div>

                    </div>

                    <div className="mt-10">

                        <p className="text-sm uppercase tracking-[0.2em] text-primary/50">
                            Interests
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {product.interests.map((interest) => (
                                <span
                                    key={interest}
                                    className="rounded-full border border-primary/10 px-4 py-2 text-sm text-primary"
                                >
                                    {interest}
                                </span>
                            ))}
                        </div>

                    </div>

                    <div className="mt-10">

                        <p className="text-sm uppercase tracking-[0.2em] text-primary/50">
                            Occasions
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {product.occasions.map((occasion) => (
                                <span
                                    key={occasion}
                                    className="rounded-full border border-primary/10 px-4 py-2 text-sm capitalize text-primary"
                                >
                                    {occasion}
                                </span>
                            ))}
                        </div>

                    </div>

                </div>

            </div>
        </main>
    );
}