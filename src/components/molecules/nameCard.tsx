export default function NameCard() {
  return (
    <section className="mx-6 w-full rounded-2xl  max-w-screen-lg justify-items-center">
      <div className="relative flex items-start">
        {/* Vertical Line */}
        <div
          className="absolute left-0 bottom-0 border-b-[100px] border-b-green-500
          border-r-[2px] border-r-transparent"
        ></div>

        {/* Horizontal Line */}
        <div
          className="absolute left-0 bottom-0 border-t-[2px] border-t-transparent
          border-l-[50px] border-l-green-500 "
        ></div>
        <div className="pr-6 pl-7">
          <h1 className="text-2xl font-bold text-slate-400 pb-4">
            Diego Alejandro Carvajal Díaz
          </h1>
          <p className="text-slate-400">
            I am a 9th-semester Computer Scientist student at the University of
            Antioquia with a strong interest in web development. I am eager to
            continue developing my technical expertise and interpersonal skills
            while contributing to innovative projects.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div className="size-48 bg-gray-700 rounded-xl flex items-center justify-center">
            <span className="text-slate-500">Espacio para imagen</span>
          </div>
        </div>
      </div>
    </section>
  );
}
