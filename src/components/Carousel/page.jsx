'use client'
import { GoArrowRight } from "react-icons/go";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Carousel = () => {

    const slides = [
        {
            url: '/images/millenium5.jpeg',
        },
        {
            url: '/images/download.webp',
        },
        {
            url: '/images/download2.webp',
        },
        {
            url: '/images/download3.webp',
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        // Auto-slide every 3 seconds
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]);

    return (
        <>
            <div className='md:h-[450px] h-[350px] w-full m-auto relative group z-0'>
                <div
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${slides[currentIndex].url})`,
                    }}
                    className='w-full h-full bg-center bg-cover duration-500'
                ></div>
                <div className='absolute inset-0 flex flex-col justify-center px-[10%]'>
                    <div>
                        <h4 className="text-4xl font-semibold text-white">Welcome to MGI - The Institutes that make a difference.</h4>
                        <h1 className="text-xl font-semibold text-white">One Stope for Your Education</h1>
                    </div>
                    <div className='mt-8'>
                        <Link href='/' className='bg-[#ffb703] hover:text-[#ffb703] hover:bg-transparent border border-[#ffb703] text-[#023047] font-semibold px-6 py-3 w-48 rounded-md flex justify-center items-start'>Apply Now
                            <GoArrowRight className="mt-1 ml-1" />
                        </Link>
                    </div>
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer'
                        ></div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Carousel;
