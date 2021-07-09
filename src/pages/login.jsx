import { useState } from "react";
import { providers, getSession, csrfToken, signIn } from "next-auth/client";
import Link from "next/link";

import Page from "@/ui/page";
import H1 from "@/ui/heading/h1";

export default function login({ providers, csrfToken }) {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const email = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;
    signIn("credentials", {
      email,
      password,
      // The page where you want to redirect to after a
      // successful login
      callbackUrl: `${window.location.origin}/contribute`,
    });
    setLoading(false);
  }
  return (
    <Page
      title="Login - Atlas"
      description="Login to Atlas! Login to Atlas in order to contribute to our platform."
      contribute={false}
    >
      <section className="container mx-auto p-4 my-12 mb-32 bg-white flex flex-col items-center justify-center">
        <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
          <H1>Login to Atlas!</H1>
          <p className="mt-5">
            Don&apos;t have an account?
            <Link href="/register">
              <span className="text-sm ml-2 font-bold text-teal-500 hover:underline cursor-pointer">
                Register Here
              </span>
            </Link>
          </p>
        </div>
        <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
          <form onSubmit={onSubmit}>
            <input
              className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
              type="text"
              placeholder="Username"
              name="username"
            />
            <input
              className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
              type="password"
              placeholder="Password"
              name="password"
            />

            <div className="flex items-center">
              <div className="w-2/3 flex items-center">
                <a className="text-sm font-bold text-teal-500 hover:underline cursor-pointer">
                  Forgot your password?
                </a>
              </div>
              <button
                className="ml-auto w-1/3 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
                type="submit"
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
          <p className="font-semibold text-gray-600 text-sm">
            If you&apos;re experiencing problems logging in to your account
            please contact us at:
          </p>
        </div>
      </section>
    </Page>
  );
}

login.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/contribute",
    });
    res.end();
    return;
  }
  return {
    session: undefined,
    providers: await providers(context),
    csrfToken: await csrfToken(context),
  };
};
