import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Cookies from "js-cookie";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setCookie() {
  Cookies.set('redirectUrl', window.location.href, { expires: 1, path: '/' });
}

export function getCookie() {
  return Cookies.get("redirectUrl");
}

export function justSignedIn(date:Date) {
  const currentTime = Date.now();

  const lastSignInTime = new Date(date).getTime();

  const timeDifference = currentTime - lastSignInTime;

  return timeDifference < 90000; // 1.5 minutes in milliseconds
}

export function removeCookie(){
  Cookies.remove('redirectUrl');
}