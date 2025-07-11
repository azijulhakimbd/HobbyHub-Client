import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-[#efefef]">
      <section className="flex items-center h-full p-16">
        <div className="container flex flex-col pt-25 items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-600">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link className="btn bg-blue-600 text-white" to={'/'}>Go Back Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
