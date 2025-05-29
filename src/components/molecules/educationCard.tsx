import CertificateText from "../atoms/certificateText";
import { getCertificateItems } from "../data/items";
export default function EducationCard() {
  const certificates = getCertificateItems();
  return (
    <section className="text-slate-400 p-5 justify-items-center mx-6 w-full rounded-2xl pb-20 max-w-screen-lg">
      <h1 className="font-bold text-5xl mb-10">Education</h1>
      <p className=" mb-5 text-justify">
        I hold a strong academic foundation in software development and computer
        science, which has equipped me with the theoretical knowledge and
        practical skills to excel in the tech industry. My education has
        included in-depth training in web technologies, database systems, and
        software engineering principles. Throughout my studies, I have completed
        various projects that strengthened my understanding of full-stack
        development, version control, and UI/UX best practices, laying the
        groundwork for my continued growth as a developer.
      </p>
      <div className="bg-gray-800 rounded-xl px-5">
        {certificates.map((certificate, index) => (
          <div key={certificate.name} className="py-4">
            <CertificateText
              name={certificate.name}
              role={certificate.role}
              date={certificate.date}
              certificate={certificate.certificate}
              description={certificate.description}
            />

            {/* Border below, only if it's NOT the last item */}
            {index !== certificates.length - 1 && (
              <div className="w-[96%] border-b border-slate-400 mx-auto h-[0.6px]" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
