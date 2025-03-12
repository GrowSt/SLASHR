import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onFinish }) {
    const [split, setSplit] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSplit(true); // Start split animation
        }, 3000); // Start split after 3s

        const finishTimer = setTimeout(() => {
            onFinish(); // Immediately show the app after split
        }, 4000); // End exactly at 4s

        return () => {
            clearTimeout(timer);
            clearTimeout(finishTimer);
        };
    }, [onFinish]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 3 }} // Smooth fade-out
            className="fixed inset-0 flex items-center justify-center bg-[#2A6171] text-white z-50 overflow-hidden"
        >
            {!split ? (
                // Initial Loading Animation (Bouncing Dots)
                <div className="flex space-x-2">
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            className="w-5 h-5 bg-white rounded-full"
                            animate={{
                                y: [0, -10, 0], // Bounce effect
                                opacity: [1, 0.5, 1],
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.3, // Staggered animation
                            }}
                        />
                    ))}
                </div>
            ) : (
                // Split Animation
                <>
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute left-0 w-1/2 h-full bg-[#1E4D5A]"
                    />
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute right-0 w-1/2 h-full bg-[#1E4D5A]"
                    />
                </>
            )}
        </motion.div>
    );
}
