import Image from "next/image";

export default function NameCard() {
  return (
    <section className="mx-6 w-full rounded-2xl pb-20 max-w-screen-lg justify-items-center ">
      <div className="relative flex items-start">
        {/* Vertical Line */}
        <div
          className="absolute left-0 bottom-0 border-b-[100px] border-b-[#65a30d]
          border-r-[2px] border-r-transparent"
        ></div>

        {/* Horizontal Line */}
        <div
          className="absolute left-0 bottom-0 border-t-[2px] border-t-transparent
          border-l-[50px] border-l-[#65a30d] "
        ></div>
        <div className="block items-center justify-between w-full md:flex">
          <div className="pr-6 pl-7">
            <h1 className="text-5xl font-bold text-slate-400 pb-4">
              Diego Alejandro Carvajal Díaz
            </h1>
            <p className="text-slate-400 mb-5">
              I am a 9th-semester Computer Scientist student at the University
              of Antioquia with a strong interest in web development. I am eager
              to continue developing my technical expertise and interpersonal
              skills while contributing to innovative projects.
            </p>
          </div>
          <div className="m-10 flex  items-center justify-center">
            <Image
              src="/diego.jpeg"
              alt="Profile"
              width={1000}
              height={1000}
              className="rounded-xl min-w-[200px] object-cover shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
