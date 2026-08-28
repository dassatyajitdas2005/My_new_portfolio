"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, FolderGit2, Send } from "lucide-react";

export function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Projects", href: "/projects", icon: FolderGit2 },
    { name: "Contact", href: "/contact", icon: Send },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 w-full sm:hidden">
      <ul className="flex w-full items-center justify-around rounded-t-3xl border-t border-bg-700 bg-backdrop px-2 py-3 text-text-secondary shadow-lg backdrop-blur-xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li key={item.name} className="flex-1">
              <Link
                href={item.href}
                className={`flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors ${
                  isActive
                    ? "text-highlight"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? "text-highlight" : ""}`} />
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
