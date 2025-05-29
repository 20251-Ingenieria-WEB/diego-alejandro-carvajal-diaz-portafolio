type CertificateTextProps = {
  name: string;
  role: string;
  date: string;
  certificate: string;
  description: string;
};

export default function certificateText({
  name,
  role,
  date,
  certificate,
  description,
}: CertificateTextProps) {
  return (
    <div className="flex  justify-center p-5 border-gray-200  items-center ">
      <div className="flex-row items-center mb-4 w-[30%]">
        <div className="flex flex-col mb-4">
          <h2 className="font-semibold">{name}</h2>
          <p className=" text-sm">
            {role}{" "}
            <span className="bg-[#65a30d] px-2 py-0.5 text-white">{date}</span>
          </p>
        </div>
      </div>

      <div className="flex m-10 flex-col max-w-[70%]">
        <h2 className="font-semibold mb-1">{certificate}</h2>
        <p className="text-gray-400 text-sm ">{description}</p>
      </div>
    </div>
  );
}
