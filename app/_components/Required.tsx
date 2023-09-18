import Link from "next/link";

export default function Required() {
  return (
    <div>
      <p className="text-4xl font-Coolvetica text-[#4BAF32] pb-6">
        Required for your Trip
      </p>
      <div>
        <p className="text-lg font-Coolvetica text-[#AC8080]">
          Message the host about the purpose of the Trip
        </p>
        <Link
          href="#"
          className="font-Coolvetica mt-2 text-[#F6762D] text-xl border-2 border-[#F6762D] px-10 py-3 w-fit rounded-full flex items-center justify-start"
        >
          Message the Host
        </Link>
      </div>
      <div>
        <p className="text-lg font-Coolvetica text-[#AC8080] mt-4">
          A valid PAN is required as per RBIs Guidelines
        </p>
        <Link
          href="#"
          className="font-Coolvetica mt-2 text-[#F6762D] text-xl border-2 border-[#F6762D] px-10 py-3 w-fit rounded-full flex items-center justify-start"
        >
          Add your PAN Number
        </Link>
      </div>
      <div>
        <p className="text-lg font-Coolvetica text-[#AC8080] mt-4">
          Add your Mobile Number to get trip updates
        </p>
        <Link
          href="#"
          className="font-Coolvetica mt-2 text-[#F6762D] text-xl border-2 border-[#F6762D] px-10 py-3 w-fit rounded-full flex items-center justify-start"
        >
          Add your Mobile Number
        </Link>
      </div>
    </div>
  );
}
