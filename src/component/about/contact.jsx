import React, { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        companyName: "",
        employees: "",
        jobrole: "",
        phone: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        if (!formData.fullName) newErrors.fullName = "Full name is required.";
        if (!formData.email.includes("@")) newErrors.email = "Enter a valid email.";
        if (!formData.companyName) newErrors.companyName = "Company name is required.";
        if (!formData.employees) newErrors.employees = "Please select the number of employees.";
        if (!formData.jobrole) newErrors.jobrole = "Please enter a valid Job Role.";
        if (!formData.phone || formData.phone.length < 10) newErrors.phone = "Please enter a valid phone number.";
        if (!formData.message) newErrors.message = "Message is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <motion.section
            className="relative flex flex-col items-center justify-center w-full mt-32 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div
                className="p-6 w-full max-w-4xl sm:max-w-6xl rounded-2xl bg-cover bg-center shadow-lg"
                style={{ backgroundImage: "url('https://i.imghippo.com/files/uBk9630bGg.png')" }}
            >
                <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mb-4 mt-6 uppercase">
                    Book a Free Demo
                </h2>
                <p className="sm:text-xl font-bold text-white text-center mb-6">
                    See how SlasHR can help your company.
                </p>
                <div className="max-w-3xl w-full bg-white shadow-md rounded-lg px-6 sm:px-10 py-8 mx-auto m-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block uppercase tracking-wide text-[#2a6171] text-base font-bold mb-2">
                                Full Name
                            </label>
                            <input name="fullName" onChange={handleChange} className="w-full text-sm text-gray-700 border border-gray-300 rounded py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#2a6171] focus:border-[#2a6171]" type="text" placeholder="Full Name *" />
                            {errors.fullName && <p className="text-red-500 text-xs mt-2">{errors.fullName}</p>}
                        </div>
                        <div>
                            <label className="block uppercase tracking-wide text-[#2a6171] text-base font-bold mb-2">
                                Business Email
                            </label>
                            <input name="email" onChange={handleChange} className="w-full text-sm text-gray-700 border border-gray-300 rounded py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#2a6171] focus:border-[#2a6171]" type="email" placeholder="Business Email *" />
                            {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                        <div>
                            <label className="block uppercase tracking-wide text-[#2a6171] text-base font-bold mb-2">
                                Company Name
                            </label>
                            <input name="companyName" onChange={handleChange} className="w-full text-sm text-gray-700 border border-gray-300 rounded py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#2a6171] focus:border-[#2a6171]" type="text" placeholder="Company Name *" />
                            {errors.companyName && <p className="text-red-500 text-xs mt-2">{errors.companyName}</p>}
                        </div>
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-[#2a6171] text-base font-bold mb-2 ">
                                Number of Employees
                            </label>
                            <select name="employees" onChange={handleChange} className="w-full text-sm border border-gray-300 text-gray-700 py-3 px-4 rounded appearance-none pr-10 focus:outline-none focus:ring-1 focus:ring-[#2a6171] focus:border-[#2a6171]">
                                <option value="">---</option>
                                <option>100-500</option>
                                <option>50-1000</option>
                                <option>1000-2500</option>
                                <option>2500-5000</option>
                                <option>5000-10,000</option>
                                <option>10,000+</option>
                            </select>
                            {errors.employees && <p className="text-red-500 text-xs mt-2">{errors.employees}</p>}
                        </div>

                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                        <div>
                            <label className="block uppercase tracking-wide text-[#2a6171] text-base font-bold mb-2">
                                Job Role
                            </label>
                            <input name="Jobrole" onChange={handleChange} className="w-full text-sm text-gray-700 border border-gray-300 rounded py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#2a6171] focus:border-[#2a6171]" type="text" placeholder="Job Role*" />
                            {errors.jobrole && <p className="text-red-500 text-xs mt-2">{errors.jobrole}</p>}
                        </div>
                        <div>
                            <label className="block uppercase tracking-wide text-[#2a6171] text-base font-bold mb-2">
                                Phone Number
                            </label>
                            <PhoneInput
                                inputClass="py-5.5 "
                                placeholder="Enter Your Phone Number"
                                enableSearch={true}
                                country={"ma"}
                                value={formData.phone}
                                onChange={(phone) => setFormData({ ...formData, phone })}
                            />
                            {errors.phone && <p className="text-red-500 text-xs mt-2">{errors.phone}</p>}
                        </div>



                    </div>

                    <div className="mt-4">
                        <label className="block uppercase tracking-wide text-[#2a6171] text-base font-bold mb-2">
                            Message
                        </label>
                        <textarea name="message" onChange={handleChange} className="w-full text-sm text-gray-700 border border-gray-300 rounded py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#2a6171] focus:border-[#2a6171]" rows="4" placeholder="Enter your message here..."></textarea>
                        {errors.message && <p className="text-red-500 text-xs mt-2">{errors.message}</p>}
                    </div>

                    <div className="mt-6 flex justify-center">
                        <button type="button" onClick={validateForm} className="text-white bg-[#2a6171] hover:bg-[#366D7D] font-medium rounded-lg text-sm px-6 py-3">
                            BOOK A FREE DEMO
                        </button>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;