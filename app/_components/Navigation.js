"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (href) => {
    return pathname === href ? "text-accent-400" : "";
  };

  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
        <li>
          <Link
            href="/"
            className={`transition-colors hover:text-accent-400 ${isActive(
              "/"
            )}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/cabins"
            className={`transition-colors hover:text-accent-400 ${isActive(
              "/cabins"
            )}`}
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`transition-colors hover:text-accent-400 ${isActive(
              "/about"
            )}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className={`transition-colors hover:text-accent-400 ${
              isActive("/account") ||
              isActive("/account/profile") ||
              isActive("/account/reservation")
            }`}
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
}
