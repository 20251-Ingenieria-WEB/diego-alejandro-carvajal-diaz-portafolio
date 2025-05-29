import NameCard from "../molecules/nameCard";
import KnowledgeSection from "../molecules/knowledgeSection";
import EducationCard from "../molecules/educationCard";
import PortfolioCard from "../molecules/portfolioCard";

export default function PortfolioLP() {
  return (
    <section className="mx-6 w-full md:w-[60%] rounded-2xl  max-w-screen-lg justify-items-center">
      <NameCard />
      <KnowledgeSection />
      <EducationCard />
      <PortfolioCard />
      <footer>todos los derechos reservados 🤙🏽</footer>
    </section>
  );
}
