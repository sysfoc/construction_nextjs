import { ChevronsRight } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const portfolioData = [
    {
      img: "/portfolio/img_01.png",
    },
    {
      img: "/portfolio/img_02.png",
    },
    {
      img: "/portfolio/img_03.png",
    },
    {
      img: "/portfolio/img_04.png",
    },
    {
      img: "/portfolio/img_05.png",
    },
    {
      img: "/portfolio/img_06.png",
    },
  ];
  return (
    <>
      <section className="relative bg-[url('/Team/team.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
        <div className='absolute inset-0 bg-[#161D39]/80'></div>
        <div className='relative z-10 text-center text-white px-4'>
          <h1 className='text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg'>
            Portfolio
          </h1>
          <p className='text-lg font-light text-gray-200'>
            Home <ChevronsRight className='inline-block w-4 h-4 text-primary' />{" "}
            <span>Portfolio</span>
          </p>
        </div>
      </section>
      <section className='px-4 max-w-5xl mx-auto py-16'>
        <div>
          <span className='text-primary'>Our best portfolio</span>
          <div className='flex items-center justify-between flex-wrap gap-4'>
            <div>
              <h2 className='text-3xl font-bold'>Our portfolio</h2>
            </div>
            <div className='w-full md:w-1/2'>
              <p className='text-sm'>
                We&apos;ve grown up with the internet revolution, and we know
                how to deliver on its promise of improved business
              </p>
            </div>
          </div>
          <div className='mt-6 flex flex-wrap items-center gap-3'>
            <button className='bg-primary text-white py-2 px-6 rounded-full text-xs cursor-pointer uppercase'>
              See all
            </button>
            <button className='py-2 px-6 rounded-full text-xs border border-black dark:border-white cursor-pointer uppercase'>
              Business
            </button>
            <button className='py-2 px-6 rounded-full text-xs border border-black dark:border-white cursor-pointer uppercase'>
              Technology
            </button>
            <button className='py-2 px-6 rounded-full text-xs border border-black dark:border-white cursor-pointer uppercase'>
              UI/Ux Design
            </button>
            <button className='py-2 px-6 rounded-full text-xs border border-black dark:border-white cursor-pointer uppercase'>
              Web Design
            </button>
            <button className='py-2 px-6 rounded-full text-xs border border-black dark:border-white cursor-pointer uppercase'>
              Development
            </button>
          </div>
        </div>
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {portfolioData.map((item, index) => (
            <div key={index}>
              <Image
                src={item.img}
                alt={`img-${index}`}
                width={500}
                height={500}
                className='w-full h-full object-cover'
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
