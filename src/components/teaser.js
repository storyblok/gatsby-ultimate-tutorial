import * as React from "react"
import { storyblokEditable } from "gatsby-source-storyblok";

const Teaser = ({ blok }) => {
  return (
    <div className="text-2xl mb-10" {...storyblokEditable(blok)} data-test="teaser">
      <h1 className="text-center">{blok.headline}</h1>
    </div>
  )
}

export default Teaser