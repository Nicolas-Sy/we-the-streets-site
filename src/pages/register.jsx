import { useState } from "react";
import { providers, getSession, csrfToken, signIn } from "next-auth/client";
import Link from "next/link";

import Page from "@/ui/page";
import H1 from "@/ui/heading/h1";
import H2 from "@/ui/heading/h2";

export default function register({ providers, csrfToken }) {
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [serverError, setServerError] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setEmailError(false);
    setServerError(false);
    setUsernameError(false);
    setLoading(true);

    const username = e.currentTarget.username.value;
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const confirmPassword = e.currentTarget.confirmPassword.value;

    const city = e.currentTarget.city.value;
    const age = e.currentTarget.age.value;
    const commuteFrequency = e.currentTarget.commuteFrequency.value;
    const mobilityAids = [];

    for (let i = 0; i < e.currentTarget.mobilityAid.length; i++) {
      if (e.currentTarget.mobilityAid[i].checked) {
        mobilityAids.push(e.currentTarget.mobilityAid[i].value);
      }
    }

    const body = {
      username,
      email,
      password,
      confirmPassword,
      city,
      age,
      commuteFrequency,
      mobilityAids,
    };

    if (password !== confirmPassword) {
      setPasswordError(true);
    } else {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.status === 201) {
        signIn("credentials", {
          email,
          password,
          // The page where you want to redirect to after a
          // successful login
          callbackUrl: `${window.location.origin}/contribute`,
        });
        console.log("success");
      } else if (res.status === 400) {
        setEmailError(true);
      } else if (res.status === 403) {
        setUsernameError(true);
      } else if (res.status === 500) {
        setServerError(true);
      } else {
        console.log("Error");
      }
    }

    setLoading(false);
  }

  return (
    <Page
      title="Register - Atlas"
      description="Register to Atlas! Register to Atlas in order to contribute to our platform."
      contribute={false}
    >
      <section className="container mx-auto p-4 my-12 mb-32 bg-white flex flex-col items-center justify-center">
        <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-5/12 mb-4">
          <H1>Register to Atlas!</H1>
          <p className="mt-5">
            Already have an account?
            <Link href="/login">
              <span className="text-sm ml-2 font-bold text-teal-500 hover:underline cursor-pointer">
                Login Here
              </span>
            </Link>
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-5/12 mb-6"
        >
          <H2 className="mb-4">User Credentials</H2>
          <label className="font-bold" htmlFor="username">
            Username
          </label>
          <input
            className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-400 rounded border focus:border-teal-500"
            type="text"
            placeholder="Username"
            name="username"
            required
          />
          {usernameError ? (
            <div className="text-xs -mb-2 pb-4 text-red-600">
              Username is already used
            </div>
          ) : (
            <div />
          )}
          <label className="font-bold" htmlFor="email">
            Email
          </label>
          <input
            className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-400 rounded border focus:border-teal-500"
            type="email"
            placeholder="hello@website.com"
            name="email"
            required
          />
          {emailError ? (
            <div className="text-xs -mb-2 pb-4 text-red-600">
              Email is already used
            </div>
          ) : (
            <div />
          )}
          <label className="font-bold" htmlFor="password">
            Password
          </label>
          <input
            className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-400 rounded border focus:border-teal-500"
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <label className="font-bold" htmlFor="confirm-password">
            Confirm Password
          </label>

          <input
            className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-400 rounded border focus:border-teal-500"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
          />
          {passwordError ? (
            <div className="text-xs -mb-2 pb-4 text-red-600">
              Passwords do not match
            </div>
          ) : (
            <div></div>
          )}
          <hr className="my-1 mb-5" />
          <H2 className="mb-4">User Demographic</H2>
          <label className="font-bold" htmlFor="city">
            City of Residence
          </label>
          <input
            className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-400 rounded border focus:border-teal-500"
            type="text"
            placeholder="City of Residence"
            name="city"
            required
          />
          <label className="font-bold" htmlFor="age">
            Age
          </label>
          <input
            className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-400 rounded border focus:border-teal-500"
            type="number"
            placeholder="Age"
            name="age"
            required
          />
          <fieldset className="border-0 mb-4">
            <legend className="block mb-2 font-bold">
              Do you use the following mobility aids?
            </legend>
            <label className="block text-gray-700 font-bold mb-2">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                value="canes"
                name="mobilityAid"
              />
              <span className="text-sm">Canes</span>
            </label>
            <label className="block text-gray-700 font-bold mb-2">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                value="crutches"
                name="mobilityAid"
              />
              <span className="text-sm">Crutches</span>
            </label>
            <label className="block text-gray-700 font-bold mb-2">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                value="walkers"
                name="mobilityAid"
              />
              <span className="text-sm">Walkers</span>
            </label>
            <label className="block text-gray-700 font-bold mb-2">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                value="mobility-scooters"
                name="mobilityAid"
              />
              <span className="text-sm">Mobility Scooters</span>
            </label>
            <label className="block text-gray-700 font-bold mb-2">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                value="guide-dogs"
                name="mobilityAid"
              />
              <span className="text-sm">Guide dogs</span>
            </label>
            <div className="text-xs text-gray-600">
              Please check the boxes of the mobility aids that you use.
            </div>
          </fieldset>
          <fieldset className="border-0 mb-4">
            <legend className="block text-gray-700 mb-2 font-bold">
              How often do you commute in a public utility vehicle?
            </legend>
            <label className="block text-gray-700 font-bold mb-2">
              <input
                className="mr-2 leading-tight"
                type="radio"
                name="commuteFrequency"
                value="never"
                required
              />
              <span className="text-sm">Never</span>
            </label>
            <label className="block text-gray-700 font-bold mb-2">
              <input
                className="mr-2 leading-tight"
                type="radio"
                name="commuteFrequency"
                value="rarely"
                required
              />
              <span className="text-sm">Rarely</span>
            </label>
            <label className="block text-gray-700 font-bold mb-2">
              <input
                className="mr-2 leading-tight"
                type="radio"
                name="commuteFrequency"
                value="occasionally"
              />
              <span className="text-sm">Occasionally</span>
            </label>
            <label className="block text-gray-700 font-bold mb-2">
              <input
                className="mr-2 leading-tight"
                type="radio"
                name="commuteFrequency"
                value="frequently"
                required
              />
              <span className="text-sm">Frequently</span>
            </label>
            <label className="block text-gray-700 font-bold mb-2">
              <input
                className="mr-2 leading-tight"
                type="radio"
                name="commuteFrequency"
                value="always"
                required
              />
              <span className="text-sm">Always</span>
            </label>
          </fieldset>

          <div className="flex items-center">
            <div className="w-2/3 flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="mt-1 mr-2"
                required
              />
              <label htmlFor="remember-me">
                I have read the terms of service and privacy policy
              </label>
            </div>
            <button
              className="ml-auto w-1/3 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
          {passwordError ? (
            <div className="text-xs -mb-2 pb-4 text-red-600">
              Passwords do not match
            </div>
          ) : (
            <div />
          )}
          {usernameError ? (
            <div className="text-xs -mb-2 pb-4 text-red-600">
              Username is already used
            </div>
          ) : (
            <div />
          )}
          {emailError ? (
            <div className="text-xs -mb-2 pb-4 text-red-600">
              Email is already used
            </div>
          ) : (
            <div />
          )}
          {serverError ? (
            <div className="text-xs -mb-2 pb-4 text-red-600">
              There seems to be something wrong with our servers
            </div>
          ) : (
            <div />
          )}
        </form>
      </section>
    </Page>
  );
}

register.getInitialProps = async (context) => {
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