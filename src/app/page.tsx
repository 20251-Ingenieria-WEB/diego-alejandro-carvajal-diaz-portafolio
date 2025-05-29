// import Image from "next/image";

import PortfolioLP from "@/components/organisms/portfolioLP";

export default function Home() {
  return (
    <main className="bg-gray-900 py-10 mx-1 w-screen justify-items-center">
      <h1 className="font-bold text-6xl text-slate-400 text-center mb-20">
        &lt;<span className="text-[#65a30d]">DiegoACDev</span> /&gt;
      </h1>
      <PortfolioLP />
    </main>
  );
}
