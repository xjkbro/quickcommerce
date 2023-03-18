import Image from "next/image";
import Link from "next/link";

export default async function Store() {
    const products = await getProducts();

    return (
        <main className="grid grid-cols-3 mx-auto w-full justify-center gap-4">
            {products && products?.length > 0 ? (
                <>
                    {products.map((product: any, i: number) => (
                        <Link
                            href={`/store/product/${product.id}`}
                            key={i}
                            className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden mx-auto"
                        >
                            <Image
                                src={product.image}
                                className="w-1/3"
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
                                <div className="flex item-center mt-2">
                                    <svg
                                        className="w-5 h-5 fill-current text-gray-700"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                    </svg>
                                    <svg
                                        className="w-5 h-5 fill-current text-gray-700"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                    </svg>
                                    <svg
                                        className="w-5 h-5 fill-current text-gray-700"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                    </svg>
                                    <svg
                                        className="w-5 h-5 fill-current text-gray-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                    </svg>
                                    <svg
                                        className="w-5 h-5 fill-current text-gray-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                    </svg>
                                </div>
                                <div className="flex item-center justify-between mt-3">
                                    <h1 className="text-gray-700 font-bold text-xl">
                                        ${product.price}
                                    </h1>
                                    <Link
                                        href="/"
                                        className="z-10 px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                                    >
                                        Add to Card
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    ))}
                </>
            ) : (
                ""
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
