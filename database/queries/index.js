import { hotelModel } from "@/models/hotel-model";
import { ratingMoidel } from "@/models/rating-model";
import { reviewMoidel } from "@/models/review-model";
import { replaceMongoInArray, replaceMongoInObject } from "@/utils/data-utils";

export async function getAllHotels() {
    const hotels = await hotelModel.find()
        .select(["thumbNailUrl", "name", "city", "highRate", "lowRate", "propertyCategory"])
        .lean();
    // console.log(hotels)

    return replaceMongoInArray(hotels);
}

export async function getAllHotelsDetailById(hotelId) {
    const hotelDetailsId = await hotelModel.findById(hotelId).lean();

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