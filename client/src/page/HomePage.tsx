import { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface Product {
    id: string;
    name: string;
    price: string | number;
    stock: number;
}

const HomePage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 2 },
            '(min-width: 1024px)': { slidesToScroll: 4 }
        }
    });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    useEffect(() => {
        const apiUrl = import.meta.env.VITE_API_URL;
        if (apiUrl) {
            fetch(`${apiUrl}/products`)
                .then(res => res.json())
                .then(data => setProducts(data))
                .catch(err => console.error("Error conectando al server:", err));
        }
    }, []);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    // Default product images for fallback
    const productImages = [
        '/images/product-1.svg',
        '/images/product-2.svg',
        '/images/product-3.svg',
        '/images/product-4.svg'
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="px-4 md:px-8 lg:px-20 xl:px-40 py-12 md:py-16 lg:py-20 pt-24 md:pt-28 lg:pt-32">
                <div className="max-w-[1920px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-12 items-center">
                        {/* Left Content */}
                        <div className="flex flex-col gap-4 md:gap-6">
                            <div className="flex flex-col gap-4">
                                <p className="text-[#ec1337] text-sm font-bold tracking-[1.4px] uppercase">
                                    Organic & Hand-Picked
                                </p>
                                <h1 className="text-[#181112] text-4xl md:text-5xl lg:text-[72px] font-extrabold leading-tight lg:leading-[72px] tracking-[-0.025em]">
                                    The Purest <span className="text-[#ec1337]">Red</span> You've
                                    <br />Ever Tasted.
                                </h1>
                                <p className="text-[#181112] text-base md:text-lg leading-relaxed max-w-lg">
                                    Experience the peak of sweetness and aroma with our farm-fresh artisanal strawberries, delivered directly to your doorstep within 24 hours of harvest.
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-[#ec1337] text-white px-6 py-3.5 rounded-full text-lg font-bold hover:bg-[#d00f2f] transition-colors">
                                    Shop Collections
                                </button>
                                <button className="text-[#181112] px-6 py-3.5 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
                                    Our Process
                                </button>
                            </div>

                            {/* Social Proof */}
                            <div className="flex items-center gap-4">
                                <img src="/images/avatars.svg" alt="Customer avatars" className="h-10" />
                                <p className="text-[#181112] text-sm font-medium">
                                    Joined by 2,400+ strawberry lovers
                                </p>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="/images/hero-strawberry.svg"
                                alt="Fresh strawberry"
                                className="w-full max-w-md lg:max-w-lg xl:max-w-[776px] h-auto rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Seasonal Picks Section */}
            <section className="bg-[#fffdf5] px-4 md:px-8 lg:px-20 xl:px-40 py-12 md:py-16 lg:py-20">
                <div className="max-w-[1920px] mx-auto">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-[#181112] text-2xl md:text-3xl font-extrabold leading-tight">
                                Seasonal Picks
                            </h2>
                            <p className="text-[#181112] text-base">
                                Limited edition varieties available this month only.
                            </p>
                        </div>

                        {/* Navigation Arrows - Hidden on Mobile */}
                        <div className="hidden md:flex gap-3">
                            <button
                                onClick={scrollPrev}
                                disabled={!canScrollPrev}
                                className="w-10 h-10 bg-[#181112] rounded-full flex items-center justify-center hover:bg-[#2a2224] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                                aria-label="Previous"
                            >
                                <img src="/icons/chevron-left.svg" alt="" className="w-3 h-3 invert" />
                            </button>
                            <button
                                onClick={scrollNext}
                                disabled={!canScrollNext}
                                className="w-10 h-10 bg-[#181112] rounded-full flex items-center justify-center hover:bg-[#2a2224] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                                aria-label="Next"
                            >
                                <img src="/icons/chevron-right.svg" alt="" className="w-3 h-3 invert" />
                            </button>
                        </div>
                    </div>

                    {/* Carousel */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-4 md:gap-6 lg:gap-8">
                            {products.length > 0 ? (
                                products.map((product, index) => (
                                    <div
                                        key={product.id}
                                        className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_22%] min-w-0"
                                    >
                                        <div className="flex flex-col gap-4">
                                            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                                                <img
                                                    src={productImages[index % productImages.length]}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex items-end justify-between gap-2">
                                                <div className="flex flex-col gap-1">
                                                    <h3 className="text-[#181112] text-lg md:text-xl font-bold">
                                                        {product.name}
                                                    </h3>
                                                    <p className="text-[#181112] text-sm">
                                                        Stock: {product.stock}
                                                    </p>
                                                </div>
                                                <p className="text-[#ec1337] text-base font-extrabold whitespace-nowrap">
                                                    ${Number(product.price).toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                // Fallback placeholder cards while loading
                                [1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_22%] min-w-0"
                                    >
                                        <div className="flex flex-col gap-4 animate-pulse">
                                            <div className="bg-gray-200 rounded-3xl aspect-[4/5]"></div>
                                            <div className="flex items-end justify-between gap-2">
                                                <div className="flex flex-col gap-2 flex-1">
                                                    <div className="bg-gray-200 h-6 rounded w-3/4"></div>
                                                    <div className="bg-gray-200 h-4 rounded w-1/2"></div>
                                                </div>
                                                <div className="bg-gray-200 h-6 rounded w-20"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Mobile Navigation Dots */}
                    <div className="flex md:hidden justify-center gap-2 mt-6">
                        {products.length > 0 && products.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => emblaApi?.scrollTo(index)}
                                className="w-2 h-2 rounded-full bg-[#181112] opacity-30 hover:opacity-50"
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* The Berry Bliss Process Section */}
            <section className="px-4 md:px-8 lg:px-20 xl:px-40 py-12 md:py-16 lg:py-20">
                <div className="max-w-[1920px] mx-auto">
                    <div className="flex flex-col gap-12 md:gap-16">
                        {/* Section Header */}
                        <div className="flex flex-col gap-4 max-w-2xl">
                            <h2 className="text-[#181112] text-3xl md:text-4xl font-extrabold leading-tight">
                                The Berry Bliss Process
                            </h2>
                            <p className="text-[#181112] text-base md:text-lg leading-relaxed">
                                We believe that the best flavor comes from the best care. From the soil to your table, we oversee every step of the journey.
                            </p>
                        </div>

                        {/* Process Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {/* Card 1: Organic Farming */}
                            <div className="flex flex-col gap-6 p-6 md:p-8 border border-black/5 rounded-2xl">
                                <div className="w-14 h-14 bg-[#ec1337] rounded-2xl flex items-center justify-center">
                                    <img src="/icons/leaf.svg" alt="" className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-[#181112] text-xl font-bold">
                                        Organic Farming
                                    </h3>
                                    <p className="text-[#181112] text-base leading-relaxed">
                                        No synthetic pesticides or harsh chemicals. We use natural predators and organic compost to keep our berries healthy.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2: Careful Picking */}
                            <div className="flex flex-col gap-6 p-6 md:p-8 border border-black/5 rounded-2xl">
                                <div className="w-14 h-14 bg-[#4a7c44] rounded-2xl flex items-center justify-center">
                                    <img src="/icons/hand.svg" alt="" className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-[#181112] text-xl font-bold">
                                        Careful Picking
                                    </h3>
                                    <p className="text-[#181112] text-base leading-relaxed">
                                        Each strawberry is hand-inspected for ripeness. Only the perfect ones make it into your basket, ensuring peak flavor.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3: Rapid Delivery */}
                            <div className="flex flex-col gap-6 p-6 md:p-8 border border-black/5 rounded-2xl">
                                <div className="w-14 h-14 bg-[#ec1337] rounded-2xl flex items-center justify-center">
                                    <img src="/icons/lightning.svg" alt="" className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-[#181112] text-xl font-bold">
                                        Rapid Delivery
                                    </h3>
                                    <p className="text-[#181112] text-base leading-relaxed">
                                        From farm to door in under 24 hours. Our cold-chain logistics ensure your berries arrive chilled and ready to eat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="px-4 md:px-8 lg:px-20 xl:px-40 py-12 md:py-16 lg:py-20">
                <div className="max-w-[1920px] mx-auto">
                    <div className="relative bg-[#ec1337] rounded-3xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16">
                            {/* Left Content */}
                            <div className="flex flex-col gap-6 z-10 relative">
                                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                                    Join the Berry Pulse
                                </h2>
                                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-md">
                                    Get exclusive access to seasonal varieties, recipes, and farm updates before anyone else.
                                </p>

                                {/* Email Form */}
                                <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="flex-1 px-5 py-3 rounded-full bg-white/10 border-2 border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 backdrop-blur-sm"
                                    />
                                    <button className="bg-white text-[#ec1337] px-6 py-3 rounded-full text-base font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
                                        Subscribe Now
                                    </button>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="relative flex items-center justify-center lg:justify-end">
                                <div className="relative">
                                    {/* Blur overlay effect */}
                                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-[80px]"></div>
                                    <img
                                        src="/images/newsletter-berries.png"
                                        alt="Fresh strawberries"
                                        className="relative rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.25)] w-full max-w-md lg:max-w-lg object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default HomePage
