"use client";

import { usePathname } from "next/navigation";

export default function useGetLang() {
  const path = usePathname();

  if (path.includes("ru")) return "ru";
  else return "en";
}
