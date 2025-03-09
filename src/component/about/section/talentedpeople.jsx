import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Talentedpeople = () => {
    return (
        <motion.section
            className="relative p-8 space-y-8 w-full h-full text-center flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }} // Starts hidden and moves up
            whileInView={{ opacity: 1, y: 0 }} // Animates when in view
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }} // Triggers only when 20% is visible
        >
            <div
                className="p-6 max-w-7xl rounded-2xl bg-cover bg-center w-full"
                style={{ backgroundImage: "url('https://iili.io/2mSrkSS.webp')" }}
            >
                <motion.div
                    className="space-y-4 sm:space-y-10 max-w-4xl mx-auto py-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="space-y-4 sm:space-y-6">
                        <h2 className="text-white font-heading font-bold text-xl sm:text-2xl uppercase">
                            WE ARE ALWAYS LOOKING FOR
                        </h2>
                        <h2 className="text-white font-heading font-bold text-4xl sm:text-5xl uppercase">
                            Talented people to join us
                        </h2>
                        <p className="text-base sm:text-xl text-white">
                            Think you have what it takes? We'd love to meet you.
                        </p>
                    </div>
                    <Link to="/about-us/careers" className="inline-flex items-center justify-center font-medium">
                        <motion.button
                            type="submit"
                            className="group flex items-center justify-center rounded-xl cursor-pointer bg-white hover:shadow-lg hover:drop-shadow px-4 py-4 text-[#2A6171] transition"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <span className="group text-sm sm:text-base flex w-full items-center justify-center rounded text-center font-medium">
                                View open positions
                            </span>
                            <svg
                                className="shrink-0 group-hover:ml-8 ml-4 h-4 w-4 transition-all"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Talentedpeople;
