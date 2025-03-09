import React from "react";

const Employeelistening = () => {
    return (
        <div className="relative p-8 flex items-center justify-center">
            <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center gap-8">
                {/* Visible on mobile, hidden on desktop (Image on the left for mobile) */}
                <div className="flex-1 sm:hidden justify-center pr-10">
                    <img
                        alt="Measure employee engagement and take action to improve it"
                        loading="lazy"
                        width="500"
                        height="500"
                        className="object-cover rounded-lg"
                        src="home/Measure employee-engagement.webp"
                    />
                </div>

                {/* Text Content */}
                <div className="flex-1 lg:text-left">
                    <p className="font-semibold mb-2 sm:mb-5">Employee Listening</p>
                    <h1 className="text-2xl sm:text-4xl tracking-tight font-extrabold text-[#2a6171]  uppercase">
                        Measure employee engagement and  <br className="hidden sm:block" />        take action to improve it
                    </h1>
                    <p className="mt-2 sm:mt-6 text-sm sm:text-base text-gray-600">
                        Get a pulse on sentiment and spot opportunities to improve with our comprehensive suite of employee listening tools.
                        <ul className="sm:mt-6 text-sm sm:text-base text-gray-600 list-disc pl-5 space-y-2 ">
                            <li>Streamline feedback collection with easy-to-answer, automated engagement surveys</li>
                            <li>Gain insight into employee sentiment at a glance with heat maps and AI summaries</li>
                            <li>Empower managers to drive change with easy-to-read analytics on their direct reports</li>
                        </ul>
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

                {/* Hidden on mobile, visible on desktop (Image on the right for desktop) */}
                <div className="flex-1 hidden sm:flex justify-center pr-10">
                    <img
                        alt="Measure employee engagement and take action to improve it"
                        loading="lazy"
                        width="500"
                        height="500"
                        className="object-cover rounded-lg"
                        src="home/Measure employee-engagement.webp"
                    />
                </div>
            </div>
        </div>
    );
};

export default Employeelistening;
