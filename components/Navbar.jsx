
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import Logout from "./auth/Logout";
import MobileMenu from "./MobileMenu";

export default async function Navbar({ sideMenu }) {
  const session = await auth();

  return (
    <nav className="w-full  shadow-md  ">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Stay Haven Logo"
            width={180}
            height={60}
            priority
            className="h-[50px] w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        {sideMenu && (
          <ul className="hidden md:flex space-x-6 items-center font-medium text-gray-700">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/hotels">All hotels</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="/bookings">Bookings</Link></li>
            <li>
              {session?.user ? (
                <div className="flex items-center space-x-2">
                  <span>{session.user.name}</span>
                  <span>|</span>
                  <Logout />
                </div>
              ) : (
                <Link href="/login" className="text-blue-600 hover:underline">
                  Login
                </Link>
              )}
            </li>
          </ul>
        )}

        {/* Mobile Menu Toggle */}
        {sideMenu && <MobileMenu session={session} />}
      </div>
    </nav>
  );
}
