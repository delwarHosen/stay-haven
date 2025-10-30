// import { ObjectId } from "mongodb";
// import mongoose, { Schema } from "mongoose"

// const reviewSchema = new Schema({
//     hotelId: {
//         required: true,
//         type: ObjectId
//     },
//     userId: {
//         required: true,
//         type: ObjectId
//     },
//     review: {
//         required: true,
//         type: Number
//     }
// })

// export const reviewMoidel = mongoose.models.reviews ?? mongoose.model("reviews", reviewSchema);


import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
  hotelId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Hotel", // optional, if you have Hotel model
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User", // optional
  },
  review: {
    type: Number,
    required: true,
  },
});

// Correct model export ✅
export const ReviewModel =
  mongoose.models.reviews || mongoose.model("reviews", reviewSchema);
