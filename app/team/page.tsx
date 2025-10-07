import { ChevronsRight } from "lucide-react";
import Image from "next/image";

export default function Team() {
  const teamData = [
    {
      img: "/team/img_01.png",
      name: "Mark Chiasson",
      position: "Head Railway Construction",
    },
    {
      img: "/team/img_02.png",
      name: "Mark Chiasson",
      position: "Head Railway Construction",
    },
    {
      img: "/team/img_03.png",
      name: "Mark Chiasson",
      position: "Head Railway Construction",
    },
    {
      img: "/team/img_04.png",
      name: "Mark Chiasson",
      position: "Head Railway Construction",
    },
    {
      img: "/team/img_05.png",
      name: "Mark Chiasson",
      position: "Head Railway Construction",
    },
    {
      img: "/team/img_06.png",
      name: "Mark Chiasson",
      position: "Head Railway Construction",
    },
  ];
  return (
    <>
      <section className="relative bg-[url('/team/team.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
        <div className='absolute inset-0 bg-[#161D39]/80'></div>
        <div className='relative z-10 text-center text-white px-4'>
          <h1 className='text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg'>
            Our Team
          </h1>
          <p className='text-lg font-light text-gray-200'>
            Home <ChevronsRight className='inline-block w-4 h-4 text-primary' />{" "}
            <span>Team</span>
          </p>
        </div>
      </section>
      <section className='my-20'>
        <div className='mx-auto text-center'>
          <span className='text-primary'>Great experience in building</span>
          <h2 className='text-4xl font-bold'>Professional Team</h2>
        </div>
        <div className='px-4 my-8 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {teamData.map((team, index) => (
            <div key={index}>
              <div className="flex items-center justify-center sm:justify-start">
                <Image
                  src={team.img}
                  alt={`${team.name}-img`}
                  width={300}
                  height={300}
                  className='size-auto'
                />
              </div>
              <div className='bg-gray-100 dark:bg-gray-800 p-4 rounded-bl-2xl'>
                <h3>{team.name}</h3>
                <p>{team.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
