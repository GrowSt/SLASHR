import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.section
            className="relative p-8 space-y-8 w-full h-full text-center flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }} // Start hidden & slide up
            whileInView={{ opacity: 1, y: 0 }} // Animate when scrolled into view
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of section is visible
        >
            <div
                className="p-6 max-w-7xl rounded-2xl bg-cover bg-center w-full"
                style={{ backgroundImage: "url('https://i.imghippo.com/files/uBk9630bGg.png')" }}
            >
                <motion.div
                    className="space-y-4 sm:space-y-10 max-w-4xl mx-auto py-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-white font-heading font-bold text-4xl sm:text-5xl uppercase">
                        Let’s Chat
                    </h2>
                    <p className="mt-4 text-white text-base">
                        We Love Hearing From You. Let Us Know How We Can Help You
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Contact;
