import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col text-[var(--color-black)]"
      style={{ backgroundColor: "var(--color-tan)" }}
    >
      {/* Header with cropped logo + nav */}
      <header className="flex items-center justify-between px-6 sm:px-12 py-4 bg-[var(--color-tan)]">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/TriceLogo.jpeg" // Full Logo
            alt="Trice Icon"
            width={60}
            height={60}
            className="rounded"
          />
          <span className="text-lg font-bold text-[var(--color-purple)] hidden sm:inline">
            Trice Logistics
          </span>
        </Link>
        <nav className="flex space-x-4 text-sm sm:text-base font-medium">
          <Link href="/" className="hover:underline text-[var(--color-purple)]">Home</Link>
          <Link href="/services" className="hover:underline text-[var(--color-purple)]">Services</Link>
          <Link href="/about" className="hover:underline text-[var(--color-purple)]">About</Link>
          <Link href="/contact" className="hover:underline text-[var(--color-purple)]">Contact</Link>
        </nav>
      </header>

      {/* Main Content with large center logo */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 sm:px-12 py-10 text-center sm:text-left">
        <Image
          src="/TriceLogoSmall.jpeg" // Full-size cropped logo centered
          alt="Trice Logistics Logo"
          width={300}
          height={80}
          priority
        />

        <h1 className="mt-8 text-3xl sm:text-4xl font-bold text-[var(--color-purple)]">
          Welcome to Trice Logistics
        </h1>
        <p className="mt-2 text-lg">Driven to Deliver, Built To Lead.</p>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-6">
          <Link
            href="/services"
            className="rounded-full border border-transparent text-white font-medium text-sm sm:text-base h-7 sm:h-10 px-8"
            style={{ backgroundColor: "var(--color-purple)" }}
          >
            Our Services
          </Link>
          <Link
            href="/about"
            className="rounded-full border font-medium text-sm sm:text-base h-7 sm:h-10 px-8 bg-transparent"
            style={{
              borderColor: "var(--color-black)",
              color: "var(--color-black)",
            }}
          >
            About Us
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex gap-6 flex-wrap items-center justify-center text-sm py-6 text-[var(--color-purple)]">
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/services" className="hover:underline">Services</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </footer>
    </div>
  );
}
