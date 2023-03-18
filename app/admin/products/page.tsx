import { useQuery } from "@tanstack/react-query";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";

export default async function Products() {
    const products = await getProducts();
    // const products = data?.product;
    // console.log(products);
    return (
        <main className="grid md:grid-cols-3 mx-auto w-full justify-center gap-4 px-2">
            {products && products?.length > 0 ? (
                <>
                    {products.map((product: any, i: number) => (
                        <Link
                            href={`/admin/products/${product.id}`}
                            key={i}
                            className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden mx-auto"
                        >
                            <Image
                                src={product.image}
                                className="w-1/3 object-cover"
                                width={200}
                                height={200}
                                alt={product.title}
                            />
                            <div className="w-2/3 p-4">
                                <h1 className="text-gray-900 font-bold text-2xl">
                                    {product.title}
                                </h1>
                                <p className="mt-2 text-gray-600 text-sm">
                                    {product.description.substr(0, 120)}
                                </p>

                                <div className="flex item-center justify-between mt-3">
                                    <h1 className="text-gray-700 font-bold text-xl">
                                        ${product.price}
                                    </h1>
                                </div>
                            </div>
                        </Link>
                    ))}
                </>
            ) : (
                <></>
            )}
        </main>
    );
}

const getProducts = async () => {
    try {
        const url = `${process.env.NEXTAUTH_URL}/api/products`;
        const res = await fetch(url, { cache: "no-store" });
        console.log(url, res);
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
};
