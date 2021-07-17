import Link from "next/link";
import { getSession, useSession } from "next-auth/client";

import Page from "@/ui/page";
import H1 from "@/ui/heading/h1";
import H2 from "@/ui/heading/h2";

import OutlineButton from "ui/buttons/buttonOutline";

{/* 
import H3 from "@/ui/heading/h3";
import P from "ui/heading/p";
import Tooltip from "ui/tooltip";
*/}

export default function ContributePage() {
  const [session, loading] = useSession();
  if (typeof window !== "undefined" && loading) return null;
  return (
    <Page
      title="Dashboard - Atlas Contribute"
      description="Contribute to Atlas! Let's make our streets accessible for all."
      contribute
    >
      <section className="container flex flex-col pb-24 mx-auto px-5">
        <div className="lg:max-w-7xl lg:w-4/5 lg:mx-auto">
          <H1>Contribute to Atlas</H1>
          <div className="flex flex-col pt-8 md:flex-row justify-between">
            <H2>{session ? session.user.username : ""}</H2>
            <div className="mt-2">
              <OutlineButton className="mr-5 border hover:border-black">
                <Link href="/contribute/help">Annotation Guide</Link>
              </OutlineButton>
              <button className="bg-red-600 transition-all font-semibold text-white hover:bg-red-700 py-2 px-4 border border-red-600 rounded duration-500 ease-in-out">
                <Link href="/contribute/annotate">Start Annotating</Link>
              </button>
            </div>
          </div>
        </div>
      </section>


      <section className="mt-4 pb-12 bg-gray-100">
        <hr />

        <div className="flex flex-col mx-auto md:flex-row container lg:max-w-7xl lg:w-4/5 ">
          <div className="mx-auto sm:mx-0 md:w-2/5">{/*
            <div className="bg-white w-80 p-5 shadow-2xl border rounded-md -mt-16">
              <H3 className="mb-4">Your profile</H3>
              <P>
                <Tooltip>Total number of annotations you made</Tooltip>
                <span className="font-bold">Total annotations: </span> 0
              </P>
              <P>
                <Tooltip>Last time you annotated</Tooltip>
                <span className="font-bold">Last Annotation Session: </span> 0
              </P>
              <P>
                <Tooltip>Current active annotation from this session</Tooltip>
                <span className="font-bold">Active annotion sessions: </span> 0
              </P>
            </div>
          </div>
          <div className="mt-10 md:-mt-12 px-5 h-96">
            <H3>Recent Activity</H3>
          <ul />*/}
          </div>
        </div>
      </section>
    </Page>
  );
}

ContributePage.getInitialProps = async (context) => {
  const session = await getSession(context);
  return {
    props: { session },
  };
};
