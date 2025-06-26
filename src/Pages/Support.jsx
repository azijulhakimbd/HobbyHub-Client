import React, { useState } from "react";

const Support = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:azijul.info@gmail.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="min-h-screen">
        <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">
        Contact Us
      </h2>
      <p className="text-lg text-center mb-8">
        Have any questions or suggestions? Fill out the form below and we'll get
        back to you via email.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-base-200 p-6 rounded-lg shadow space-y-4"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name}
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={form.email}
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
        </div>
        <input
          type="text"
          name="subject"
          onChange={handleChange}
          value={form.subject}
          placeholder="Subject"
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="message"
          onChange={handleChange}
          value={form.message}
          className="textarea textarea-bordered w-full"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary w-full">
          Send Message
        </button>
      </form>
    </div>
    </div>
  );
};

export default Support;
