"use client";

import { Icon } from "@iconify/react";
import { forwardRef } from "react";

type IconLinkProps = {
  icon: string;
  href: string;
  target?: string;
  rel?: string;
  className?: string;
};

export const IconLink = forwardRef<HTMLAnchorElement, IconLinkProps>(
  function IconLink({ icon, href, target, rel, className = "" }, ref) {
    const iconSize = "text-2xl sm:text-3xl w-10 h-10 sm:w-12 sm:h-12";
    return (
      <a
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        className={`flex items-center justify-center transition-all select-none rounded-full text-(--color-text) hover:bg-(--color-hover) hover:scale-105 ${className}`}
      >
        <Icon icon={icon} className={iconSize} />
      </a>
    );
  }
);
