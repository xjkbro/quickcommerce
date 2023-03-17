"use client"
import { useSession, signIn, signOut } from "next-auth/react"
export default function Admin() {
    const { data: session, status } = useSession()

    if (status == "authenticated") {
        return (
          <main>
            Signed in as {session?.user?.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </main>
        )
      }
      return (
        <main>
          Protected Route
        </main>
      )
}
