"use client"
import Link from 'next/Link'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Header() {
    const { data: session, status } = useSession()

    if (status == "authenticated") {
        return (
            <nav className="flex items-center justify-between h-24 mx-24">
                <Link href="/">JKDELARA</Link>

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
                        <button
                            type="button"
                            onClick={() => signOut()}
                            className="text-sm font-medium text-center"
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>
        )
    }
    return (
        <nav className="flex items-center justify-between h-24 mx-24">
            <Link href="/">JKDELARA</Link>

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
                    <button onClick={() => signIn()} 
                        className="text-sm font-medium text-center"
                        >Sign in</button>
                </li>
            </ul>
        </nav>
    )
}
