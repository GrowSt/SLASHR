import React from 'react';


const HeroSection = () => {
    return (
        <>
            <section >
                <div className="gap-16 items-center py-8 px-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-base">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold  text-[#2a6171] " >
                            Streamline HR Management & Empower Your Team
                        </h2>
                        <p className="mb-2">
                            SLASHR is a user-friendly, cloud-based HR solution that streamlines Human Resources management.
                        </p>
                        <p>
                            Our feature-rich platform enhances efficiency and provides companies with valuable insights into their most important asset—their employees.
                        </p>

                        <div className=" flex items-center justify-start gap-x-6 lg:justify-start">
                            <div className="mt-6 flex justify-start lg:justify-start">
                                <a
                                    href="/learn-more"
                                    className="group flex items-center rounded-xl bg-[#2a6171] hover:bg-[#366D7D] px-5 py-3 text-white font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
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
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img
                            className="w-full rounded-lg"
                            src="about/office-team.webp"
                            alt="office-team 1"
                            loading="lazy"
                        />
                        <img
                            className="mt-4 w-full lg:mt-10 rounded-lg"
                            src="about/office.webp"
                            alt="office-team 2"
                            loading="lazy"
                        />
                    </div>

                </div>
            </section>
            <section
                className="relative p-8 space-y-8 w-full h-full text-center flex items-center justify-center"
            >
                <div
                    className="p-6 max-w-7xl rounded-2xl bg-cover bg-center w-full"
                    style={{ backgroundImage: "url('https://i.imghippo.com/files/XLw7388YU.png')" }}
                >
                    <div className="space-y-4 sm:space-y-10 max-w-4xl mx-auto py-8">
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
                    </div>
                </div>
            </section>


            <section >
                <div className="gap-16 items-center py-8 px-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <img
                            className="w-full rounded-lg"
                            src="about/slashrman.webp"
                            alt="slashr man 1"
                            loading="lazy"
                        />
                        <img
                            className="mt-4 w-full lg:mt-10 rounded-lg"
                            src="about/slashrman2.webp"
                            alt="slashr man 2"
                            loading="lazy"
                        />
                    </div>
                    <div className="font-light text-gray-500 sm:text-base">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold  text-[#2a6171] " >
                            Join the Future of HR Innovation with SLASHR
                        </h2>
                        <p className="mb-2">
                            We are on a mission to transform the world of HR. SLASHR is redefining human capital management with a powerful, intuitive platform designed for modern businesses.
                        </p>
                        <p>
                            Do you want to be part of our journey? We’re always looking for exceptional talent to join our growing team.
                        </p>

                        <div className=" flex items-center justify-start gap-x-6 lg:justify-start">
                            <div className="mt-6 flex justify-start lg:justify-start">
                                <a
                                    href="/learn-more"
                                    className="group flex items-center rounded-xl bg-[#2a6171] hover:bg-[#366D7D] px-5 py-3 text-white font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
                                    aria-label="Learn more about SlasHR HRIS"
                                >
                                    <span className="group-hover:pr-4 transition-all">View open position</span>
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
                        </div>
                    </div>


                </div>
            </section>

            <section
                className="relative p-8 space-y-8 w-full h-full text-center bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('https://iili.io/2mSrkSS.webp')" }}
            >
                <div className="p-6 max-w-4xl">
                    <div className="space-y-4 sm:space-y-10">
                        <h2 className="text-white font-heading font-bold text-2xl sm:text-2xl uppercase">
                            WE ARE ALWAYS LOOKING FOR
                        </h2>
                        <h2 className="text-white font-heading font-bold text-4xl sm:text-5xl uppercase">
                            Talented people to join us
                        </h2>
                        <p className="text-base sm:text-xl text-white">
                            Think you have what it takes? We'd love to meet you.
                        </p>
                    </div>
                    <a className="inline-flex items-center justify-center font-medium mt-10" href="#">
                        <button
                            type="submit"
                            className="group flex items-center justify-center rounded-xl cursor-pointer bg-white hover:shadow-lg hover:drop-shadow px-4 py-4 text-[#2A6171] transition"
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
                        </button>
                    </a>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
