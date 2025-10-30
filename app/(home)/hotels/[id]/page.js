import Gallery from '@/components/hotel/details/Gallery'
import Overview from '@/components/hotel/details/Overview'
import Summary from '@/components/hotel/details/Summary'
import { getAllHotelsDetailById } from '@/database/queries'
import React from 'react'

export default async function HotelDetails({ params: { id } }) {
    const hotelInfo = await getAllHotelsDetailById(id);

    return (
        <>
            <Summary hotelInfo={hotelInfo} />
            <Gallery gallery={hotelInfo?.gallery} />
            <Overview overview={hotelInfo?.overview} />
        </>
    )
}
