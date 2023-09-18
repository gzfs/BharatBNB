import Link from "next/link";

export default function Convenience() {
  return (
    <div>
      <p className="text-4xl font-Coolvetica text-[#4BAF32] pb-6">
        Covenience
      </p>
      <div>
        <p className="text-lg font-Coolvetica text-[#AC8080]">
          Safe Commute with
        </p>
        <Link
          href="#"
          className="font-Coolvetica mt-2 text-[#F6762D] text-xl border-2 border-[#F6762D] px-10 py-3 w-fit rounded-full flex items-center justify-start"
        >
          BharatBNB Travels
        </Link>
      </div>
      <div>
        <p className="text-lg font-Coolvetica text-[#AC8080] mt-4">
          Tasty Foods at your Doorstep with
        </p>
        <Link
          href="#"
          className="font-Coolvetica mt-2 text-[#F6762D] text-xl border-2 border-[#F6762D] px-10 py-3 w-fit rounded-full flex items-center justify-start"
        >
          BharatBNB Foods
        </Link>
      </div>
    </div>
  );
}
