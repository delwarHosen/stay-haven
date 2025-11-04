"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logout from "./auth/Logout";

export default function MobileMenu({ session }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {open && (
        <div className="absolute top-[70px] left-0 w-full bg-white/90 shadow-lg border-t z-40">
          <ul className="flex flex-col items-center gap-4 py-4 font-medium text-gray-700">
            <li><Link href="/" onClick={() => setOpen(false)}>/</Link></li>
            <li><Link href="/hotels" onClick={() => setOpen(false)}>All hotels</Link></li>
            <li><Link href="#" onClick={() => setOpen(false)}>Contact Us</Link></li>
            <li><Link href="/bookings" onClick={() => setOpen(false)}>Bookings</Link></li>
            <li>
              {session?.user ? (
                <div className="flex flex-col items-center space-y-1">
                  <span>{session.user.name}</span>
                  <Logout />
                </div>
              ) : (
                <Link href="/login" onClick={() => setOpen(false)} className="text-blue-600 hover:underline">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
