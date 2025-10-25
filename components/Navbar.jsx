
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Stay haven Logo"
          width={200}
          height={200} />
      </Link>

      <ul>
        <li>
          <Link href="#">Recommended Places</Link>
        </li>

        <li>
          <Link href="#">About Us</Link>
        </li>

        <li>
          <Link href="#">Contact us</Link>
        </li>

        <li>
          <Link href="/bookings">Bookings</Link>
        </li>

        <li>
          <Link href="/login" className="login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar