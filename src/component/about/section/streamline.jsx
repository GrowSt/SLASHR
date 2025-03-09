import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Streamline = () => {
    return (
        <motion.section
            className="gap-16 items-center py-8 px-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6   mt-28"
            initial={{ opacity: 0, y: 50 }} // Start hidden & move up
            whileInView={{ opacity: 1, y: 0 }} // Animate in when visible
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the section is in view
        >
            <div className="font-light text-gray-500 sm:text-base">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold uppercase text-[#2a6171]">
                    Streamline HR Management & Empower Your Team
                </h2>
                <p className="mb-2">
                    SLASHR is a user-friendly, cloud-based HR solution that streamlines Human Resources management.
                </p>
                <p>
                    Our feature-rich platform enhances efficiency and provides companies with valuable insights into their most important asset—their employees.
                </p>
                <div className="flex items-center justify-start gap-x-6 lg:justify-start">
                    <div className="mt-6 flex justify-start lg:justify-start">
                        <Link
                            to="/about-us/contact-us"
                            className="group flex items-center rounded-xl bg-[#2a6171] hover:bg-[#366D7D] px-5 py-3 text-white font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
                            aria-label="Learn more about SlasHR HRIS"
                        >
                            <span className="group-hover:pr-4 transition-all">Get in touch</span>
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
            </div>
            <motion.div
                className="grid grid-cols-2 gap-4 mt-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <img
                    className="w-full rounded-lg"
                    src="about/office-team.webp"
                    alt="office-team 1"
                    loading="lazy"
                />
                <img
                    className="mt-4 w-full lg:mt-10 rounded-lg"
                    src="about/office.webp"
                    alt="office-team 2"
                    loading="lazy"
                />
            </motion.div>
        </motion.section>
    );
};

export default Streamline;
