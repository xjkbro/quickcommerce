"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function SearchProduct({ search }) {
    // console.log(search.s);
    // const ps = useRef(products);
    const pathname = usePathname();
    const [searchString, setSearchString] = useState(search?.s);
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [isFetching, setIsFetching] = useState(false);

    async function handleChnage(e) {
        e.preventDefault();
        setSearchString(e.target.value);
        setIsFetching(true);
        // const res = await fetch(
        //     `${process.env.NEXTAUTH_URL}/api/products/${search}`
        // );
        setIsFetching(false);
        startTransition(() => {
            // Refresh the current route and fetch new data from the server without
            // losing client-side browser or React state.
            // router.refresh();
            // console.log(pathname + "?s=" + searchString);
            router.push(pathname + "?s=" + e.target.value);
        });
    }
    return (
        <input
            className="bg-gray-50 outline-none ml-1 block "
            type="text"
            name="search"
            id=""
            value={searchString}
            onChange={handleChnage}
            placeholder="Search..."
        />
    );
}
