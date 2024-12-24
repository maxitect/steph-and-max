import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link href="/wedding-day" className="flex items-center">
              The Wedding Day
            </Link>
            <Link href="/location" className="flex items-center">
              Location
            </Link>
            <Link href="/accommodation" className="flex items-center">
              Accommodation
            </Link>
            <Link href="/rsvp" className="flex items-center">
              RSVP
            </Link>
            <Link href="/gifting" className="flex items-center">
              Gifting
            </Link>
            <Link href="/faq" className="flex items-center">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
