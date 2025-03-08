import { useState, useEffect } from "react";



export default function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer>
            < >
                <div className="mx-auto max-w-7xl px-6 mb-10">
                    <div className="mt-10 border-t border-gray-400/30 pt-8 sm:mt-16 text-center text-black">
                        Copyright © {year}  SlasHR, Inc. All rights reserved.
                    </div>
                </div>
            </>
        </footer>
    );
}
