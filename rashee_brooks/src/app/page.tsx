"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col sm:flex-row text-[var(--color-black)]"
      style={{ backgroundColor: "white" }}
    >
      {/* Left Side Vertical Navigation */}
      <aside className="flex sm:flex-col items-center sm:items-start gap-6 sm:gap-4 p-4 sm:p-8 border-r border-[var(--color-black)]">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`relative font-medium text-sm sm:text-base px-6 py-2 rounded-full border border-[var(--color-black)] transition-all duration-300 ${
              pathname === item.href
                ? "bg-gradient-to-r from-[var(--color-plum)] to-[var(--color-blue)] text-white shadow-md ring-2 ring-[var(--color-plum)] ring-offset-2 font-semibold tracking-wide"
                : "bg-transparent text-[var(--color-black)] hover:bg-[var(--color-blue)] hover:text-white transform hover:scale-105"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </aside>

      {/* Main Content Area with Right Image Section */}
      <div className="flex-grow flex flex-col sm:flex-row">
        {/* Center Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 sm:px-12 py-10 text-center">
          <div className="">
            <Image
              src="/TriceLogoTrans.png"
              alt="Trice Logistics Logo"
              width={900}
              height={400}
              priority
            />
          </div>
    
        </main>

        {/* Right Side Images */}
<aside className="hidden sm:flex flex-col gap-4 p-6 w-1/3">
  <Image
    src="/boxtruck.jpg"
    alt="Truck in motion"
    width={400}
    height={160}
    className="w-full h-40 object-cover rounded-lg shadow-md"
  />
  <Image
    src="/smile.jpg"
    alt="Cargo loading"
    width={400}
    height={160}
    className="w-full h-40 object-cover rounded-lg shadow-md"
  />
  <Image
    src="/loadingtruck.jpg"
    alt="Logistics operations"
    width={400}
    height={160}
    className="w-full h-40 object-cover rounded-lg shadow-md"
  />
  <Image
    src="/sunset.jpg"
    alt="Fleet overview"
    width={400}
    height={160}
    className="w-full h-40 object-cover rounded-lg shadow-md"
  />
</aside>
      </div>
    </div>
  );
}
