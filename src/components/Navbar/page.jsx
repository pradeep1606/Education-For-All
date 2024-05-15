'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from 'react';
import { VscTriangleUp } from "react-icons/vsc";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', closeDropdown);
        return () => {
            document.removeEventListener('mousedown', closeDropdown);
        };
    }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <nav className={`md:border-gray-200 shadow-lg bg-[#07315b]`}>
                <div className="max-w-7xl mx-auto px-4 py-2 md:py-1 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center text-white">
                                <span className="self-center text-2xl tracking-wider font-semibold whitespace-nowrap mt-2">EducationForAll</span>
                            </Link>
                        </div>
                        {/* md navbar */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4 text-gray-900">
                                <Link href="/InternShip" className=" white-link text-white md:border-0 md:hover:text-[#ffb703] px-3 py-2 rounded-md">Internship</Link>
                                <Link href="/Courses" className=" white-link text-white md:border-0 md:hover:text-[#ffb703] px-3 py-2 rounded-md">Courses</Link>
                                {/* <div className="inline-block relative group z-10">
                  <button className="white-link text-white md:border-0 md:hover:text-blue-500 rounded-md">Colleges</button>
                  <div className="absolute hidden w-56 -right-2 group-hover:block">
                    <div className="h-2 w-full flex justify-end px-2"><VscTriangleUp className="text-2xl -mt-2 text-slate-800" /></div>
                    <div className=" bg-slate-800 text-white p-2 shadow-md ">
                      <div className="flex flex-col justify-center rounded space-y-6">
                        <ul>
                          <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Engineering' }, }}>Engineering</Link></li>
                          <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Management' }, }}>Management</Link></li>
                          <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Commerce' }, }}>Commerce</Link></li>
                          <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Arts' }, }}>Arts</Link></li>
                          <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Science' }, }}>Science</Link></li>
                          <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Pharmacy' }, }}>Pharmacy</Link></li>
                          <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Medical' }, }}>Medical</Link></li>
                          <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Computer Application' }, }}>Computer Application</Link></li>
                          <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Education' }, }}>Education</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                                </div> */}
                                <Link href="/About" className="text-white white-link md:border-0 md:hover:text-[#ffb703] px-3 py-2 rounded-md">About</Link>
                                <Link href="/Contact" className="text-white white-link md:border-0 md:hover:text-[#ffb703] px-3 py-2 rounded-md">Contact</Link>
                                <Link href="/Career" className="text-white white-link md:border-0 md:hover:text-[#ffb703] px-3 py-2 rounded-md">Career</Link>
                            </div>
                        </div>

                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={toggleNavbar}
                                className="bg-[#07315b] inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#07315b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#07315b] focus:ring-white"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden={!isOpen}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg
                                    className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden={isOpen}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* sm navbar */}
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/InternShip" onClick={toggleNavbar} className="text-gray-300 hover:text-[#ffb703] block px-3 py-2 rounded-md text-base font-medium">Internship</Link>
                        <Link href="/Courses" onClick={toggleNavbar} className="text-gray-300 hover:text-[#ffb703] block px-3 py-2 rounded-md text-base font-medium">Courses</Link>
                        {/* <div className="inline-block relative group z-20" ref={dropdownRef}>
              <button className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleDropdown}>Colleges</button>
              {isDropdownOpen && (
                <div className="absolute w-56">
                  <div className="h-2 w-full flex justify-start px-2">
                    <VscTriangleUp className="text-2xl -mt-2 text-slate-800" />
                  </div>
                  <div className="bg-slate-800 p-2 shadow-md rounded-md">
                    <div className="flex flex-col justify-center p-4 space-y-6">
                      <ul>
                        <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Engineering' }, }} onClick={toggleNavbar}>Engineering</Link></li>
                        <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Management' }, }} onClick={toggleNavbar}>Management</Link></li>
                        <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Commerce' }, }} onClick={toggleNavbar}>Commerce</Link></li>
                        <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Arts' }, }} onClick={toggleNavbar}>Arts</Link></li>
                        <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Science' }, }} onClick={toggleNavbar}>Science</Link></li>
                        <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Pharmacy' }, }} onClick={toggleNavbar}>Pharmacy</Link></li>
                        <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Medical' }, }} onClick={toggleNavbar}>Medical</Link></li>
                        <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Computer Application' }, }} onClick={toggleNavbar}>Computer Application</Link></li>
                        <li className=" text-[#fff] border-[none] w-1/2 cool-link mx-2 p-1"><Link href={{ pathname: '/colleges', query: { name: 'Education' }, }} onClick={toggleNavbar}>Education</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
                        </div> */}
                        <Link href="/About" onClick={toggleNavbar} className="text-gray-300 hover:text-[#ffb703] block px-3 py-2 rounded-md text-base font-medium">About</Link>
                        <Link href="/Contact" onClick={toggleNavbar} className="text-gray-300 hover:text-[#ffb703] block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                        <Link href="/Career" onClick={toggleNavbar} className="text-gray-300 hover:text-[#ffb703] block px-3 py-2 rounded-md text-base font-medium">Career</Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
