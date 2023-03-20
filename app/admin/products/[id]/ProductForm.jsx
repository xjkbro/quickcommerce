"use client";
import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ProductForm({ product }) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [isFetching, setIsFetching] = useState(false);

    const [savedData, setSavedData] = useState(false);

    console.log(product);
    const [title, setTitle] = useState(product.title);
    const [slug, setSlug] = useState(product.slug);
    const [shortDescription, setShortDescription] = useState(
        product.short_description
    );
    const [description, setDescription] = useState(product.description);
    const [image, setImage] = useState(product.image);
    const [price, setPrice] = useState(product.price);
    const [available, setAvailable] = useState(product.available);
    const createSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
    };
    console.log(title, description, image);
    async function handleSubmit(e) {
        e.preventDefault();
        setSavedData(false);

        console.log(e);
        setIsFetching(true);

        // const url = `${process.env.NEXTAUTH_URL}/api/product/${product.id}`;
        // console.log(url);
        const res = await fetch(
            `${process.env.NEXTAUTH_URL}/api/product/${product.id}`,
            {
                method: "PUT",
                body: JSON.stringify({
                    title,
                    slug,
                    shortDescription,
                    description,
                    price: parseFloat(price),
                    image,
                    available,
                }),
            }
        );
        const data = await res.json();
        console.log("POSTED: " + data);
        // setTitle(res.title);
        setIsFetching(false);
        startTransition(() => {
            // Refresh the current route and fetch new data from the server without
            // losing client-side browser or React state.
            router.refresh();
            setSavedData(true);
        });
    }
    return (
        <div className="flex items-center justify-center gap-0 md:gap-4 md:p-12 p-2 w-full ">
            <div className="mx-auto max-w-[550px]">
                <Link
                    href={`/store/product/${product.id}`}
                    className="flex justify-end font-bold hover:underline"
                >
                    Go To Product
                </Link>
                {savedData ? (
                    <div
                        className="w-full h-24 flex justify-center items-center border-4 border-green-300 bg-green-100 text-green-600 rounded-lg my-4"
                        onClick={() => setSavedData(false)}
                    >
                        Data Saved
                    </div>
                ) : (
                    ""
                )}
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
                                    for="slug"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Slug
                                </label>
                                <div className="w-full">
                                    <input
                                        type="text"
                                        name="slug"
                                        id="slug"
                                        className="w-11/12 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        onChange={(e) =>
                                            setSlug(e.target.value)
                                        }
                                        value={slug}
                                        disabled={isPending}
                                    />
                                    <button
                                        className="w-1/12"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setSlug(createSlug(title));
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faArrowsRotate}
                                        />
                                    </button>
                                </div>
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
                        <div className="w-full px-3">
                            <div className="mb-5">
                                <label
                                    for="price"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Price
                                </label>
                                <input
                                    type="number"
                                    step={0.01}
                                    min={0}
                                    name="price"
                                    id="price"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    onChange={(e) => setPrice(e.target.value)}
                                    value={price}
                                    disabled={isPending}
                                />
                            </div>
                        </div>
                        <div className="w-full px-3">
                            <div className="mb-5 w-full flex gap-4 items-center">
                                <input
                                    type="checkbox"
                                    name="available"
                                    className="rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1]"
                                    onChange={(e) =>
                                        setAvailable(e.target.checked)
                                    }
                                    checked={available}
                                    disabled={isPending}
                                />
                                <label
                                    for="available"
                                    className="block font-medium text-[#07074D]"
                                >
                                    Available
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label
                            for="short_description"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Short Description
                        </label>
                        <textarea
                            id="short_description"
                            name="short_description"
                            onChange={(e) =>
                                setShortDescription(e.target.value)
                            }
                            value={shortDescription}
                            disabled={isPending}
                            className="w-full h-24 appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
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
                            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none hover:cursor-pointer"
                            type="submit"
                            value="Submit"
                            onClick={handleSubmit}
                        />
                    </div>
                </form>
            </div>
            <div className="hidden md:block mx-auto max-w-[550px]  h-screen overflow-y-scroll border p-2 rounded-md border-rose-200">
                <ReactMarkdown className="prose " remarkPlugins={[remarkGfm]}>
                    {description}
                </ReactMarkdown>
            </div>
        </div>
    );
}
