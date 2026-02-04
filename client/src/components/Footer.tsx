import { RiFacebookCircleFill, RiInstagramFill, RiTwitterXFill } from '@remixicon/react';

const Footer = () => {
    return (
        <footer className="border-t border-black/5">
            <div className="px-4 md:px-8 lg:px-20 xl:px-40 py-12 md:py-16 lg:py-20">
                <div className="max-w-[1920px] mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-12 mb-12 lg:mb-16">
                        {/* Company Info */}
                        <div className="flex flex-col gap-6">
                            {/* Logo */}
                            <div className="flex items-center gap-2">
                                <img src="/icons/berry-logo.svg" alt="" className="w-6 h-6" style={{ color: '#ec1337' }} />
                                <span className="text-[#181112] text-xl font-extrabold tracking-tight">
                                    BerryBliss
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-[#181112] text-sm leading-relaxed max-w-sm">
                                Elevating the berry experience through sustainable practices and artisanal care. From our farm to your heart.
                            </p>

                            {/* Social Media Icons */}
                            <div className="flex items-center gap-4">
                                <a
                                    href="#facebook"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#181112] hover:bg-[#ec1337] transition-colors"
                                    aria-label="Facebook"
                                >
                                    <RiFacebookCircleFill size={20} className="text-white" />
                                </a>
                                <a
                                    href="#instagram"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#181112] hover:bg-[#ec1337] transition-colors"
                                    aria-label="Instagram"
                                >
                                    <RiInstagramFill size={20} className="text-white" />
                                </a>
                                <a
                                    href="#twitter"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#181112] hover:bg-[#ec1337] transition-colors"
                                    aria-label="Twitter"
                                >
                                    <RiTwitterXFill size={20} className="text-white" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-[#181112] text-base font-bold">Quick Links</h3>
                            <div className="flex flex-col gap-4">
                                <a href="#our-story" className="text-[#181112] text-sm hover:text-[#ec1337] transition-colors">
                                    Our Story
                                </a>
                                <a href="#organic-farming" className="text-[#181112] text-sm hover:text-[#ec1337] transition-colors">
                                    Organic Farming
                                </a>
                                <a href="#berry-care" className="text-[#181112] text-sm hover:text-[#ec1337] transition-colors">
                                    Berry Care Guide
                                </a>
                                <a href="#wholesale" className="text-[#181112] text-sm hover:text-[#ec1337] transition-colors">
                                    Wholesale
                                </a>
                            </div>
                        </div>

                        {/* Customer Care */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-[#181112] text-base font-bold">Customer Care</h3>
                            <div className="flex flex-col gap-4">
                                <a href="#shipping" className="text-[#181112] text-sm hover:text-[#ec1337] transition-colors">
                                    Shipping Info
                                </a>
                                <a href="#returns" className="text-[#181112] text-sm hover:text-[#ec1337] transition-colors">
                                    Returns & Refunds
                                </a>
                                <a href="#gift-cards" className="text-[#181112] text-sm hover:text-[#ec1337] transition-colors">
                                    Gift Cards
                                </a>
                                <a href="#faqs" className="text-[#181112] text-sm hover:text-[#ec1337] transition-colors">
                                    FAQs
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-[#181112] text-base font-bold">Location</h3>
                            <p className="text-[#181112] text-sm leading-relaxed">
                                BerryBliss Farms<br />
                                Santa Clara Valley, CA 95051
                            </p>
                            <div className="rounded-2xl overflow-hidden border border-black/5">
                                <img
                                    src="/images/location-map.png"
                                    alt="BerryBliss Farms location map"
                                    className="w-full h-auto max-h-[120px] object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="pt-6 border-t border-black/5">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            {/* Copyright */}
                            <p className="text-[#181112] text-xs">
                                © 2024 BerryBliss Artisanal Fruits. All rights reserved.
                            </p>

                            {/* Legal Links */}
                            <div className="flex flex-wrap items-center gap-6">
                                <a href="#privacy" className="text-[#181112] text-xs hover:text-[#ec1337] transition-colors">
                                    Privacy Policy
                                </a>
                                <a href="#terms" className="text-[#181112] text-xs hover:text-[#ec1337] transition-colors">
                                    Terms of Service
                                </a>
                                <a href="#cookies" className="text-[#181112] text-xs hover:text-[#ec1337] transition-colors">
                                    Cookie Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
