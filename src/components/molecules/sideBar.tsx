import Image from "next/image";

export default function SideBar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-800 p-6 flex-col rounded-r-lg shadow-md hidden md:flex z-40">
      <Image
        src="/diego.jfif" // Place your image in public/profile.jpg
        alt="Profile"
        width={120}
        height={120}
        className="rounded-full mb-4 self-center"
      />
      <div className="mb-4 text-center">
        <p className="font-bold text-lg">Edad: 30 años</p>
        <p className="font-bold text-lg">Front-End Developer</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Skills</h3>
        <ul className="list-inside text-sm space-y-2">
          <li>
            JavaScript
            <div className="w-full bg-gray-700 rounded h-2 mt-1">
              <div
                className="bg-blue-500 h-2 rounded"
                style={{ width: "90%" }}
              />
            </div>
          </li>
          <li>
            C#
            <div className="w-full bg-gray-700 rounded h-2 mt-1">
              <div
                className="bg-blue-400 h-2 rounded"
                style={{ width: "80%" }}
              />
            </div>
          </li>
          <li>
            SQL
            <div className="w-full bg-gray-700 rounded h-2 mt-1">
              <div
                className="bg-cyan-400 h-2 rounded"
                style={{ width: "85%" }}
              />
            </div>
          </li>
          <li>
            Java
            <div className="w-full bg-gray-700 rounded h-2 mt-1">
              <div
                className="bg-indigo-400 h-2 rounded"
                style={{ width: "75%" }}
              />
            </div>
          </li>
          <li>
            Python
            <div className="w-full bg-gray-700 rounded h-2 mt-1">
              <div
                className="bg-green-400 h-2 rounded"
                style={{ width: "70%" }}
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Soft Skills</h3>
        <ul className="list-inside text-sm space-y-2">
          <li>
            Comunicación
            <div className="w-full bg-gray-700 rounded h-2 mt-1">
              <div
                className="bg-yellow-400 h-2 rounded"
                style={{ width: "90%" }}
              />
            </div>
          </li>
          <li>
            Trabajo en equipo
            <div className="w-full bg-gray-700 rounded h-2 mt-1">
              <div
                className="bg-yellow-300 h-2 rounded"
                style={{ width: "85%" }}
              />
            </div>
          </li>
          <li>
            Resolución de problemas
            <div className="w-full bg-gray-700 rounded h-2 mt-1">
              <div
                className="bg-yellow-500 h-2 rounded"
                style={{ width: "80%" }}
              />
            </div>
          </li>
          <li>
            Adaptability
            <div className="w-full bg-gray-700 rounded h-2 mt-1">
              <div
                className="bg-yellow-200 h-2 rounded"
                style={{ width: "75%" }}
              />
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">Languages</h3>
        <ul className="list-inside text-sm">
          <li>Spanish (Native)</li>
          <li>English (Intermediate)</li>
        </ul>
      </div>
    </aside>
  );
}
