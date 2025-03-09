import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer>
            < >

                <div className="mx-auto max-w-7xl px-6 m-10">

                    <div className="mt-10 border-t border-gray-400/30 pt-8 sm:mt-16 text-center text-black">
                        <Link to="/" className="flex items-center justify-center mb-5 ">
                            <img src="logo.svg" className="h-12 mr-3 sm:h-9" alt="Slashr Logo" loading="lazy" />
                        </Link>
                        Copyright © {year}  SlasHR, Inc. All rights reserved.
                    </div>
                </div>
            </>
        </footer>
    );
}
