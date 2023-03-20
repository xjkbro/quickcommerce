"use client";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
    const { data: session, status } = useSession();

    if (status == "authenticated") {
        return (
            <nav className="sticky top-0 z-10 mx-0 px-24 w-full bg-white shadow-md pt-4 flex flex-col md:flex-row items-center md:justify-between md:mt-0 mt-4 h-24">
                <Link
                    className="text-2xl font-bold text-gray-800 md:text-3xl"
                    href="/"
                >
                    QuickCommerce
                </Link>

                <ul className="flex justify-around gap-8">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/store">Shop</Link>
                    </li>
                    <li>
                        <Link href="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link href="/admin/products">Products</Link>
                    </li>
                    <li>
                        <button type="button" onClick={() => signOut()}>
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
    return (
        <nav className="sticky top-0 z-10 mx-0 px-24 w-full bg-white shadow-md pt-4 flex flex-col md:flex-row items-center md:justify-between md:mt-0 mt-4 h-24">
            <Link
                className="text-2xl font-bold text-gray-800 md:text-3xl"
                href="/"
            >
                QuickCommerce
            </Link>

            <ul className="flex justify-around gap-8">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/store">Shop</Link>
                </li>
                <li>
                    <Link href="/admin">Admin</Link>
                </li>
                <li>
                    <Link href="/admin/products">Products</Link>
                </li>
                <li>
                    <button type="button" onClick={() => signIn()}>
                        Login
                    </button>
                </li>
            </ul>
        </nav>
    );
}
