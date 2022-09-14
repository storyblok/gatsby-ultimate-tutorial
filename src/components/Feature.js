import React from "react";
import { Link } from "gatsby";
import { storyblokEditable } from "gatsby-source-storyblok";

const Feature = ({ blok }) => {
  return (
    <div className="column feature" {...storyblokEditable(blok)}>
      <div className="p-6">
        <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={blok.image} alt="feature" />
        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">{blok.name}</h1>
        <div className="mt-4">
          <Link to="#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </Link>
        </div>
      </div>
    </div>
  );
};

export default Feature;