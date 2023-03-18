import Image from "next/image";
import ProductDescription from "./ProductDescription";
import AddToCart from "./AddToCart";

export default async function ProductID({ params }) {
    const product = await getProduct(params.id);

    return (
        <div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                <div className="md:flex items-center -mx-10">
                    <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                        <div className="relative">
                            <Image
                                src={product.image}
                                width={400}
                                height={400}
                                className="w-full relative z-10"
                                alt={product.name}
                            />
                            <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-10">
                        <div className="mb-10">
                            <h1 className="font-bold uppercase text-2xl mb-5">
                                {product.title}
                            </h1>
                            <ProductDescription desc={product.description} />
                        </div>
                        <div>
                            <div className="inline-block align-bottom mr-5">
                                <span className="text-2xl leading-none align-baseline">
                                    $
                                </span>
                                <span className="font-bold text-5xl leading-none align-baseline">
                                    {product.price.toString().split(".")[0]}
                                </span>
                                <span className="text-2xl leading-none align-baseline">
                                    {`.${
                                        product.price.toString().split(".")[1]
                                    }`}
                                </span>
                            </div>
                            <AddToCart product={product} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const getProduct = async (id) => {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/product/${id}`, {
        cache: "no-store",
    });
    const data = await res.json();
    return data;
};
