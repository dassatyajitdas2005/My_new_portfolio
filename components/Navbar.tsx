"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { profileData } from "@/data/profile";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="pointer-events-none sticky left-0 right-0 top-0 z-50 w-full px-4 py-4 md:flex md:justify-center">
      <nav
        className={`pointer-events-auto flex w-full max-w-screen-xl items-center justify-between gap-6 rounded-full px-6 py-2 transition-all duration-300 ${
          scrolled
            ? "border border-bg-700 bg-backdrop shadow-lg backdrop-blur-md"
            : "border border-transparent bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-text-primary transition-opacity hover:opacity-80 sm:text-xl font-clash"
        >
          {profileData.initials}
        </Link>

        {/* Desktop Nav items */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-text-secondary sm:flex font-satoshi">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li key={link.name} className="group relative">
                <Link
                  href={link.href}
                  className={`flex items-center gap-2 transition-colors duration-200 ${
                    isActive ? "text-text-primary font-semibold" : "hover:text-text-primary"
                  }`}
                >
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-highlight transition-all" />
                  )}
                  <span className="relative inline-flex overflow-hidden">
                    <span className="translate-y-0 skew-y-0 transform-gpu transition-transform duration-300 group-hover:-translate-y-[120%] group-hover:skew-y-6">
                      {link.name}
                    </span>
                    <span className="absolute translate-y-[120%] skew-y-6 transform-gpu text-text-primary transition-transform duration-300 group-hover:translate-y-0 group-hover:skew-y-0">
                      {link.name}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right side Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
