import React from "react";
import { motion } from "framer-motion";

const Employeelistening = () => {
    return (
        <div className="relative  p-5 flex items-center justify-center">
            <motion.div
                className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center gap-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <motion.div

                    className="flex-1 lg:hidden justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <img
                        alt="Measure employee engagement and take action to improve it"
                        loading="lazy"
                        width="500"
                        height="500"
                        className="object-cover rounded-lg"
                        src="home/Measure-employee-engagement.webp"
                    />
                </motion.div>

                <motion.div
                    className="flex-1 lg:text-left"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <p className="font-semibold mb-2 sm:mb-5">Employee Listening</p>
                    <h1 className="text-2xl sm:text-4xl tracking-tight font-extrabold text-[#2a6171] uppercase">
                        Measure employee engagement and <br className="hidden sm:block" /> take action to improve it
                    </h1>
                    <p className="mt-2 sm:mt-6 text-sm sm:text-base text-gray-600">
                        Get a pulse on sentiment and spot opportunities to improve with our comprehensive suite of employee listening tools.
                    </p>
                    <ul className="sm:mt-6 text-sm sm:text-base text-gray-600 list-disc pl-5 space-y-2">
                        <li>Streamline feedback collection with easy-to-answer, automated engagement surveys</li>
                        <li>Gain insight into employee sentiment at a glance with heat maps and AI summaries</li>
                        <li>Empower managers to drive change with easy-to-read analytics on their direct reports</li>
                    </ul>
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
                    className="flex-1 hidden lg:flex justify-center pr-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <img
                        alt="Measure employee engagement and take action to improve it"
                        loading="lazy"
                        width="500"
                        height="500"
                        className="object-cover rounded-lg"
                        src="home/Measure-employee-engagement.webp"
                    />
                </motion.div>
            </motion.div>
        </div >
    );
};

export default Employeelistening;
