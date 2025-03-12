import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0);
    }, [location]);

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-white "}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8 sm:p-8">
                <Link
                    to="/"
                    className="flex items-center space-x-3"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <img src="logo.svg" className="h-10" alt="Slashr Logo" loading="lazy" />
                </Link>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-dropdown"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isMenuOpen ? "block" : "hidden"} w-full lg:flex lg:w-auto justify-end`} id="navbar-dropdown">
                    <ul ref={dropdownRef} className="flex flex-col lg:flex-row font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-transparent">
                        {[{
                            title: "About us",
                            items: [
                                { name: "Our Story", link: "/about-us" },
                                { name: "Contact us", link: "/about-us/contact-us" },
                                { name: "Careers", link: "/careers" }
                            ]
                        }, {
                            title: "Our platform",
                            items: [
                                { name: "Core HR", link: "/core-hr" },
                                { name: "Shift Scheduling", link: "/shift-scheduling" },
                                { name: "Performance management", link: "/performance-management" },
                                { name: "Reporting and data dashboard", link: "/reporting-dashboard" }
                            ]
                        }, {
                            title: "Why slasHR",
                            items: [
                                { name: "Customer Service", link: "/customer-service" },
                                { name: "HR Solutions", link: "/hr-solutions" }
                            ]
                        }, {
                            title: "Support",
                            items: [
                                { name: "Knowledge Hub", link: "/knowledge-hub" },
                                { name: "The SLASHR Journal", link: "/slashr-journal" }
                            ]
                        }].map((dropdown, index) => (
                            <li key={index} className="relative pt-2">
                                <button
                                    onClick={() => toggleDropdown(index)}
                                    className="flex items-center cursor-pointer justify-between w-full py-2 px-3 text-black rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#2a6171] lg:p-0 lg:w-auto"
                                >
                                    {dropdown.title}
                                    <svg className="w-2.5 h-2.5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                {openDropdown === index && (
                                    <div className="absolute left-0 mt-2 w-44 bg-white rounded-lg shadow-lg z-[999] border-t-2 border-[#2a6171]">
                                        <ul className="py-2 text-sm text-gray-700">
                                            {dropdown.items.map((item, i) => (
                                                <li key={i}>
                                                    <Link
                                                        to={item.link}
                                                        className="block px-4 py-2 hover:bg-gray-100"
                                                        onClick={() => {
                                                            setOpenDropdown(null);
                                                            setIsMenuOpen(false);
                                                        }}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                        <button
                            type="button"
                            className="text-white bg-[#2a6171] cursor-pointer hover:bg-[#366D7D] font-medium rounded-lg text-sm px-5 py-2.5 mt-2 lg:mt-0"
                        >
                            <Link to={"/book-a-free-demo"} onClick={() => setIsMenuOpen(false)}> BOOK A FREE DEMO </Link>
                        </button>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
