"use client";
import { useRef, useState } from "react";
import { getPortfolioItems } from "../data/items";
import Link from "next/link";
import PortfolioContent from "../atoms/portfolioIContent";

export default function PortfolioCard() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
    const walk = (x - startX) * 1.5; // scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const projects = getPortfolioItems();

  return (
    <section className="text-slate-400 p-5 mx-6 w-full rounded-2xl pb-20 max-w-screen-lg">
      <div className="justify-items-center">
        <h1 className="font-bold text-5xl mb-10">Portfolio</h1>
        <p className="mb-5 ">
          I hold a strong academic foundation in software development and
          computer science, which has equipped me with the theoretical knowledge
          and practical skills to excel in the tech industry...
        </p>
      </div>

      {/* Scrollable Portfolio Cards */}
      <div
        className="overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="flex space-x-6 pb-4 w-max">
          {projects.map((project) => {
            const isExternal = project.url.startsWith("http");

            return isExternal ? (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PortfolioContent
                  img={project.img}
                  title={project.title}
                  desc={project.desc}
                />
              </a>
            ) : (
              <Link key={project.title} href={project.url}>
                <PortfolioContent
                  img={project.img}
                  title={project.title}
                  desc={project.desc}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
