"use client";
import { useRef, useState } from "react";
import { getPortfolioItems } from "../data/items";
//import Link from "next/link";
import PortfolioContent from "../atoms/portfolioIContent";
import Image from "next/image";

type Project = {
  img: string;
  title: string;
  desc: string;
  url?: string;
};

export default function PortfolioCard() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    const slider = scrollRef.current;
    if (!slider) return;

    setIsDragging(true);
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;

    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const projects = getPortfolioItems();

  return (
    <section className="text-slate-400 p-5 mx-6 w-full rounded-2xl pb-20 max-w-screen-lg">
      <div className="justify-items-center">
        <h1 className="font-bold text-5xl mb-10">Portfolio</h1>
        <p className="mb-5">
          I bring both technical expertise and practical experience to every
          project. My work, have academic and personal projects that involves
          the health-care and creation of APIs
        </p>
      </div>

      <div
        className="overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="flex space-x-6 pb-4 w-max">
          {projects.map((project) => (
            <div key={project.title} className="min-w-[260px]">
              <PortfolioContent
                project={project}
                setActiveProject={setActiveProject}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-gray-900 p-6 rounded-xl max-w-4xl text-white relative max-h-[90vh] overflow-y-auto justify-items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative mb-4">
              <Image
                src={activeProject.img}
                alt={activeProject.title}
                width={300} // Set appropriate dimensions
                height={300} // Set appropriate dimensions
                className="rounded-lg object-contain pointer-events-none select-none"
                priority
              />
            </div>
            <h2 className="text-xl w-[300px] font-bold mb-2">
              {activeProject.title}
            </h2>
            <p className="text-sm w-[300px] text-gray-300">
              {activeProject.desc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
