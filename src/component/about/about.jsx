import React, { useEffect } from "react";
import Streamline from "./section/streamline";
import Ourhistory from "./section/ourhistory";
import Jointhefuture from "./section/jointhefuture";
import Talentedpeople from "./section/talentedpeople";

const Aboutus = () => {
    useEffect(() => {
        // Set Page Title
        document.title = "About Us - Slashr HR Software Solutions";

        // Update Meta Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", "Learn more about Slashr and our mission in HR technology.");
        } else {
            const newMeta = document.createElement("meta");
            newMeta.name = "description";
            newMeta.content = "Learn more about Slashr and our mission in HR technology.";
            document.head.appendChild(newMeta);
        }

        // Update Open Graph Meta Tags
        const updateMetaTag = (property, content) => {
            let metaTag = document.querySelector(`meta[property="${property}"]`);
            if (metaTag) {
                metaTag.setAttribute("content", content);
            } else {
                const newMeta = document.createElement("meta");
                newMeta.setAttribute("property", property);
                newMeta.setAttribute("content", content);
                document.head.appendChild(newMeta);
            }
        };

        updateMetaTag("og:title", "About Us - Slashr HR System");
        updateMetaTag("og:description", "Slashr is an award-winning HR system providing top HR solutions.");
        updateMetaTag("og:image", "https://i.imghippo.com/files/vRLw1789Enw.png");

        // Cleanup function (reset title when leaving the page)
        return () => {
            document.title = "Slashr - Award-winning HR System";
        };
    }, []);

    return (
        <>
            <Streamline />
            <Ourhistory />
            <Jointhefuture />
            <Talentedpeople />
        </>
    );
};

export default Aboutus;
