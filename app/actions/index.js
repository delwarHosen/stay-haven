"use server"

import { signIn } from "@/auth"

export async function login(formData) {
    try {
        const respons = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false
        })
        return respons
    } catch (err) {
        throw new Error(err)
    }
}