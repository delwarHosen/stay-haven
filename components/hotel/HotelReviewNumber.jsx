
import { ReviewModel } from '@/models/review-model'
import Link from 'next/link'
import React from 'react'

export default async function HotelReviewNumber({ id }) {
    // const reviews = await ReviewModel(id)
     const reviews = await ReviewModel.find({ hotelId: id });
    return (
        <>
            {
                reviews.length === 0 ?
                    (<Link href="#" className='underline'>Be the first one to review</Link>)
                    :
                    (<Link href={`/hotel/${id}/reviews`} className='underline'>{reviews.length} Reviews</Link>)
            }
        </>
    )
}
