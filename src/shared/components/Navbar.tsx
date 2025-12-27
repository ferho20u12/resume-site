// components/Navbar.tsx
import Link from "next/link"
import { NAVIGATION } from "@src/configuration/navigation.config"
import { Icon } from "@iconify/react"

export default function Navbar() {
  const items = NAVIGATION

  return (
    <nav
      className="
        fixed bottom-0 left-1/2 transform -translate-x-1/2
        z-50
        bg-blue-400 
        shadow-lg
        flex
        overflow-x-auto scrollbar-hide

        rounded-t-2xl px-3 py-2 w-full
        md:w-[25%] md:px-6 md:py-3 md:rounded-3xl md:bottom-6
      "
    >
      <div
        className="
          flex items-center justify-center gap-2

          /* tamaño mínimo para móviles → caben 5 sin scroll */
          *:min-w-13.75
          sm:*:min-w-15

          /* tamaño cómodo en pantallas medianas/grandes */
          md:*:min-w-17.5

          /* estilo de los botones */
          *:flex *:flex-col *:items-center *:justify-center 
          *:gap-1
          *:px-3 *:py-2
          *:rounded-xl
          *:hover:bg-blue-500 *:transition

          /* asegura que la barra solo ocupa lo que necesita */
          w-max mx-auto
        "
      >
        {items.map(({ label, href, icon }) => (
          <Link key={href} href={href}>
            <Icon icon={icon} className="text-lg sm:text-xl md:text-2xl" />
            <span className="text-[10px] sm:text-xs md:text-sm font-medium">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
