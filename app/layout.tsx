import "@/styles/globals.css";
import { Session } from "next-auth";
import { headers } from "next/headers";
import AuthContext from "./AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Quick Commerce",
    description: "Easy Quick Ecommerce Site with a cms by Jason-Kyle De Lara",
    keywords: ["nextjs", "prisma", "mysql", "stripe", "tailwind", "cms"],
    author: "Jason-Kyle De Lara",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getSession(headers().get("cookie") ?? "");
    return (
        <html lang="en">
            <body>
                <AuthContext session={session}>
                    <Header />
                    {children}
                    <Footer />
                </AuthContext>
            </body>
        </html>
    );
}
async function getSession(cookie: string): Promise<Session> {
    const response = await fetch(
        `${process.env.NEXTAUTH_URL}/api/auth/session`,
        {
            headers: {
                cookie,
            },
        }
    );

    const session = await response.json();

    return Object.keys(session).length > 0 ? session : null;
}
