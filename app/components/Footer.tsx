import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="w-full h-[1px] bg-[#F6762D] mt-10"></div>
      <footer className="font-Coolvetica w-full h-[200px] p-6 flex justify-start items-center">
        <Link href="/" className="text-3xl ">
          <span className="text-[#4BAF32]">bharat</span>
          <span className="text-[#F6762D]">bnb</span>
        </Link>
      </footer>
    </>
  );
}
