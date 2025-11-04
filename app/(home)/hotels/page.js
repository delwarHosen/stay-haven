import HotelList from "@/components/hotel/HotelList";
import Filter from "@/components/search/filter/Filter";
import Search from "@/components/search/Search";


const refineCategory = (category) => {
    const decodedCategory = decodeURI(category);

    if (decodedCategory === "undefined") {
        return ""
    }
    return decodedCategory;

}

const refinepriceRange = (priceRange) => {
    const decodedpriceRange = decodeURI(priceRange);

    if (decodedpriceRange === "undefined") {
        return ""
    }
    return decodedpriceRange;

}

export default function HotelListPage({ searchParams: { destination, checkin, checkout, category, priceRange } }) {
    return (
        <>
            <section className="bg-[url('/hero-bg1.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
                <div className="container items-center py-12 ">
                    <Search fromList={true}
                        destination={destination}
                        checkin={checkin}
                        checkout={checkout}
                    />
                </div>
            </section>
            <section className="py-12">
                <div className="container grid grid-cols-12">
                    <Filter />
                    <HotelList
                        destination={destination}
                        checkin={checkin}
                        checkout={checkout}
                        category={refineCategory(category)}
                        priceRange={refinepriceRange(priceRange)}
                    />
                </div>
            </section>
        </>
    )
}
