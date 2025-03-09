import React from "react";

const Solutions = () => {
    return (
        <section className="relative p-8 flex items-center justify-center">
            <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-5">
                <div className="flex-1 lg:text-left">
                    <h1 className="text-2xl sm:text-4xl tracking-tight font-extrabold text-[#2a6171]  uppercase">
                        Solutions designed for those who use them, not those who buy them
                    </h1>
                    <p className="mt-2 sm:mt-6 text-sm sm:text-base text-gray-600">
                        When we design our software, we think first of the end user, the one who will use our software in front of their screen. Our software aims to simplify their lives, whether they are a simple employee or an administrator of our solutions. Only then do we think about the CFO, HR director or CEO who are often the decision makers when purchasing one of our software.
                    </p>
                    <div className="mt-4 flex justify-start">
                        <button
                            type="button"
                            className="group cursor-pointer hover:underline flex items-center justify-center rounded-xl py-2 text-[#195262]"
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
                        </button>
                    </div>
                </div>
                <div className="flex-1 sm:flex justify-center sm:pl-10">
                    <img
                        alt="Solutions designed for those who use them, not those who buy them"
                        loading="lazy"
                        width="500"
                        height="500"
                        className="object-cover rounded-lg"
                        src="home/Solutions.webp"
                    />
                </div>
            </div>
        </section>
    );
};

export default Solutions;
