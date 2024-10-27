import React, {useState} from "react";

// icons
import {CiMenuFries} from "react-icons/ci";
import {IoIosArrowDown, IoIosSearch} from "react-icons/io";
import {RxCross2, RxDiscordLogo} from "react-icons/rx";
import {FiGithub} from "react-icons/fi";

// react router dom
import {Link, useNavigate} from "react-router-dom";
import Search from "./Search";
import {motion} from "framer-motion";

const MobileNavbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navigate = useNavigate();

    const handleSearchClick = () => {
        setIsSearchOpen(true);
    };

    const getTheRouteName = () => {
        return window.location.pathname
    }

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.zenuiSearchComponent') && !event.target.closest('.zenuiSearchInput')) {
            setIsSearchOpen(false)
        }

        if (!event.target.closest('.mobileSidebar') && !event.target.closest('.mobileSidebarButton')) {
            setSidebarOpen(false)
        }
    })

    return (
        <>
            <nav
                className="flex 1024px:hidden items-center justify-between w-full px-5 640px:px-10 backdrop-blur-md  py-3 shadow-sm sticky shadow-shadowColor top-0 left-0 z-50">
                <div className="flex items-center gap-8 relative">
                    <div
                        className='w-[100px] h-[300px] bg-[#9A04F5] absolute top-[-150px] opacity-30 left-0 blur-[70px] rotate-[-50deg]'></div>

                    <div className='relative'>
                        <span
                            className='px-2 absolute right-[-33px] text-[#a4a4a8] top-1 py-[1px] bg-[#f0f0f1] rounded-full text-[10px]'>
                            v2.0
                        </span>
                        <img
                            src="/darklogo.png"
                            alt="logo"
                            className="w-[60px] 1024px:w-[70px] z-20 cursor-pointer"
                            onClick={() => navigate("/")}
                        />
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <a href='https://discord.gg/qbwytm4WUG' target='_blank'>
                            <RxDiscordLogo
                                className={`text-[2.3rem] text-gray-400 rounded-md p-[6px] border border-gray-200 cursor-pointer`}/>
                        </a>

                        <a href='https://github.com/Asfak00/zenui-library' target='_blank'>
                            <FiGithub
                                className={`text-[2.3rem] text-gray-400 rounded-md p-[6px] border border-gray-200 cursor-pointer`}/>
                        </a>
                    </div>

                    <CiMenuFries onClick={() => setSidebarOpen(!sidebarOpen)}
                                 className="text-[2.3rem] mobileSidebarButton text-gray-400 rounded-md p-[6px] border border-gray-200 cursor-pointer"/>
                </div>
            </nav>

            {/*  sidebar  */}
            <aside
                className={`${sidebarOpen ? 'translate-x-0 opacity-100 z-[999]' : 'translate-x-[200px] opacity-0 z-[-1]'} fixed top-0 mobileSidebar right-0 py-5 px-[1.3rem] w-[90%] block 1024px:hidden 640px:w-[50%] h-screen transition-all duration-500 bg-white toastshadow overflow-y-auto`}>

                <RxCross2 className='text-[1.3rem] text-gray-700 mb-[20px] absolute left-[15px]' onClick={()=> setSidebarOpen(false)}/>

                <div className="zenuiSearchInput mt-[45px] relative w-full" onClick={handleSearchClick}>
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
                <ul className='text-gray-600 flex flex-col mt-5 items-start gap-4 font-[500] capitalize text-[1rem]'>
                    <li>About Us</li>
                    <li onClick={() => setDropdownOpen(!dropdownOpen)}
                        className='cursor-pointer flex items-center gap-[8px]'>
                        Developer Kit
                        <IoIosArrowDown className={`${dropdownOpen ? 'rotate-[180deg]': 'rotate-0'} transition-all duration-300`}/>
                    </li>

                    {
                        dropdownOpen && (
                            <motion.div
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: -20}}
                                className="grid grid-cols-1 gap-[20px] ml-4"
                            >
                                <div className='flex flex-col gap-[20px] text-[1rem]'>
                                    <Link to='/getting-started/templates'
                                          className='!p-0'>
                                        <p className='cursor-pointer leading-[20px] text-gray-600 transition-all duration-200'>
                                            Templates
                                        </p>
                                        <span className='text-[0.8rem] font-[300] text-gray-500'>Ready-made layouts to start fast.</span>
                                    </Link>

                                    <Link to='/blocks/all-blocks'
                                          className='!p-0'>
                                        <p className='cursor-pointer leading-[20px] text-gray-600 transition-all duration-200'>
                                            Blocks
                                        </p>
                                        <span className='text-[0.8rem] font-[300] text-gray-500'>Modular components for easy design.</span>
                                    </Link>

                                    <Link to='/icons'
                                          className='!p-0'>
                                        <p className='cursor-pointer leading-[20px] text-gray-600 transition-all duration-200'>
                                            Icons
                                        </p>
                                        <span className='text-[0.8rem] font-[300] text-gray-500'>Scalable icons for clear visuals.</span>
                                    </Link>
                                </div>

                                <div className='flex flex-col gap-[20px] text-[1rem]'>
                                    <Link to='/getting-started/custom-hooks'
                                          className='!p-0'>
                                        <p className='cursor-pointer leading-[20px] text-gray-600 transition-all duration-200 flex items-center gap-[10px]'>
                                            Custom Hooks

                                            <span
                                                className="px-3 w-max py-[0.02rem] uppercase border border-[#0ea8c7] bg-[#0ea8c7] text-[#fff] rounded-full text-[0.5rem] font-[500]">
                                                        New
                                                    </span>
                                        </p>
                                        <span
                                            className='text-[0.8rem] font-[300] text-gray-500'>Reusable React logic helpers.</span>
                                    </Link>

                                    <Link to='/getting-started/resources'
                                          className='!p-0'>
                                        <p className='cursor-pointer leading-[20px] text-gray-600 transition-all duration-200'>
                                            Resources
                                        </p>
                                        <span className='text-[0.8rem] font-[300] text-gray-500'>Tools and guides for developers.</span>
                                    </Link>

                                    <Link to='/color-palette'
                                          className='!p-0'>
                                        <p className='cursor-pointer leading-[20px] text-gray-600 transition-all duration-200'>
                                            Color Palettes
                                        </p>
                                        <span
                                            className='text-[0.8rem] font-[300] text-gray-500'>Harmonized color sets.</span>
                                    </Link>
                                </div>
                            </motion.div>
                        )
                    }
                </ul>
            </aside>

            <div className={`${isSearchOpen ? 'visible z-[100]' : 'invisible z-[-1]'} transition-all duration-500`}>
                <Search isSearchOpen={isSearchOpen}/>
            </div>
        </>
    );
};

export default MobileNavbar;
