import { hotelModel } from "@/models/hotel-model";
import { replaceMongoInArray } from "@/utils/data-utils";

export async function getAllHotels() {
    const hotels = await hotelModel.find().lean();
    
    console.log(hotels)

    return replaceMongoInArray(hotels);
}