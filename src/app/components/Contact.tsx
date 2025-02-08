"use client";

import React, { FormEvent, useState } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [submitted, setSubmitted] = useState<FormData | null>(null);
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const validateForm = (data: FormData): boolean => {
        const newErrors: Partial<FormData> = {};
        if (!data.name.trim()) newErrors.name = "Name is required";
        if (!data.email.trim()) newErrors.email = "Email is required";
        if (!/\S+@\S+\.\S+/.test(data.email)) newErrors.email = "Email is invalid";
        if (!data.message.trim()) newErrors.message = "Message is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data: FormData = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
        };

        if (!validateForm(data)) return

        const formID = process.env.NEXT_PUBLIC_FORMSPREE_ID;
        const endpoint = `https://formspree.io/${formID}`;

        const requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        try {
            const response = await fetch(endpoint, requestOptions);
            if (response.ok) {
                setSubmitted(data);
            } else {
                console.error("Error submitting form:", response.statusText);
            } 
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };
    return (
        <form className="w-full max-w-sm flex flex-col gap-8" onSubmit={onSubmit} noValidate>
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="block text-sm text-gray-700">
                    Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#73b9be] focus:border-[#73b9be]"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                    <p id="name-error" className="text-sm text-red-600">
                    {errors.name}
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="block text-sm text-gray-700">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#73b9be] focus:border-[#73b9be]"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                    <p id="email-error" className="text-sm text-red-600">
                    {errors.email}
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="block text-sm text-gray-700">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Enter your message"
                    rows={4}
                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#73b9be] focus:border-[#73b9be]"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                ></textarea>
                {errors.message && (
                    <p id="message-error" className="text-sm text-red-600">
                    {errors.message}
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <button type="submit" className="flex items-center justify-center rounded-md px-4 w-fit h-10 bg-default shadow-md text-sm border border-solid border-default rounded-xl transition hover:border-[#73b9be]">
                    Submit
                </button>
            </div>
            {submitted && (
                <div className="p-4 bg-green-100 border border-green-400 text-sm text-green-700 rounded-md">
                    Thank you for your message!
                </div>
            )}
        </form>
    );
}