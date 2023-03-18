import { useQuery } from "@tanstack/react-query";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";

export default async function Products() {
    const products = await getProducts();
    // const products = data?.product;
    // console.log(products);
    return (
        <main className="w-3/4 mx-auto flex flex-col gap-4">
            {products && products?.length > 0 ? (
                <>
                    {products.map((p: any, i: number) => (
                        <Link
                            href={`/admin/products/${p.id}`}
                            key={i}
                            className="flex items-center gap-4 p-4  shadow-lg rounded-xl"
                        >
                            <Image
                                src={p.image}
                                alt={p.title}
                                width={100}
                                height={100}
                            />
                            <div className="">{p.id}</div>
                            <div className="">{p.title}</div>
                            <div className="">{p.description}</div>
                            <div className="">${p.price}</div>
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
