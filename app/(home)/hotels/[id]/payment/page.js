import { auth } from "@/auth";
import PaymentForm from "@/components/payment/PaymentForm";
import { getAllHotelsDetailById, getDayDifference, getUserByEmail } from "@/database/queries";
import { redirect } from "next/navigation";


export default async function PaymentPage({ params: { id }, searchParams: { checkin, checkout } }) {

    const session = await auth();
    if (!session) {
        redirect("/login")
    }

    const loggedInUser = await getUserByEmail(session?.user?.email);
    const hotelInfo = await getAllHotelsDetailById(id, checkin, checkout);

    const hasCheckinCheckout = checkin && checkout;

    let cost = (hotelInfo?.highRate + hotelInfo?.lowRate) / 2;

    if (hasCheckinCheckout) {
        const days = getDayDifference(checkin, checkout);
        cost = cost * days;

    }
    return (
        <section className="container">
            <div className="p-6  max-w-xl mx-auto my-12 mt-[110px] border border-gray-700/20 rounded-md">
                <h2 className="font-bold text-2xl">Payment Details</h2>
                <p className="text-gray-600 text-sm">You have picked <b>{hotelInfo?.name}</b> and total price is <b>${cost}</b>{hasCheckinCheckout && ` for ${getDayDifference(checkin, checkout)}`} day(s)
                </p>
                <PaymentForm
                    loggedInUser={loggedInUser}
                    hotelInfo={hotelInfo}
                    checkin={checkin}
                    checkout={checkout}
                    cost={cost}
                />
            </div>
        </section>
    )
}
