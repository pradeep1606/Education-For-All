
import Link from 'next/link';
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
      <footer className="bg-[#07315b] text-white pt-16 pb-2">
        <div className="container mx-auto divide-y divide-slate-500">
          <div className="flex flex-wrap pb-4">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 pl-6 mb-8 sm:mb-0">
              <div>
                <h1 className="text-3xl text-blue-500 font-semibold shadow-blue-600">EducationForAll</h1>
                <div className='mt-6 flex gap-2'>
                  <FaLocationDot className='mt-1' />
                  <span className='text-[#ffb703] font-semibold'>ADDRESS</span>
                </div>
                <span className='text-sm'>Nathu Barkheda Road Near Neelbad Chouraha Bhopal M.P. 462044</span>
                <div className='mt-6 flex gap-2'>
                  <FaPhoneAlt className='mt-1' />
                  <span className='text-[#ffb703] font-semibold'>PHONE</span>
                </div>
                <span className='text-sm'>+91-123456789</span>
                <div className='mt-6 flex gap-2'>
                  <HiOutlineMail className='mt-1' />
                  <span className='text-[#ffb703] font-semibold'>EMAIL</span>
                </div>
                <span className='text-sm'>info@educaionforall.com</span>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/4 px-10 mb-8 sm:mb-0">
              <h4 className="text-lg font-semibold mb-6 text-[#ffb703]">Top Courses</h4>
              <ul className='space-y-2'>
                <li><Link href='' className="text-gray-400 hover:text-white">UG Courses</Link></li>
                <li><Link href='' className="text-gray-400 hover:text-white">PG Courses</Link></li>
                <li><Link href='' className="text-gray-400 hover:text-white">Higher Secondary</Link></li>
                <li><Link href='' className="text-gray-400 hover:text-white">Highschool</Link></li>
                <li><Link href='' className="text-gray-400 hover:text-white">Extra Curricular</Link></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-8 mb-8 sm:mb-0">
              <h4 className="text-lg font-semibold mb-6 text-[#ffb703]">Site Links</h4>
              <ul className='space-y-2'>
                <li><Link href="/InternShip" className="text-gray-400 hover:text-white">Internship</Link></li>
                <li><Link href="/About" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="/Contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                <li><Link href="/Career" className="text-gray-400 hover:text-white">Career</Link></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-8 mb-8 sm:mb-0">
              <h4 className="text-lg font-semibold mb-6 text-[#ffb703]">Social Media Link</h4>
              <div className="flex mt-8">
                <a href="" className="w-10 h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-[#023047] hover:bg-white" target='_blank'>
                  <FaFacebookF />
                </a>
                <a href="" className="w-10 h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-[#023047] hover:bg-white" target='_blank'>
                  <FaTwitter />
                </a>
                <a href="" className="w-10 h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-[#023047] hover:bg-white" target='_blank'>
                  <FaInstagram />
                </a>
                <a href="" className="w-10 h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-[#023047] hover:bg-white" target='_blank'>
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
          <div className='container p-2 text-sm'>&#169; 2024 xyz</div>
        </div>
      </footer>
    </>
  )
}

export default Footer
