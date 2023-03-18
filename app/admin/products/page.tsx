import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default async function Products() {
    const data = await getProducts();
    const products = data?.product;
    console.log(products);
    return (
        <main>
            {products && products?.length > 0 ? (
                <>
                    {products.map((p: any, i: number) => (
                        <div key={i} className="flex gap-4">
                            <Image
                                src={p.image}
                                alt={p.title}
                                width={100}
                                height={100}
                            />
                            <div>{p.id}</div>
                            <div>{p.title}</div>
                            <div>{p.description}</div>
                            <div>${p.price}</div>
                        </div>
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
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, {
            next: { revalidate: 60 },
        });
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
};
