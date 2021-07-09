import { useEffect } from "react";
import { useSession, getSession } from "next-auth/client";
import { useRouter } from "next/router";

import Navbar from "@/features/navbarContribute";
import Footer from "@/features/footerMain";

export default function Layout({ children }) {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!(session || loading)) {
      router.push("/login");
    }
  }, [session, loading, router]);

  if (typeof window !== "undefined" && loading) return null;

  if (session) {
    return (
      <div className="">
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="">
        <Navbar />
        Protected Page, Redirecting to Login
        <Footer />
      </div>
    );
  }

  // if (loading) {
  //   return (
  //     <div className="">
  //       <Navbar />

  //       <Footer />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="">
  //       <Navbar />
  //       {children}
  //       <Footer />
  //     </div>
  //   );
  // }
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
