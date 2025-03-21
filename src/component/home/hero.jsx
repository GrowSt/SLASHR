import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Solutions from "./section/solutions";
import Drivesdecisions from "./section/drivesdecisions";
import Employeelistening from "./section/employeelistening";
import Connects from "./section/connects";
import Contact from "../about/contact";


const HeroSection = () => {
    // ✅ Dynamically update page title and meta tags
    useEffect(() => {
        document.title = "Slashr - Award-winning HR system for all your HRIS needs";

        // Update Meta Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", "Slashr is the best HR system to manage all your HRIS needs, including payroll, employee records, and performance tracking.");
        } else {
            const newMeta = document.createElement("meta");
            newMeta.name = "description";
            newMeta.content = "Slashr is the best HR system to manage all your HRIS needs, including payroll, employee records, and performance tracking.";
            document.head.appendChild(newMeta);
        }

        // Function to update Open Graph meta tags
        const updateMetaTag = (property, content) => {
            let metaTag = document.querySelector(`meta[property="${property}"]`);
            if (metaTag) {
                metaTag.setAttribute("content", content);
            } else {
                const newMeta = document.createElement("meta");
                newMeta.setAttribute("property", property);
                newMeta.setAttribute("content", content);
                document.head.appendChild(newMeta);
            }
        };

        updateMetaTag("og:title", "Home - Slashr HR System");
        updateMetaTag("og:description", "Manage your HR tasks efficiently with Slashr.");
        updateMetaTag("og:image", "https://i.imghippo.com/files/vRLw1789Enw.png");

        // Cleanup function (reset metadata when leaving the page)
        return () => {
            document.title = "Slashr - Award-winning HR System"; // Reset title
        };
    }, []);

    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mx-auto max-w-[78rem] mt-23  sm:mt-32 sm:px-6 sm:py-8 "
            >
                <div className="relative isolate overflow-hidden bg-[#2a6171] px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"
                    >
                        <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                            Modern HRIS for today's businesses
                        </h1>
                        <p className="mt-6 text-base text-pretty text-white">
                            The HR platform that powers productivity, engagement, and retention.
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex items-center justify-center gap-x-6 lg:justify-start mt-5"
                        >
                            <Link
                                to="/"
                                className="group flex items-center rounded-xl bg-white px-5 py-3 text-[#2A6171] font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
                                aria-label="Learn more about SlasHR HRIS"
                            >
                                <span className="group-hover:pr-4 transition-all">Learn More</span>
                                <svg
                                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </Link>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="relative mt-16 h-80 lg:mt-8"
                    >
                        <img
                            alt="App screenshot"
                            src="home/hero-img.webp"
                            width={1824}
                            height={1080}
                            className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md"
                            loading="lazy"
                        />
                    </motion.div>
                </div>
            </motion.section>
            <Solutions />
            <Drivesdecisions />
            <Employeelistening />
            <Connects />
            <Contact />
        </>
    );
};

export default HeroSection;
