import React from "react";
import { Link } from "react-router-dom";

const ErrorComponent = () => {
    return (
        <div className="w-full flex-col p-8 justify-start items-center lg:gap-16 gap-10 inline-flex lg:pt-[150px] pt-32 lg:pb-28 pb-12">
            <div className="relative h-[calc(550px-85px)] flex justify-center items-center flex-col">
                <img src="/Oops-404-robot-cuate.svg" alt="Lost in Space" className="w-80 h-auto" />
                <div className="block text-center mt-5">
                    <h5 className="md:text-3xl text-2xl leading-8 text-gray-900 font-bold mb-1.5">
                        <span className="text-[#2a6171] mb-20">Uh-oh! </span>  Looks like you took a wrong turnip.
                        <div className="pt-4 sm:block hidden"></div>  {/* Adds padding above the line */}
                        This page is un-bee-lievably missing!
                    </h5>
                    <div className="pb-4"></div>
                    <p className="text-xl text-gray-900">
                        Great, now click <Link to="/"> <span className=" text-[#2a6171] cursor-pointer font-bold hover:underline">here</span></Link> for the home page
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorComponent;