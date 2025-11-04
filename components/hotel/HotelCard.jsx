import Image from "next/image";
import HotelSummaryInfo from "./HotelSummaryInfo";

const HotelCard = ({ hotelInfo, checkin, checkout }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        className="w-full sm:max-w-[240px] sm:max-h-[162px] h-auto object-cover rounded-md"
        // src={hotelInfo?.thumbNailUrl}
        src={hotelInfo?.thumbNailUrl || "/no-image found"}
        alt={hotelInfo?.name}
        width={240}
        height={165}
      />
      <HotelSummaryInfo info={hotelInfo} fromListPage={true}
        checkin={checkin}
        checkout={checkout}
      />
    </div>
  );
};

export default HotelCard;
