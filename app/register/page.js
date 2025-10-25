import RegistrationForm from '@/components/auth/RegistrationForm'
import SocialLogins from '@/components/auth/SocialLogins'
import React from 'react'

export default function RegisterPage() {
    return (
        <section className="h-screen grid place-items-center lg:m-32 mt-32">
            <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
                <h4 className="font-bold text-2xl">Sign up</h4>
                <RegistrationForm />
                <SocialLogins />
            </div>
        </section>
    )
}
