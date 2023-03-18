"use client";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/lib/query";
export interface AuthContextProps {
    children: React.ReactNode;
    session: Session;
}

export default function AuthContext({ children }: AuthContextProps) {
    return (
        <SessionProvider>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </SessionProvider>
    );
}
