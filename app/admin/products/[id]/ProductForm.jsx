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
        // <form className="flex flex-col gap-4">
        //     <label>
        //         Title:
        //         <input
        //             type="text"
        //             name="title"
        //             onChange={(e) => setTitle(e.target.value)}
        //             value={title}
        //             disabled={isPending}
        //         />
        //     </label>
        //     <label>
        //         Image URL:
        //         <input
        //             type="text"
        //             name="image"
        //             onChange={(e) => setImage(e.target.value)}
        //             value={image}
        //             disabled={isPending}
        //         />
        //     </label>
        //     <label>
        //         Description:
        //         <input
        //             type="text"
        //             name="description"
        //             onChange={(e) => setDescription(e.target.value)}
        //             value={description}
        //             disabled={isPending}
        //         />
        //     </label>
        //     <input type="submit" value="Submit" onClick={handleSubmit} />
        // </form>
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
                <form>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3">
                            <div className="mb-5">
                                <label
                                    for="title"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                    disabled={isPending}
                                />
                            </div>
                        </div>
                        <div className="w-full px-3">
                            <div className="mb-5">
                                <label
                                    for="image"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Image Url
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    id="image"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    onChange={(e) => setImage(e.target.value)}
                                    value={image}
                                    disabled={isPending}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label
                            for="description"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            disabled={isPending}
                            className="w-full h-48 appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>

                    <div>
                        <input
                            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            type="submit"
                            value="Submit"
                            onClick={handleSubmit}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
