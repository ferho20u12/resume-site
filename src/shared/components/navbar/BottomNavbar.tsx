"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Inicio", icon: "🏠" },
  { href: "/portfolio", label: "Portafolio", icon: "🗂️" },
  { href: "/experience", label: "Experiencia", icon: "💼" },
  { href: "/education", label: "Educación", icon: "🎓" }
];

export default function BottomNavbar() {
  const path = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md">
      <ul className="flex justify-around py-2">
        {nav.map(item => (
          <li key={item.href}>
            <Link href={item.href} className={`flex flex-col items-center
             ${path === item.href ? "text-blue-600" : "text-gray-600"}`}>
              <span>{item.icon}</span>
              <span className="text-xs">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
