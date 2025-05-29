// import Image from "next/image";

import NameCard from "@/components/molecules/nameCard";
import KnowledgeSection from "@/components/molecules/knowledgeSection";
import EducationCard from "@/components/molecules/educationCard";
import PortfolioCard from "@/components/molecules/portfolioCard";

export default function Home() {
  return (
    <main className="bg-gray-900 py-10 mx-1 w-screen justify-items-center">
      <h1 className="font-bold text-6xl text-slate-400 text-center mb-20">
        &lt;<span className="text-[#65a30d]">DiegoACDev</span> /&gt;
      </h1>
      <section className="mx-6 w-full rounded-2xl  max-w-screen-lg justify-items-center">
        <NameCard />
        <KnowledgeSection />
        <EducationCard />
        <PortfolioCard />
      </section>
    </main>
  );
}
