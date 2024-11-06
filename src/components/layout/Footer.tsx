import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const footerImage = "https://editabledev.wpenginepowered.com/wp-content/uploads/editable-by-lumel-logo.svg"
    
    return (
        <footer className="py-8 md:py-12 bg-white w-full flex items-center justify-center shadow-lg">
            <div className="w-full max-w-6xl px-4 md:px-6">
                {/* Top section with logo, description, and contact */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
                    {/* Left column with logo and description */}
                    <div className="flex-1">
                        <div className="flex justify-center lg:justify-start">
                            <img src={footerImage} alt="Writeback Matrix" className="h-12 md:h-16" />
                        </div>
                        {/* Description */}
                        <div className="mt-4">
                            <p className="text-gray-700 text-center lg:text-left text-sm md:text-base">
                                EDITable is a no-code table editor that helps business users edit
                                master data / reference data / meta data LIVE directly in their data
                                platforms such as Azure SQL, Microsoft Fabric, Data Bricks, Snowflake,
                                Postgres, and more.
                            </p>
                        </div>
                    </div>

                    {/* Right column with headquarters and social */}
                    <div className="lg:w-96">
                        {/* Headquarters */}
                        <div className="text-center lg:text-right">
                            <h2 className="font-semibold mb-2">Headquarters</h2>
                            <div className="text-gray-600">
                                <p>5920 Windhaven Pkwy</p>
                                <p>Plano TX 75093</p>
                            </div>
                        </div>

                        {/* Social icons */}
                        <div className="mt-4 flex justify-center lg:justify-end gap-4">
                            <a href="#" className="text-emerald-500 hover:text-emerald-600">
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a href="#" className="text-emerald-500 hover:text-emerald-600">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom navigation */}
                <div className="mt-8 flex flex-col md:flex-row border-t border-gray-200 pt-8">
                    <div className="text-center md:text-left md:mb-0 mb-4">
                        <span className="text-gray-600 text-sm">Copyright © EDITable</span>
                    </div>
                    <div className="flex-1 flex flex-wrap justify-center md:justify-end gap-2 md:gap-0">
                        <Link href="/contact" className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
                            Contact Us
                        </Link>
                        <Link href="/about" className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
                            About Us
                        </Link>
                        <Link href="/privacy" className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
                            Privacy Policy
                        </Link>
                        <Link href="/eula" className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
                            EULA
                        </Link>
                        <Link href="/docs" className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
                            Documentation
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;