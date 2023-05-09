import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Contact</title>
      </Helmet>
      <Navbar />
      <div className="mx-6 mb-10 md:mx-12 lg:mx-80">
        <h1 className="mt-28 text-5xl font-bold">Contact</h1>
        <h2 className="mt-10 text-xl">
          Jika anda tertarik dengan portfolio saya bisa hubungi:
        </h2>
        <ul className="mt-10 list-disc pl-4 text-lg space-y-4">
          <li>
            <a href="mailto:muharrir97@gmail.com">
              Email: muharrir97@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+6282114341838">Phone: +62 821-1434-1838</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
