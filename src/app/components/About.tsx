"use client"

import { useState } from "react";
import Connect from "./Connect";
import Create from "./Create";
import Collaborate from "./Collaborate";

export default function About() {
    const [currentSlide, setCurrentSlide] = useState(0);

    /*const slides = Object.entries(slideContent).map(([key, { path, header, description }]) => ({
        component: <Slide path={path} header={header} description={description} />,
        title: key,
    }));*/

    const slides = [
        { component: <Create />, title: "Create" },
        { component: <Connect />, title: "Connect" },
        { component: <Collaborate />, title: "Collaborate" },
    ];

    const slideCount = slides.length;

    const prevSlide = () => {
        setCurrentSlide((current) => (current - 1 + slideCount) % slideCount);
    };

    const nextSlide = () => {
        setCurrentSlide((current) => (current + 1) % slideCount);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide((slideCount + index) % slideCount);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
            prevSlide();
        } else if (e.key === "ArrowRight") {
            nextSlide();
        }
    };

    return (
        <div className="flex flex-col items-center gap-6 max-w-full px-4 sm:px-6" onKeyDown={handleKeyDown} tabIndex={0}>
            <div className="relative w-full overflow-hidden">
                <div 
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} 
                             className="flex-shrink-0 w-full"
                        >
                            <div
                                role="group"
                                aria-roledescription="slide"
                                aria-label={slide.title}
                                aria-hidden={currentSlide !== index}
                            >
                                {slide.component}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-center gap-4 sm:gap-20">
                <button 
                    onClick={prevSlide} 
                    aria-label="Previous Slide" 
                    className="flex items-center justify-center p-2 rounded-full border border-solid border-[#73b9be] transition hover:text-white hover:bg-[#73b9be]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6"/>
                    </svg>
                </button>
                <div className="flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={currentSlide === index}
                            className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-[#73b9be]" : "bg-gray-300"}`}
                        />
                    ))}
                </div>
                <button 
                    onClick={nextSlide}
                    aria-label="Next Slide" 
                    className="flex items-center justify-center p-2 rounded-full border border-solid border-[#73b9be] transition hover:text-white hover:bg-[#73b9be]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}