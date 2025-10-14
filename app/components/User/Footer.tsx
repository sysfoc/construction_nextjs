import { GiHouse } from "react-icons/gi";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className='bg-black text-white'>
      <div className='bg-gray-900 py-6'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <h2 className='text-2xl md:text-3xl font-bold text-white text-center md:text-left'>
              Join Newsletter
            </h2>
            <div className='flex flex-wrap md:flex-nowrap w-auto md:w-auto'>
              <input
                type='email'
                placeholder='Your email'
                className='w-[180px] sm:w-80 px-4 py-3 bg-gray-800 text-white placeholder-gray-500 rounded-l-full focus:outline-none focus:ring-0'
              />
              <button className='bg-primary hover:bg-primary/90 text-white px-4 md:px-6 py-3 rounded-r-full font-semibold transition-colors duration-200'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-6 py-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8'>
          <div>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-primary flex items-center justify-center transform rotate-45'>
                <GiHouse className='w-5 h-5 text-white transform -rotate-45' />
              </div>
              <span className='text-xl font-bold text-white'>Construct</span>
            </div>
            <p className='text-gray-400 text-sm leading-relaxed mb-6'>
              Lorem ipsum dolor sit amet, sectetur adipisicing elit, sed do
              eiusmod mpor incididunt ut labore et dolore Lorem ipsum dolor sit
              amet, sectetur adipisicing elit, sed do eiusmod
            </p>
            <div className='flex gap-4'>
              <a
                href='https://www.facebook.com/sysfoc.swl/'
                target='_blank'
                className='w-10 h-10 bg-gray-800 hover:bg-primary transition-colors duration-200 flex items-center justify-center'
              >
                <Facebook className='w-4 h-4' />
              </a>
              <a
                href='https://x.com/sysfoc'
                target='_blank'
                className='w-10 h-10 bg-gray-800 hover:bg-primary transition-colors duration-200 flex items-center justify-center'
              >
                <Twitter className='w-4 h-4' />
              </a>
              <a
                href='https://www.linkedin.com/company/sysfoc/'
                target='_blank'
                className='w-10 h-10 bg-gray-800 hover:bg-primary transition-colors duration-200 flex items-center justify-center'
              >
                <Linkedin className='w-4 h-4' />
              </a>
              <a
                href='https://www.instagram.com/sysfoc/'
                target='_blank'
                className='w-10 h-10 bg-gray-800 hover:bg-primary transition-colors duration-200 flex items-center justify-center'
              >
                <Instagram className='w-4 h-4' />
              </a>
            </div>
          </div>
          <div>
            <h3 className='text-white text-lg font-bold mb-6'>Quick Link</h3>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-primary transition-colors duration-200'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-primary transition-colors duration-200'
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-primary transition-colors duration-200'
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-primary transition-colors duration-200'
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-white text-lg font-bold mb-6'>Services</h3>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-primary transition-colors duration-200'
                >
                  Interior
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-primary transition-colors duration-200'
                >
                  Exterior
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-primary transition-colors duration-200'
                >
                  Renovation
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-primary transition-colors duration-200'
                >
                  Consulting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-white text-lg font-bold mb-6'>Contact Info</h3>
            <div className='space-y-4'>
              <div>
                <span className='text-primary font-semibold'>Address:</span>
                <span className='text-gray-400 ml-2'>Orange, USA</span>
              </div>
              <div>
                <span className='text-primary font-semibold'>Email:</span>
                <span className='text-gray-400 ml-2'>info@sysfoc.com</span>
              </div>
              <div>
                <span className='text-primary font-semibold'>Phone:</span>
                <span className='text-gray-400 ml-2'>+123-456-789</span>
              </div>
              <div>
                <span className='text-primary font-semibold'>Work Time:</span>
                <span className='text-gray-400 ml-1'>
                  Mon-Fri: 08:00 - 05:00
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t border-gray-800 pt-6'>
          <p className='text-gray-400 text-sm'>
            © {new Date().getFullYear()} Powered by{" "}
            <Link
              className='hover:underline hover:text-app-bg'
              href='https://sysfoc.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Visit Sysfoc website'
            >
              Sysfoc.
            </Link>{" "}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
