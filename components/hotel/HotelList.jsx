import { getAllHotels } from "@/database/queries";
import HotelCard from "./HotelCard";
import NoHotel from "./NoHotel";

const HotelList = async ({ destination, checkin, checkout, category, priceRange }) => {

  console.log(checkin, "HotelListed")
  const allHotels = await getAllHotels(destination, checkin, checkout, category, priceRange);

  return (
    <div className="col-span-9 md:w-full">
      <div className="space-y-4 ">
        {allHotels.length > 0 ? (
          allHotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotelInfo={hotel}
              checkin={checkin}
              checkout={checkout}
            />
          ))) : (<NoHotel />)
        }

      </div>
    </div>
  );
};

export default HotelList;
