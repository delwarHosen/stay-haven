import { getAllHotels } from "@/database/queries";
import HotelCard from "./HotelCard";

const HotelList = async ({ destination, checkin, checkout }) => {

  console.log(checkin, "HotelListed")
  const allHotels = await getAllHotels(destination, checkin, checkout);
  // console.log(allHotels,"mongo db")

  // console.log("hello worldddd")
  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {
          allHotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotelInfo={hotel}
              checkin={checkin}
              checkout={checkout}
            />
          ))
        }

      </div>
    </div>
  );
};

export default HotelList;
