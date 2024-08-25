"use client"
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    const navItems = [
        {
            name: "Home",
            link: "/",
            //   icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Products",
            link: "/products",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#121212" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>,
        },
        {
            name: "Resources",
            link: "/resources",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#121212" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>

        },
        {
            name: "Pricing",
            link: "/pricing",
            //   icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />

        },
    ];

    return (
        <nav className="bg-white dark:bg-gray-800 w-full px-2">
            <div className="">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between lg:w-1/3">
                        <h1 className='text-4xl text-black font-medium'><span className='text-violet-400'>N</span>AV<span className='text-violet-400'>B</span>AR</h1>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 8h16M4 16h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div
                        className={`absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                            } rounded-b-2xl`}
                    >

                        <div className="flex flex-col gap-2 lg:gap-10 capitalize lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                            {navItems.map((navItem: any, idx: number) => (
                                <Link
                                    key={`link=${idx}`}
                                    href={navItem.link}
                                    className={cn(
                                        "relative text-black font-semibold items-center flex space-x-1  dark:hover:text-neutral-300 hover:text-neutral-500"
                                    )}
                                >
                                    <span className="text-sm">{navItem.name}</span>
                                    <span className="block">{navItem.icon}</span>
                                </Link>
                            ))}

                        </div>

                        <div className="flex justify-center lg:justify-end gap-2 mt-6 lg:flex lg:mt-0 lg:-mx-2 lg:w-1/3">
                            <button className="border text-sm relative border-neutral-200 dark:border-white/[0.2] text-violet-500 bg-violet-100 font-semibold dark:text-white rounded-md px-4 py-1">
                                <span>Log in</span>
                                
                            </button>
                            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-white px-4 py-2 rounded-md bg-violet-500">
                                <span>Sign Up</span>
                                
                            </button>


                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
