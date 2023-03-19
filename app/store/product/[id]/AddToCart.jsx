"use client";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { useMutation, useQuery } from "@tanstack/react-query";
import Head from "next/head";
// import NextImage from "next/image";
import { useRouter } from "next/router";

const stripePromiseclientSide = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function AddToCart({ product }) {
    const { mutate, isLoading: mutationIsLoading } = useMutation(
        async (body) => {
            try {
                const respJSON = await fetch("/api/stripe", {
                    method: "POST",
                    body: JSON.stringify(body),
                });
                const resp = await respJSON.json();
                const stripe = await stripePromiseclientSide;
                const result = await stripe.redirectToCheckout({
                    sessionId: resp.id,
                });
                return result;
            } catch (error) {
                throw error;
            }
        }
    );
    console.log(product.available);
    return (
        <div className="inline-block align-bottom">
            <button
                onClick={() =>
                    mutate({
                        title: product.title,
                        image: product.image,
                        description: product.description,
                        price: product.price,
                    })
                }
                disabled={mutationIsLoading || !product.available}
                className={`bg-yellow-300 ${
                    product.available ? "opacity-100" : "opacity-75"
                } hover:opacity-75  rounded-full px-10 py-2 font-semibold`}
            >
                <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
            </button>
        </div>
    );
}
