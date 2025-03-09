import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Jointhefuture = () => {
    return (
        <motion.section
            className="gap-16 items-center py-8 px-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6"
            initial={{ opacity: 0, y: 50 }} // Starts hidden and moves up
            whileInView={{ opacity: 1, y: 0 }} // Animates when in view
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }} // Triggers only when 20% of it is visible
        >
            <motion.div
                className="grid grid-cols-2 gap-4 mb-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <img
                    className="w-full rounded-lg"
                    src="about/slashrman.webp"
                    alt="slashr man 1"
                    loading="lazy"
                />
                <img
                    className="mt-4 w-full lg:mt-10 rounded-lg"
                    src="about/slashrman2.webp"
                    alt="slashr man 2"
                    loading="lazy"
                />
            </motion.div>

            <motion.div
                className="font-light text-gray-500 sm:text-base"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold uppercase text-[#2a6171]">
                    Join the Future of HR Innovation with SLASHR
                </h2>
                <p className="mb-2">
                    We are on a mission to transform the world of HR. SLASHR is redefining human capital management with a powerful, intuitive platform designed for modern businesses.
                </p>
                <p>
                    Do you want to be part of our journey? We’re always looking for exceptional talent to join our growing team.
                </p>

                <div className="flex items-center justify-start gap-x-6 lg:justify-start">
                    <div className="mt-6 flex justify-start lg:justify-start">
                        <Link
                            to="/about-us/careers"
                            className="group flex items-center rounded-xl bg-[#2a6171] hover:bg-[#366D7D] px-5 py-3 text-white font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
                            aria-label="Learn more about SlasHR HRIS"
                        >
                            <span className="group-hover:pr-4 transition-all">View open positions</span>
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
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Jointhefuture;
