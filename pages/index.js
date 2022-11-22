import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Welcome</p>
        <Link href={"/contacts"}>Access App</Link>
        <br></br>
        <button onClick={() => signOut()}> Sign Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed in. This is definitely updated</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }
};
export default login;
