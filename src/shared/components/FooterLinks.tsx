"use client";

import Link from "next/link";
import { LANGUAGE } from "@src/configuration/navigation.config";
import { useSearchParams, useRouter } from "next/navigation";
import { getProfileData } from "@src/mock/index.mock";
import { useState } from "react";

export default function FooterLinks() {
  const [open, setOpen] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const lang = searchParams.get("lang") === "en" ? "en" : "es";
  const profile = getProfileData(lang);

  const changeLang = (selected: "es" | "en") => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", selected);
    router.push(`?${params.toString()}`);
    setOpen(false);
  };

  return (
      <footer className="bg-blue-300 w-full min-h-[10vh] flex items-center justify-center rounded-t-2xl px-6 ">

      </footer>  
    
  );
}