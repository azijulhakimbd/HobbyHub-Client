import React from "react";

const Contact = () => {
  return (
    <div>
      <section class="bg-[#efefef]">
        <div class="container px-6 py-12 mx-auto">
          <div>
            <p class="font-medium text-blue-500">
              Contact us
            </p>

            <h1 class="mt-2 text-3xl font-semibold text-blue-600 md:text-3xl">
              Get in touch
            </h1>
          </div>

          <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
            <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <span class="inline-block p-3 bg-blue-600 rounded-full text-white ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 class="mt-4  font-medium text-black">
                  Email
                </h2>
                <p class="mt-2 text-sm text-gray-500 text-gray-400">
                  Our friendly team is here to help.
                </p>
                <p class="mt-2 text-sm text-blue-500 ">
                  azijul.info@gmail.com
                </p>
              </div>

              <div>
                <span class="inline-block p-3 bg-blue-500 rounded-full text-white ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 class="mt-4 text-black font-medium ">
                  Office
                </h2>
                <p class="mt-2 text-sm text-gray-500 text-gray-400">
                  Come say hello at our office HQ.
                </p>
                <p class="mt-2 text-sm text-blue-500 text-blue-400">
                  nalitabari-2110, Sherpur,BD.
                </p>
              </div>

              <div>
                <span class="inline-block p-3 bg-blue-500 rounded-full text-white ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2 class="mt-4 font-medium text-black">
                  Phone
                </h2>
                <p class="mt-2 text-sm text-gray-500 text-gray-400">
                  Mon-Fri from 8am to 5pm.
                </p>
                <p class="mt-2 text-sm text-blue-500 text-blue-400">
                  +880 1758524125
                </p>
              </div>
            </div>

            <div class="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
              <iframe
                className="w-[600px] md:w-[800px] lg:w-[1000px] h-[300px] md:h-400 lg:h-[500px] lg:shadow-xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4481.383885914711!2d90.15852667608132!3d25.154595333423607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757c5bec071161f%3A0x2cf1aa613c9f4d90!2sMAH%20Technology!5e1!3m2!1sen!2sbd!4v1747809893645!5m2!1sen!2sbd"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
