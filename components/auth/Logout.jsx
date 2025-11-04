"use client"

import { signOut } from "next-auth/react"

export default function Logout() {

    return (
        <button className="bg-[#F47617] text-white px-3 py-2 rounded-md" onClick={
            () => { signOut({ callbackUrl: "http://localhost:3000/login" }) }
        }>
            Sign Out
        </button>
    )
}
