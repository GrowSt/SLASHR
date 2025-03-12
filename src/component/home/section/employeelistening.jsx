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
                    className="flex-1 sm:hidden justify-center"
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
                    <div className="mt-4 flex justify-start">
                        <motion.button
                            type="button"
                            className="group cursor-pointer hover:underline flex items-center justify-center rounded-xl py-2 text-[#195262]"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="group text-sm sm:text-base flex w-full items-center justify-center font-medium uppercase">
                                Learn More
                            </span>
                            <svg
                                className="shrink-0 group-hover:ml-8 ml-4 h-4 w-4 transition-all"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div
                    className="flex-1 hidden sm:flex justify-center pr-10"
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
        </div>
    );
};

export default Employeelistening;
