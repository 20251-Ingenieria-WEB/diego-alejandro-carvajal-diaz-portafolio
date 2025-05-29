import Image from "next/image";

type portfolioProps = {
  img: string;
  title: string;
  desc: string;
  url?: string;
};

export default function PortfolioContent({ img, title, desc }: portfolioProps) {
  return (
    <div className="min-w-[260px] bg-gray-800 rounded-xl shadow-lg pb-4 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl">
      <div className="w-[370px] h-[200px] mb-3 relative">
        <Image
          src={img}
          alt={title}
          fill
          className="rounded-lg object-cover pointer-events-none select-none"
          sizes="200px"
        />
      </div>
      <div>
        <h2 className="font-semibold text-gray-200 p-3 mb-1 text-lg">
          {title}
        </h2>
        <p className="text-gray-400 text-sm px-3 text-center">{desc}</p>
      </div>
    </div>
  );
}
