import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>About</title>
      </Helmet>
      <Navbar />
      <div className="mx-6 mb-10 md:mx-12 lg:mx-80">
        <h1 className="mt-14 md:mt-28 text-5xl font-bold">About</h1>
        <p className="mt-10 tracking-wider text-xl leading-9">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque
          soluta cupiditate excepturi, et dolore quod recusandae maxime sit
          repellendus. Deserunt, dolores perspiciatis incidunt distinctio ad
          quia debitis necessitatibus omnis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Pariatur quas voluptatem eum molestias
          fugit architecto repellat sint commodi totam expedita at illo eveniet
          voluptas sapiente adipisci, voluptates obcaecati perspiciatis nihil?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in
          odio rem nobis quae magnam quas eaque quia distinctio aliquam. Quidem
          porro est, dicta enim officiis obcaecati doloribus eum voluptate.
        </p>
      </div>
    </div>
  );
}

export default About;
