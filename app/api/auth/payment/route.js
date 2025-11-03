// import { bookingModel } from "@/models/booking-model";
// import { dbConnect } from "@/service/mongo";
// import mongoose from "mongoose";
// import { NextResponse } from "next/server";

// export const POST = async (request) => {
//     const { hotelId, userId, checkin, checkout } = await request.json();
//     await dbConnect();
//     const payload = {
//         hotelId: new mongoose.Types.ObjectId(hotelId),
//         userId: new mongoose.Types.ObjectId(userId),
//         checkin,
//         checkout
//     }

//     try {
//         await bookingModel.create(payload)
//         return NextResponse("A new booking has been made", {
//             status: 201
//         })
//     } catch (error) {
//         return NextResponse(error.message, {
//             status: 500
//         })
//     }
// }



import { bookingModel } from "@/models/booking-model";
import { dbConnect } from "@/service/mongo";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { hotelId, userId, checkin, checkout } = await request.json();
  await dbConnect();

  const payload = {
    hotelId: new mongoose.Types.ObjectId(hotelId),
    userId: new mongoose.Types.ObjectId(userId),
    checkin,
    checkout
  };

  try {
    await bookingModel.create(payload);
    return NextResponse.json(
      { message: "A new booking has been made" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
};
