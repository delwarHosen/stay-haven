"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FilterByPriceRange() {
    const [query, setQuery] = useState([]);
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const params = new URLSearchParams(searchParams);

    const handleChange = (event) => {
        event.preventDefault();

        const name = event.target.name;
        const checked = event.target.checked;

        if (checked) {
            setQuery(prev => [...prev, name])
        }
        else {
            const filtered = query.filter((item) => item !== name);
            setQuery(filtered)
        }
        console.log(query)
    }



    useEffect(() => {
        const priceRange = params.get("priceRange");
        if (priceRange) {
            const decodedPriceRange = decodeURI(priceRange);
            const queryInPriceRange = decodedPriceRange.split("|");
            setQuery(queryInPriceRange);
        }
    }, [])


    useEffect(() => {
        if (query.length > 0) {
            params.set('priceRange', encodeURI(query.join("|")))
        } else {
            params.delete('priceRange')
        }

        replace(`${pathName}?${params.toString()}`);
    }, [query])


    return (
        <div>
            <h3 className="font-bold text-lg">Price Range</h3>
            <form action="" className="flex flex-col gap-2 mt-2">
                <label htmlFor="range1">
                    <input type="checkbox" checked={query.includes('380-1000')} name="380-1000" id="range1" onChange={handleChange} />$ 380 - $ 1000
                </label>

                <label htmlFor="range2">
                    <input type="checkbox" checked={query.includes('1000-2000')} name="1000-2000" id="range2" onChange={handleChange} />$ 1000 - $ 2000
                </label>

                <label htmlFor="range3">
                    <input type="checkbox" checked={query.includes('2000-3000')} name="2000-3000" id="range3" onChange={handleChange} />$ 2000 - $ 3000
                </label>

                <label htmlFor="range3">
                    <input type="checkbox" checked={query.includes('3000-4000')} name="3000-4000" id="range3" onChange={handleChange} />$ 3000 - $ 4000
                </label>

                <label htmlFor="range4">
                    <input type="checkbox" checked={query.includes('4000-5000')} name="4000-5000" id="range4" onChange={handleChange} />$ 4000 - $ 5000
                </label>

                <label htmlFor="range5">
                    <input type="checkbox" checked={query.includes('6000')} name="6000" id="range5" onChange={handleChange} />$ 5000+
                </label>
            </form>
        </div>
    )
}


