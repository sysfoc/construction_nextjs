// app/team/page.tsx
import { ChevronsRight, User } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  photo: string | null;
}

async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/team`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.teamMembers || [];
  } catch (error) {
    console.error("Error fetching team members:", error);
    return [];
  }
}

export default async function Team() {
  const teamData = await getTeamMembers();

  return (
    <>
      <section className="relative bg-[url('/Team/team.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
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
        <div className='px-4 my-8 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {teamData.map((team) => (
            <div key={team.id} className="flex flex-col">
              <div className="flex items-center justify-center">
                {team.photo ? (
                  <Image
                    src={team.photo}
                    alt={`${team.name}-img`}
                    width={272}
                    height={424}
                    className='w-auto h-auto object-contain max-w-[200px]'
                  />
                ) : (
                  <div className="w-[272px] h-[424px] flex items-center justify-center">
                    <User className="w-24 h-24 text-gray-400" />
                  </div>
                )}
              </div>
              <div className='bg-gray-100 dark:bg-gray-800 p-4 rounded-bl-2xl'>
                <h3 className="font-bold">{team.name}</h3>
                <p className="text-sm">{team.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}