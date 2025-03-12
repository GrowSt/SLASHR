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
                    className="flex-1 hidden justify-center pr-10 sm:flex"
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
                    <div className="mt-4 flex justify-start">
                        <motion.button
                            type="button"
                            className="group cursor-pointer hover:underline flex items-center justify-center rounded-xl py-2 text-[#195262]"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="group text-sm sm:text-base flex w-full items-center justify-center font-medium uppercase">
                                SEE HOW
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
                    className="flex-1 flex justify-center sm:hidden"
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
