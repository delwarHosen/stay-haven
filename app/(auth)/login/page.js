import LoginForm from "@/components/auth/LoginForm";
import SocialLogins from "@/components/auth/SocialLogins";


export default function LoginPage() {
    return (
        <section className="h-screen grid place-items-center bg-[url('/hero-bg1.jpg')] bg-cover bg-no-repeat bg-center">
            <div className="max-w-[450px] bg-white w-full mx-auto p-6 mt-28 border border-gray-700/20 rounded-md">
                <h4 className="font-bold text-2xl">Sign in</h4>
                <LoginForm />
                <SocialLogins mode={"login"} />
            </div>
        </section>
    )
}
