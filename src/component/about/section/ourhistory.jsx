import React from 'react';
import { motion } from 'framer-motion';

const OurHistory = () => {
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
                style={{ backgroundImage: "url('https://i.imghippo.com/files/XLw7388YU.png')" }}
            >
                <motion.div
                    className="space-y-4 sm:space-y-10 max-w-4xl mx-auto py-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-white font-heading font-bold text-4xl sm:text-5xl uppercase">
                        Our History
                    </h2>
                    <p className="mt-4 text-white text-base">
                        SLASHR was founded in 2025 with a vision to revolutionize human capital management through an intuitive, cloud-based HR solution. Built by a team of industry experts, SLASHR is designed to meet the evolving needs of modern businesses, providing seamless HR management without the complexity of traditional systems.
                    </p>
                    <p className="mt-4 text-white text-base">
                        In a short time, SLASHR has rapidly grown, attracting top talent, including expert software developers, product designers, and implementation specialists from around the world. Our platform has expanded beyond a single-market focus to serve multinational companies, empowering organizations with scalable and customizable HR solutions.
                    </p>
                    <p className="mt-4 text-white text-base">
                        Today, SLASHR is used by businesses across multiple countries, with thousands of employees benefiting from its seamless user experience. At SLASHR, we believe technology should empower people, making HR management effortless, efficient, and future-ready.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default OurHistory;
