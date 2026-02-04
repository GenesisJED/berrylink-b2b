import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-20 xl:px-40 pt-4">
            <nav className="max-w-[1920px] mx-auto bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 py-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src="/icons/berry-logo.svg" alt="" className="w-8 h-8" style={{ color: '#ec1337' }} />
                        <span className="text-[#181112] text-lg md:text-xl font-extrabold tracking-tight">
                            BerryBliss
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        <a href="#shop" className="text-[#181112] text-sm font-semibold hover:text-[#ec1337] transition-colors">
                            Shop
                        </a>
                        <a href="#our-story" className="text-[#181112] text-sm font-semibold hover:text-[#ec1337] transition-colors">
                            Our Story
                        </a>
                        <a href="#sustainability" className="text-[#181112] text-sm font-semibold hover:text-[#ec1337] transition-colors">
                            Sustainability
                        </a>
                        <a href="#recipes" className="text-[#181112] text-sm font-semibold hover:text-[#ec1337] transition-colors">
                            Recipes
                        </a>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-3 md:gap-4">
                        {/* Search Bar - Hidden on mobile */}
                        <div className="hidden md:flex items-center gap-2 bg-black/5 rounded-2xl px-4 py-2.5 min-w-[200px]">
                            <img src="/icons/search.svg" alt="" className="w-3.5 h-3.5" style={{ color: '#181112' }} />
                            <input
                                type="text"
                                placeholder="Search berries..."
                                className="bg-transparent text-[#181112] text-sm placeholder:text-[#181112]/60 outline-hidden w-full"
                            />
                        </div>

                        {/* Cart Icon with Badge */}
                        <button className="relative" aria-label="Shopping cart">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="3" fill="currentColor" className="text-[#181112]" />
                                    <circle cx="6" cy="6" r="2" fill="currentColor" className="text-[#181112]" />
                                    <circle cx="14" cy="6" r="2" fill="currentColor" className="text-[#181112]" />
                                    <circle cx="6" cy="14" r="2" fill="currentColor" className="text-[#181112]" />
                                    <circle cx="14" cy="14" r="2" fill="currentColor" className="text-[#181112]" />
                                </svg>
                            </div>
                            {/* Badge */}
                            <div className="absolute -top-0.5 -right-0.5 bg-[#ec1337] rounded-full min-w-[16px] h-4 flex items-center justify-center px-1">
                                <span className="text-white text-[10px] font-bold leading-none">3</span>
                            </div>
                        </button>

                        {/* User Avatar */}
                        <button className="hidden md:block" aria-label="User profile">
                            <img
                                src="/images/user-avatar.png"
                                alt="User"
                                className="w-9 h-9 rounded-full border-2 border-[#ec1337]/20 object-cover"
                            />
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isMenuOpen ? (
                                    <>
                                        <path d="M5 5L15 15M5 15L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </>
                                ) : (
                                    <>
                                        <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-black/5 px-4 py-4">
                        <div className="flex flex-col gap-4">
                            {/* Mobile Search */}
                            <div className="flex items-center gap-2 bg-black/5 rounded-2xl px-4 py-2.5">
                                <img src="/icons/search.svg" alt="" className="w-3.5 h-3.5" style={{ color: '#181112' }} />
                                <input
                                    type="text"
                                    placeholder="Search berries..."
                                    className="bg-transparent text-[#181112] text-sm placeholder:text-[#181112]/60 outline-hidden w-full"
                                />
                            </div>

                            {/* Mobile Navigation Links */}
                            <a href="#shop" className="text-[#181112] text-sm font-semibold py-2 hover:text-[#ec1337] transition-colors">
                                Shop
                            </a>
                            <a href="#our-story" className="text-[#181112] text-sm font-semibold py-2 hover:text-[#ec1337] transition-colors">
                                Our Story
                            </a>
                            <a href="#sustainability" className="text-[#181112] text-sm font-semibold py-2 hover:text-[#ec1337] transition-colors">
                                Sustainability
                            </a>
                            <a href="#recipes" className="text-[#181112] text-sm font-semibold py-2 hover:text-[#ec1337] transition-colors">
                                Recipes
                            </a>

                            {/* Mobile User Profile */}
                            <div className="flex items-center gap-3 pt-2 border-t border-black/5 md:hidden">
                                <img
                                    src="/images/user-avatar.png"
                                    alt="User"
                                    className="w-9 h-9 rounded-full border-2 border-[#ec1337]/20 object-cover"
                                />
                                <span className="text-[#181112] text-sm font-semibold">My Account</span>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
