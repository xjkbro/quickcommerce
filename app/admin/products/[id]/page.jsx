import ProductForm from "./ProductForm";
import { cache } from "react";
import Link from "next/link";
export default async function ProductID({ params }) {
    const product = await getProduct(params.id);

    return (
        <div>
            <ProductForm product={product} />
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

// const updateProduct = async (data) => {
//     const res = await fetch(
//         `${process.env.NEXTAUTH_URL}/api/product/${data.id}`,
//         { method: "PUT", body: data }
//     );
//     const results = await res.json();
//     return results;
// };
