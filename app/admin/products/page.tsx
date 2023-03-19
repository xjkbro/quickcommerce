import { useQuery } from "@tanstack/react-query";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import SearchProduct from "./SearchProduct";

export default async function Products({ searchParams }: any) {
    const products = await getProducts(searchParams.s ? searchParams.s : "");

    // const products = data?.product;
    console.log(products[0]);
    return (
        <div className="bg-white p-8 rounded-md w-full">
            <div className=" flex items-center justify-between pb-6 gap-12">
                <div>
                    <h2 className="text-gray-600 font-semibold">Products</h2>
                    {/* <span className="text-xs">All products item</span> */}
                </div>
                <div className="flex items-center w-full justify-between">
                    <div className="flex w-full bg-gray-50 items-center p-2 rounded-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <SearchProduct search={searchParams} />
                    </div>
                </div>
                <div className="">
                    {/* <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                            New Report
                        </button> */}
                    <Link href={"/admin/products/add"}>
                        <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                            Create
                        </button>
                    </Link>
                </div>
            </div>
            <div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        ID
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Title
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Slug
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Description
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Category
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Available
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {products && products.length > 0 ? (
                                    <>
                                        {products.map(
                                            (product: any, i: number) => (
                                                <tr key={i}>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {/* ID */}
                                                            {product.id}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 w-10 h-10">
                                                                <Image
                                                                    className="w-full h-full rounded-full"
                                                                    width={50}
                                                                    height={50}
                                                                    src={
                                                                        product.image
                                                                    }
                                                                    alt={
                                                                        product.title
                                                                    }
                                                                />
                                                            </div>
                                                            <div className="ml-3">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                    <Link
                                                                        href={`/admin/products/${product.id}`}
                                                                        className="font-bold hover:underline"
                                                                    >
                                                                        {
                                                                            product.title
                                                                        }
                                                                    </Link>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {/* Slug */}
                                                            {product.slug}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {
                                                                product.short_description
                                                            }
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {
                                                                product
                                                                    ?.category
                                                                    ?.name
                                                            }
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {product.available
                                                                ? "true"
                                                                : "false"}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {/* Pricce */}$
                                                            {product.price}
                                                        </p>
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </>
                                ) : (
                                    <></>
                                )}
                            </tbody>
                        </table>
                        <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                            {/* <span className="text-xs xs:text-sm text-gray-900">
                                Showing 1 to 4 of 50 Entries
                            </span>
                            <div className="inline-flex mt-2 xs:mt-0">
                                <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                    Prev
                                </button>
                                &nbsp; &nbsp;
                                <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                                    Next
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const getProducts = async (q: any) => {
    try {
        let url = "";
        if (q.length == "") url = `${process.env.NEXTAUTH_URL}/api/products`;
        else url = `${process.env.NEXTAUTH_URL}/api/products/${q}`;

        console.log(url);
        const res = await fetch(url, { cache: "no-store" });
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
};
