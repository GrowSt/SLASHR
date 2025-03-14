import React from "react";
import { motion } from "framer-motion";

const Connects = () => {
    return (
        <div className="relative p-5 flex items-center justify-center">
            <motion.div
                className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="flex-1 hidden justify-center pr-10 lg:flex"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <img
                        alt="Connects employees and inspires belonging"
                        loading="lazy"
                        width="500"
                        height="500"
                        className="object-cover rounded-lg"
                        src="home/Connects-employees.webp"
                    />
                </motion.div>
                <motion.div
                    className="flex-1 lg:text-left"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <p className="font-semibold mb-2 sm:mb-5">Say hi to HR tech that</p>
                    <h1 className="text-2xl sm:text-4xl tracking-tight font-extrabold text-[#2a6171] uppercase">
                        Connects employees and <br className="hidden sm:block" /> inspires belonging
                    </h1>
                    <p className="mt-2 sm:mt-6 text-sm sm:text-base text-gray-600">
                        Ensuring your people feel included and connected is critical when your team is WFO, WFH,
                        WFAnywhere. SlasHR provides essential engagement features that drive communication, inclusion, and belonging-inspiring a remarkable experience for every employee.
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
                    className="flex-1 flex justify-center lg:hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <img
                        alt="Connects employees and inspires belonging"
                        loading="lazy"
                        width="500"
                        height="500"
                        className="object-cover rounded-lg"
                        src="home/Connects-employees.webp"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Connects;
