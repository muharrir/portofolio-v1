import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Helmet } from "react-helmet";

function Portfolio() {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Portfolio</title>
      </Helmet>
      <Navbar />
      <div className="mx-6 mb-10 md:mx-12 lg:mx-80">
        <h1 className="mt-14 md:mt-28 text-5xl font-bold">Portfolio</h1>
        <h2 className="mt-10 text-xl">Hasil project yang telah dibangun:</h2>
        <div className="mt-10 grid grid-rows-1 md:grid-cols-2 gap-10">
          <Card
            gambar="/cover1.jpg"
            judul="Lingua"
            subjudul="Language School"
            goto="https://github.com/muharrir/payna-landing-page"
          />
          <Card
            gambar="/cover2.jpg"
            judul="LaslesVPN"
            subjudul="Free VPN"
            goto="https://github.com/muharrir/uniqlo-website-clone"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
