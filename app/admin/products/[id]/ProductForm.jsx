"use client";
import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export default function ProductForm({ product }) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [isFetching, setIsFetching] = useState(false);

    console.log(product);
    const [title, setTitle] = useState(product.title);
    const [description, setDescription] = useState(product.description);
    const [image, setImage] = useState(product.image);

    console.log(title, description, image);

    async function handleChange() {
        setIsFetching(true);
        // Mutate external data source

        setIsFetching(false);

        startTransition(() => {
            // Refresh the current route and fetch new data from the server without
            // losing client-side browser or React state.
            router.refresh();
        });
    }
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(e);
        setIsFetching(true);

        const url = `${process.env.NEXTAUTH_URL}/api/product/${product.id}`;
        // console.log(url);
        const res = await fetch(
            `${process.env.NEXTAUTH_URL}/api/product/${product.id}`,
            {
                method: "PUT",
                body: JSON.stringify({ title, description, image }),
            }
        );
        // setTitle(res.title);
        setIsFetching(false);
        startTransition(() => {
            // Refresh the current route and fetch new data from the server without
            // losing client-side browser or React state.
            router.refresh();
        });
    }
    return (
        <form className="flex flex-col gap-4">
            <label>
                Title:
                <input
                    type="text"
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    disabled={isPending}
                />
            </label>
            <label>
                Image URL:
                <input
                    type="text"
                    name="image"
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                    disabled={isPending}
                />
            </label>
            <label>
                Description:
                <input
                    type="text"
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    disabled={isPending}
                />
            </label>
            <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
    );
}
