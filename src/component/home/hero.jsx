import React from 'react';


const HeroSection = () => {
    return (
        <>

            <div>
                <div className="mx-auto max-w-[90rem]  sm:px-6 sm:py-8 ">
                    <div className="relative isolate overflow-hidden bg-[#2a6171] px-6 pt-16  sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg
                            viewBox="0 0 1024 1024"
                            aria-hidden="true"
                            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                        >
                            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="#8CBECE" />
                                    <stop offset={1} stopColor="#8CBECE" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                                Modern HRIS for today's businesses
                            </h2>
                            <p className="mt-6 text-base text-pretty text-white">
                                The HR platform that powers productivity, engagement, and retention.
                            </p>
                            <div className=" flex items-center justify-center gap-x-6 lg:justify-start">
                                <div className="mt-6 flex justify-center lg:justify-start">
                                    <a
                                        href="/learn-more"
                                        className="group flex items-center rounded-xl bg-white px-5 py-3 text-[#2A6171] font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
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
                        <div className="relative mt-16 h-80 lg:mt-8">
                            <img
                                alt="App screenshot"
                                src="hero-img.webp"
                                width={1824}
                                height={1080}
                                className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md "
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default HeroSection;
