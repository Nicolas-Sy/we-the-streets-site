import { useEffect } from "react";
import { useSession } from "next-auth/client";
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

  if (loading) {
    return (
      <div className="">
        <Navbar />

        <Footer />
      </div>
    );
  } else {
    return (
      <div className="">
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  }
}
