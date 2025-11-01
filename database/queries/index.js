import { bookingModel } from "@/models/booking-model";
import { hotelModel } from "@/models/hotel-model";
import { ratingMoidel } from "@/models/rating-model";
import { reviewMoidel } from "@/models/review-model";
import { isDateInBetween, replaceMongoInArray, replaceMongoInObject } from "@/utils/data-utils";

export async function getAllHotels(destination, checkin, checkout) {
    const regex = new RegExp(destination, "i");

    const hotelsByDestination = await hotelModel.find({ city: { $regex: regex } })
        .select(["thumbNailUrl", "name", "city", "highRate", "lowRate", "propertyCategory"])
        .lean();
    // console.log(hotels)

    let allHotels = hotelsByDestination;

    if (checkin && checkout) {

        allHotels = await Promise.all(
            allHotels.map(async (hotel) => {
                const found = await findBooking(hotel._id, checkin, checkout);
                console.log(found);

                if (found) {
                    hotel["isBooked"] = true;
                } else {
                    hotel["isBooked"] = false;
                }
                return hotel;
            })
        )
    }

    return replaceMongoInArray(allHotels);
}


async function findBooking(hotelId, checkin, checkout) {
    const matches = await bookingModel.find({ hotelId: hotelId.toString() }).lean();

    const found = matches.find((match) => {
        return (
            isDateInBetween(checkin, match.checkin, match.checkout) ||
            isDateInBetween(checkout, match.checkin, match.checkout)
        )
    })

    return found
}


export async function getAllHotelsDetailById(hotelId, checkin, checkout) {
    const hotelDetailsId = await hotelModel.findById(hotelId).lean();
    const found = await findBooking(hotelDetailsId._id, checkin, checkout);
    if (found) {
        hotelDetailsId["isBooked"] = true;
    } else {
        hotelDetailsId["isBooked"] = false;
    }
    return replaceMongoInObject(hotelDetailsId);
}

export async function getRatingsForHotel(hotelId) {
    const ratings = await ratingMoidel.find({ hotelId: hotelId }).lean();
    return replaceMongoInArray(ratings)
}

export async function getReviewsForHotel(hotelId) {
    const reviews = await reviewMoidel.find({ hotelId: hotelId }).lean();
    return replaceMongoInArray(reviews)
}

