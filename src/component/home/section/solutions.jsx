import React from "react";
import { motion } from "framer-motion";

const Solutions = () => {
    return (
        <section className="relative p-5 pt-16 sm:pt-2 flex items-center justify-center">
            <motion.div
                className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-5"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="flex-1 lg:text-left"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-2xl sm:text-4xl tracking-tight font-extrabold text-[#2a6171] uppercase">
                        Solutions designed for those who use them, not those who buy them
                    </h1>
                    <p className="mt-2 sm:mt-6 text-sm sm:text-base text-gray-600">
                        When we design our software, we think first of the end user, the one who will use our software in front of their screen. Our software aims to simplify their lives, whether they are a simple employee or an administrator of our solutions. Only then do we think about the CFO, HR director or CEO who are often the decision makers when purchasing one of our software.
                    </p>
                    <div className="mt-6 flex justify-start lg:justify-start">
                        <a
                            href="/"
                            className="group flex items-center cursor-pointer rounded-xl bg-[#2a6171] hover:bg-[#366D7D] px-5 py-3 text-white font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
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
                        </a>
                    </div>

                </motion.div>
                <motion.div
                    className="flex-1 sm:flex justify-center sm:pl-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <img
                        alt="Solutions designed for those who use them, not those who buy them"
                        loading="lazy"
                        width="500"
                        height="500"
                        className="object-cover rounded-lg"
                        src="home/Solutions.webp"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Solutions;
