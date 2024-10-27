import React, {useEffect, useState} from "react";

// icons
import {IoIosArrowDown, IoIosSearch} from "react-icons/io";

// react router dom
import {Link, useNavigate} from "react-router-dom";
import Search from "./Search";
import {FiGithub} from "react-icons/fi";
import {RxDiscordLogo} from "react-icons/rx";

import {motion} from "framer-motion";
import NewBadge from "../../Shared/NewBadge.jsx";

const Navbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [hasShadow, setHasShadow] = useState(false);
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleSearchClick = () => {
        setIsSearchOpen(true);
    };

    // light and dark mood
    const [toggle, setToggle] = useState(
        JSON.parse(localStorage.getItem("theme"))
            ? JSON.parse(localStorage.getItem("theme"))
            : false
    );

    const element = document.documentElement;

    localStorage.setItem("theme", JSON.stringify(toggle));

    useEffect(() => {
        if (toggle) {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
    }, [toggle]);

    const getTheRouteName = () => {
        return window.location.pathname
    }

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.zenuiSearchComponent') && !event.target.closest('.zenuiSearchInput')) {
            setIsSearchOpen(false)
        }
    })

    document.addEventListener('keydown', function (event) {
        event.stopPropagation();
        if ((event.ctrlKey || event.metaKey) && event.key === 's') {
            event.preventDefault();
            setIsSearchOpen(true)
        } else if (event.key === 'Escape') {
            setIsSearchOpen(false)
        }
    });

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setHasShadow(true);
        } else {
            setHasShadow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav
                className={`border-b border-gray-100 1024px:flex w-full px-10 backdrop-blur-lg sticky top-0 left-0 z-[999] hidden`}>
                <div className='max-w-[1615px] mx-auto w-full flex items-center justify-between'>
                    <div className="flex items-center gap-8">
                        {
                            getTheRouteName() === '/' && (
                                <div
                                    className='w-[100px] h-[300px] bg-[#9A04F5] absolute top-[-140px] opacity-30 left-0 blur-[70px] rotate-[-50deg]'></div>
                            )
                        }

                        <div className='relative mr-6'>
                            <span
                                className='px-2.5 absolute right-[-40px] text-[#a4a4a8] top-0 py-0.5 bg-[#f0f0f1] rounded-full text-[12px]'>
                                v2.0
                            </span>
                            <img
                                src="/darklogo.png"
                                alt="logo"
                                className="w-[70px] cursor-pointer z-10"
                                onClick={() => navigate("/")}
                            />
                        </div>
                        <ul className={`text-gray-600 flex items-center gap-8 font-[500] capitalize text-[1.2rem]`}>
                            <li className='cursor-pointer hover:text-[#0FABCA] transition-all duration-200'>About Us</li>
                            <li
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className='cursor-pointer relative py-[23px] hover:text-[#0FABCA] transition-all duration-200 flex items-center gap-[8px]'
                            >
                                Developer Kit
                                <IoIosArrowDown className={`${isHovered ? 'rotate-[180deg]': 'rotate-0'} transition-all duration-300`}/>

                                {isHovered && (
                                    <motion.div
                                        initial={{opacity: 0, scale: 0.8}}
                                        animate={{opacity: 1, scale: 1}}
                                        exit={{opacity: 0, scale: 0.8}}
                                        className="absolute top-[68px] left-0 gap-[30px] w-[600px] grid grid-cols-2 bg-white border border-gray-200 shadow-sm rounded-md p-6 mt-2"
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    >
                                        <div className='flex flex-col text-[1rem]'>
                                            <Link to='/getting-started/templates' className='p-[10px] transition-all duration-200 hover:bg-gray-50 rounded-md'>
                                                <p className='cursor-pointer leading-[20px] text-gray-600 transition-all duration-200'>
                                                    Templates
                                                </p>
                                                <span className='text-[0.8rem] font-[300] text-gray-500'>Ready-made layouts to start fast.</span>
                                            </Link>

                                            <Link to='/blocks/all-blocks' className='p-[10px] transition-all duration-200 hover:bg-gray-50 rounded-md'>
                                                <p className='cursor-pointer leading-[20px] text-gray-600 transition-all duration-200'>
                                                    Blocks
                                                </p>
                                                <span className='text-[0.8rem] font-[300] text-gray-500'>Modular components for easy design.</span>
                                            </Link>

                                            <Link to='/icons' className='p-[10px] transition-all duration-200 hover:bg-gray-50 rounded-md'>
                                                <p className='cursor-pointer leading-[20px] text-gray-600 transition-all duration-200'>
                                                    Icons
                                                </p>
                                                <span className='text-[0.8rem] font-[300] text-gray-500'>Scalable icons for clear visuals.</span>
                                            </Link>
                                        </div>

                                        <div className='flex flex-col text-[1rem]'>
                                            <Link to='/getting-started/custom-hooks' className='p-[10px] transition-all duration-200 hover:bg-gray-50 rounded-md'>
                                                <p className='cursor-pointer leading-[20px] text-gray-600 transition-all duration-200 flex items-center gap-[10px]'>
                                                    Custom Hooks

                                                    <span
                                                        className="px-3 w-max py-[0.02rem] uppercase border border-[#0ea8c7] bg-[#0ea8c7] text-[#fff] rounded-full text-[0.5rem] font-[500]">
                                                        New
                                                    </span>
                                                </p>
                                                <span className='text-[0.8rem] font-[300] text-gray-500'>Reusable React logic helpers.</span>
                                            </Link>

                                            <Link to='/getting-started/resources' className='p-[10px] transition-all duration-200 hover:bg-gray-50 rounded-md'>
                                                <p className='cursor-pointer leading-[20px] text-gray-600 transition-all duration-200'>
                                                    Resources
                                                </p>
                                                <span className='text-[0.8rem] font-[300] text-gray-500'>Tools and guides for developers.</span>
                                            </Link>

                                            <Link to='/color-palette' className='p-[10px] transition-all duration-200 hover:bg-gray-50 rounded-md'>
                                                <p className='cursor-pointer leading-[20px] text-gray-600 transition-all duration-200'>
                                                    Color Palettes
                                                </p>
                                                <span className='text-[0.8rem] font-[300] text-gray-500'>Harmonized color sets.</span>
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-2 w-[30%]">
                        <div className="zenuiSearchInput relative w-full" onClick={handleSearchClick}>
                            <IoIosSearch
                                className={`text-gray-400 absolute left-3 top-[0.6rem] text-[1.5rem]`}/>
                            <input
                                type="search"
                                name=""
                                id=""
                                readOnly={true}
                                placeholder="Search..."
                                className={`py-[0.59rem] pl-10 border w-full bg-transparent border-gray-200 rounded-md focus:ring-0 outline-none`}
                            />
                            <span
                                className={`text-gray-500 bg-gray-50 border-gray-200 px-2 py-1 text-[0.8rem] font-[500] rounded-md h-[75%] absolute right-1.5 border top-[0.35rem] flex items-center justify-center`}>
              Ctrl + S
            </span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <a href='https://discord.gg/qbwytm4WUG' target='_blank'>
                                <RxDiscordLogo
                                    className={`text-[2.7rem] text-gray-400 rounded-md p-[6px] border border-gray-200 cursor-pointer`}/>
                            </a>

                            <a href='https://github.com/Asfak00/zenui-library' target='_blank'>
                                <FiGithub
                                    className={`text-[2.7rem] text-gray-400 rounded-md p-[6px] border border-gray-200 cursor-pointer`}/>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={`${isSearchOpen ? 'visible z-[100]' : 'invisible z-[-1]'} transition-all duration-500`}>
                <Search isSearchOpen={isSearchOpen}/>
            </div>
        </>
    );
};

export default Navbar;
