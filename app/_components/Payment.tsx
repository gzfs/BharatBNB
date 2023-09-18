import Link from "next/link";

export default function Payment() {
  return (
    <div>
      <p className="text-4xl font-Coolvetica text-[#4BAF32] pb-6">
        Payment
      </p>
      <div>
        <p className="text-lg font-Coolvetica text-[#AC8080]">
          Secure Payment with
        </p>
        <Link
          href="#"
          className="font-Coolvetica mt-2 text-[#F6762D] text-xl border-2 border-[#F6762D] px-10 py-3 w-fit rounded-full flex items-center justify-start"
        >
          PhonePe Payment Gateway
        </Link>
      </div>
    </div>
  );
}
