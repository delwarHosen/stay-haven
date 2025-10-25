
// import Link from "next/link"
// import Image from "next/image"

// const Navbar = () => {
//   return (
//     <nav>
//       <Link href="/">
//         <Image
//           src="/logo.png"
//           alt="Stay haven Logo"
//           width={200}
//           height={300} />
//       </Link>

//       <ul>
//         <li>
//           <Link href="#">Recommended Places</Link>
//         </li>

//         <li>
//           <Link href="#">About Us</Link>
//         </li>

//         <li>
//           <Link href="#">Contact us</Link>
//         </li>

//         <li>
//           <Link href="/bookings">Bookings</Link>
//         </li>

//         <li>
//           <Link href="/login" className="login">Login</Link>
//         </li>
//       </ul>
//     </nav>
//   )
// }

// export default Navbar



"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="max-w-7xl flex mx-auto justify-between px-4 py-4 absolute top-0 w-full left-0 right-0 z-50">

      <Link href="/">
        <Image
          src="/logo.png"
          alt="Stay haven Logo"
          width={200}
          height={200}
          className="h-[70px] md:h-[60px] lg:h-[100px]"
        />
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="w-6 h-[3px] bg-black mb-[5px]"></div>
        <div className="w-6 h-[3px] bg-black mb-[5px]"></div>
        <div className="w-6 h-[3px] bg-black"></div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6">
        <li><Link href="#">Recommended Places</Link></li>
        <li><Link href="#">About Us</Link></li>
        <li><Link href="#">Contact us</Link></li>
        <li><Link href="/bookings">Bookings</Link></li>
        <li><Link href="/login" className="bg-primary px-6 py-3 text-white font-bold rounded-md">Login</Link></li>
      </ul>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col gap-4 px-6 py-6 md:hidden">
          <li><Link href="#" onClick={() => setOpen(false)}>Recommended Places</Link></li>
          <li><Link href="#" onClick={() => setOpen(false)}>About Us</Link></li>
          <li><Link href="#" onClick={() => setOpen(false)}>Contact us</Link></li>
          <li><Link href="/bookings" onClick={() => setOpen(false)}>Bookings</Link></li>
          <li><Link href="/login" className="bg-primary px-6 py-3 text-white font-bold rounded-md" onClick={() => setOpen(false)}>Login</Link></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
