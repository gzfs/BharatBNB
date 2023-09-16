import Link from "next/link";

export default function RegisterNavbar() {
  return (
    <nav className="font-Coolvetica px-10 py-4 flex justify-between items-center w-full">
      <Link href="/" className="text-3xl">
        <span className="text-[#4BAF32]">bharat</span>
        <span className="text-[#F6762D]">bnb</span>
      </Link>
    </nav>
  );
}
