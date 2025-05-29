import getItems from "@/components/data/items";

export default function KnowledgeSection() {
  const items = getItems();
  return (
    <section className="text-slate-400 p-5 justify-items-center mx-6 w-full rounded-2xl pb-20 max-w-screen-lg">
      <h1 className="font-bold text-5xl mb-10">My Knowledge</h1>
      <p className="mb-5 text-justify">
        I specialize in modern front-end development, using technologies like
        JavaScript, TypeScript, React, and Next.js to build dynamic and scalable
        web applications. With a solid understanding of UI libraries and
        development tools, I focus on delivering user-friendly interfaces and
        efficient codebases. My experience also includes working with Node.js
        for server-side development and using Git for version control in
        collaborative environments.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-5">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col items-center transition-all hover:shadow-2xl hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 24 24"
            >
              <path fill="#65a30d" d={item.img} />
            </svg>
            <h2 className="font-semibold text-gray-400 mb-1">{item.title}</h2>
            <p className="text-gray-400 text-sm text-center">{item.desc}</p>
          </div>
        ))}
        <div className="bg-gray-800 rounded-xl shadow-lg justify-center p-4 flex flex-col items-center transition-all hover:shadow-2xl hover:scale-105">
          <h2 className="font-semibold text-gray-400 mb-1">Advertising</h2>
          <p className="text-gray-400 text-sm text-center">
            Need to take your idea to the next level? We offer comprehensive
            services that combine design, technology, and strategy to help you
            stand out.
          </p>
          <a>Order Now!</a>
        </div>
      </div>
    </section>
  );
}
