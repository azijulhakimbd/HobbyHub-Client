import React from "react";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const Contact = () => {
  return (
    <section className="bg-base-300 text-base-content rounded-2xl my-10 transition-all duration-300">
      <div className="container mx-auto px-4 py-12">
        {/* Heading */}
        <div className="text-center">
          <p className="text-blue-500 font-medium">Contact us</p>
          <h1 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-600">
            <Typewriter
              cursor
              cursorBlinking
              delaySpeed={1000}
              deleteSpeed={25}
              loop={0}
              typeSpeed={75}
              words={["Get in touch"]}
            />
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-10 mt-10 lg:grid-cols-3">
          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <Fade cascade damping={0.3}>
              {/* Email */}
              <div className="p-4 rounded-xl bg-base-100 shadow">
                <div className="flex items-center gap-3">
                  <span className="p-3 bg-blue-600 text-white rounded-full">
                    📧
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold">Email</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      azijul.info@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Office */}
              <div className="p-4 rounded-xl bg-base-100 shadow">
                <div className="flex items-center gap-3">
                  <span className="p-3 bg-blue-600 text-white rounded-full">
                    🏢
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold">Office</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Nalitabari-2110, Sherpur, BD
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-base-100 shadow">
                <div className="flex items-center gap-3">
                  <span className="p-3 bg-blue-600 text-white rounded-full">
                    📞
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold">Phone</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      +880 1758 524125
                    </p>
                    <p className="text-xs text-gray-400">Mon–Fri, 8am–5pm</p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          {/* Google Map */}
          <div className="lg:col-span-2 h-96 rounded-xl overflow-hidden shadow">
            <iframe
              title="Office Location"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4481.383885914711!2d90.15852667608132!3d25.154595333423607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757c5bec071161f%3A0x2cf1aa613c9f4d90!2sMAH%20Technology!5e1!3m2!1sen!2sbd!4v1747809893645!5m2!1sen!2sbd"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
