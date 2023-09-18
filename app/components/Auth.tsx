"use client"

import { setCookie } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Auth() {

  const router = useRouter()
  const handleSignIn = () => {
    setCookie()
    router.push('/sign-up')
  }
  return (
    <>
      <p className="text-4xl font-Coolvetica text-[#4BAF32] pb-6">
        Sign in with
      </p>
      <div className="flex w-[400px] justify-start">
        <Link
          href="#"
          className="font-Coolvetica text-[#F6762D] text-xl border-2 border-[#F6762D] px-2 py-2 w-[160px] rounded-full flex items-center justify-start"
        >
          <img
            src="/assets/imgs/icons/Biometric.svg"
            alt="Google"
            width="30px"
          />
          <p className="ml-4">Digilocker</p>
        </Link>
        <div
          onClick={handleSignIn}
          className="font-Coolvetica ml-4 text-[#F6762D] text-xl border-2 border-[#F6762D] px-2 py-2 w-[160px] rounded-full flex items-center justify-start cursor-pointer"
        >
          <img
            src="/assets/imgs/icons/Google.svg"
            alt="Google"
            width="30px"
          />
          <p className="ml-4">Google</p>
        </div>
      </div>
    </>
  );
}
