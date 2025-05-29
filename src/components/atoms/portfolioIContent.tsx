import Image from "next/image";

type Project = {
  img: string;
  title: string;
  desc: string;
  url?: string;
};

type portfolioProps = {
  project: Project;
  setActiveProject: (project: Project) => void;
};

export default function PortfolioContent({
  project,
  setActiveProject,
}: portfolioProps) {
  return (
    <div
      onClick={() => setActiveProject(project)}
      className="min-w-[260px] bg-gray-800 rounded-xl shadow-lg pb-4 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl"
    >
      <div className="w-[370px] h-[200px] mb-3 relative">
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="rounded-lg object-cover pointer-events-none select-none"
          sizes="200px"
        />
      </div>
      <div className="w-[300px] justify-items-center">
        <h2 className="font-semibold text-gray-200 p-3 mb-1 text-lg">
          {project.title}
        </h2>
        <p className="text-gray-400 text-sm px-3 text-center">{project.desc}</p>
      </div>
      <div className="text-center mt-2">
        <button className="text-blue-400 hover:underline text-sm">
          See more
        </button>
      </div>
    </div>
  );
}
