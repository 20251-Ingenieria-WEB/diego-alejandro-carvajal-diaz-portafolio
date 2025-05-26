export default function KnowledgeSection() {
  const items = [
    {
      img: "m.586 12l4.95-4.95L6.95 8.464L3.414 12l3.536 3.536l-1.414 1.414zm8.201 8.728l4.486-17.94l1.94.485l-4.485 17.94zm8.263-5.192L20.586 12L17.05 8.464l1.415-1.414l4.95 4.95l-4.95 4.95z",
      title: "Web Developepment",
      desc: "Web design encompasses many different skills and disciplines in the production and maintenance of websites.",
    },
    {
      img: "M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.39-1-1.73V9.41l2.07 2.09c-.07.15-.07.32-.07.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.18 0-.35 0-.5.07L13.93 7.5a1.98 1.98 0 0 0-1.15-2.34c-.43-.16-.88-.2-1.28-.09L9.8 3.38l.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.79-2.04.79-2.82 0L2.6 13.41c-.79-.78-.79-2.04 0-2.82",
      title: "Git",
      desc: "Version Control, Collaboration, and Code Management",
    },
    {
      img: "M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.42 3.42 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79c.592.5.983 1.206 1.028 2.005c.045.823-.285 1.586-.865 2.153a3.4 3.4 0 0 1-2.374.938a3.4 3.4 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.4 7.4 0 0 0 1.593 2.757a8.2 8.2 0 0 0 2.787 2.001a8.95 8.95 0 0 0 3.66.76a9 9 0 0 0 3.657-.772a8.3 8.3 0 0 0 2.785-2.01a7.4 7.4 0 0 0 1.592-2.762a7 7 0 0 0 .25-3.074a7.1 7.1 0 0 0-1.016-2.779a7.8 7.8 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002c-.547.382-.609 1.015-.123 1.415l-.001.001l3.126 2.543l-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172c-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01l-8.62 6.617l-.034.025c-.813.622-1.075 1.658-.563 2.313c.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55c-1.47.004-2.827-.552-3.797-1.538a4.5 4.5 0 0 1-1.036-1.622a4.28 4.28 0 0 1 .282-3.519a4.7 4.7 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185c1.256-.002 2.455.41 3.398 1.175c.48.391.87.854 1.152 1.367a4.3 4.3 0 0 1 .522 1.706a4.2 4.2 0 0 1-.239 1.811a4.5 4.5 0 0 1-1.035 1.626",
      title: "3d Modeling",
      desc: "Character Design, Props & Objects, Environments",
    },
    {
      img: "M11.8 21q-1.05-.025-2.562-.238t-2.9-.687t-2.363-1.237T3 17v-2.5q0 .9.713 1.588t1.787 1.15t2.363.75t2.412.412q.225.725.613 1.388T11.8 21m-1.775-5.125q-1.125-.125-2.363-.413T5.389 14.7t-1.713-1.137T3 12V9.5q0 .95.788 1.65t1.95 1.188t2.525.75t2.487.362q-.3.55-.488 1.163t-.237 1.262M12 11q-3.725 0-6.363-1.175T3 7t2.638-2.825T12 3q3.75 0 6.375 1.175T21 7t-2.625 2.825T12 11m4.5 10q-1.875 0-3.187-1.312T12 16.5t1.313-3.187T16.5 12t3.188 1.313T21 16.5q0 .65-.187 1.25T20.3 18.9l2 2q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-2-2q-.55.325-1.15.513T16.5 21m0-2q1.05 0 1.775-.725T19 16.5t-.725-1.775T16.5 14t-1.775.725T14 16.5t.725 1.775T16.5 19",
      title: "DB Management",
      desc: "Data Architecture, Query Optimization",
    },
    {
      img: "M10.11 17H7.5l-4.91-5L7.5 7h2.61l1.31-2.26L18.21 3l1.87 6.74L18.77 12l1.31 2.26L18.21 21l-6.79-1.74zm.14-.25l5.13 1.38L12.42 13H6.5zm6.87.38L18.5 12l-1.38-5.13L14.15 12zm-6.87-9.88L6.5 11h5.92l2.96-5.13z",
      title: "Game Development",
      desc: "Mechanics, Levels & Prototypes",
    },
  ];
  return (
    <section className="text-slate-400 p-5 justify-items-center mx-6 w-full rounded-2xl pb-20 max-w-screen-lg">
      <h1 className="font-bold">My Knowledge</h1>
      <p>
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
            className="bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col items-center transition-all hover:shadow-2xl hover:scale-120"
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
        <div className="bg-gray-800 rounded-xl shadow-lg justify-center p-4 flex flex-col items-center transition-all hover:shadow-2xl hover:scale-120">
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
