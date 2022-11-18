import { useSession } from "next-auth/react";
import React from "react";

const account = () => {
  const { data: session, status } = useSession({ required: true });

  if (status === "authenticated") {
    return (
      <div>
        <p>Logged in</p>
      </div>
    );
  }
};

export default account;
