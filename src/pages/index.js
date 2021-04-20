import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <br />
    <p className="row">
      <StaticImage
        src="../images/1624Troop7Marker540.jpg"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Marker1"
        style={{ marginBottom: `1.45rem` }}
        className="col"
      />
      <StaticImage
        src="../images/1625Troop7MarkerClose540.jpg"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Marker2"
        style={{ marginBottom: `1.45rem` }}
        className="col"
      />
    </p>
    <p>
      When George Edgar Merrick (1886-1942) designed his idealistic city of Coral Gables in the early 1920s, he created a special area 
      for scouts and built a rustic log cabin for his Troop 7 boy scouts on this site. Today, only the chimney remains. After the hurricane 
      of 1926, Merrick's Coral Gables Construction Company built the Troop 7 scout cabin largely from pine trees and telephone poles.
      Merrick deeded these two acres of land, now in the middle of the Granada Golf Course, to the scouts in perpetuity. Their first 
      scoutmaster was Albert H. Bartle. As scoutmaster for the first three years, then a committee member, Mr. Bartle served Troop 7 for 
      16 years until 1938, setting the standard for excellence and longevity for others to follow. The old Troop 7 log cabin burned down 
      on March 30, 1971, leaving only the chimney. The new building, finished in 1976, was dedicated to Scoutmaster Rex Hawkins, who 
      kept the troop alive during the difficult WWII years when many adult leaders were away. The George Merrick Foundation continues 
      to maintain the property, with help from the City of Coral Gables, the Kiwanis Club of Coral Gables and concerned citizens who appreciate 
      the legacy of George Merrick scouting program.
    </p>
    <p>
      Since 1922, more than three thousand boys have benefited from the timeless lessons that only scouting can offer, 
      and a number of our adult volunteers have accomplished more than 30 years of service with the troop. The troop is 
      sponsored by the Kiwanis Club of Coral Gables. Our scout cabin, originally constructed in 1926, is located at 
      1107 South Greenway on the Granada Golf Course in Coral Gables, Florida.
    </p>

  </Layout>
)

export default IndexPage
