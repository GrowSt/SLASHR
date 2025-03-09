import React from "react";

const Drivesdecisions = () => {
    return (
        <div className="relative p-8 flex items-center justify-center">
            <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 hidden justify-center pr-10 sm:flex">
                    <img
                        alt="Drives-decisions-with-data"
                        loading="lazy"
                        width="500"
                        height="500"
                        className="object-cover rounded-lg"
                        src="home/Drives-decisions-with-data.webp"
                    />
                </div>
                <div className="flex-1 lg:text-left">
                    <p className="font-semibold mb-2 sm:mb-5">Say hi to HR tech that</p>
                    <h1 className="text-2xl sm:text-4xl tracking-tight font-extrabold text-[#2a6171]  uppercase">
                        Drives decisions  <br className="hidden sm:block" /> with data
                    </h1>
                    <p className="mt-2 sm:mt-6 text-sm sm:text-base text-gray-600">
                        HR is a key driver of business success, and SlasHr HRIS gives you the data to prove it. SlasHr advanced analytics let you easily track important KPIs and impact on business goals. And, because SlasHr is used by all employees, you benefit from vast amounts of rich data, which means stronger insights for better decision making.
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
                <div className="flex-1  flex justify-center  sm:hidden">
                    <img
                        alt="Drives-decisions-with-data"
                        loading="lazy"
                        width="500"
                        height="500"
                        className="object-cover rounded-lg"
                        src="home/Drives-decisions-with-data.webp"
                    />
                </div>
            </div>
        </div>
    );
};

export default Drivesdecisions;
