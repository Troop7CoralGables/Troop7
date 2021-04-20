import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>Troop 7's Rich History in Coral Gables</h1>
    <p>
        Boy Scout Troop 7 was founded in 1922 in the City Beautiful -- Coral Gables, Florida. It is the oldest Troop in South Florida, 
        chartered before the South Florida Council existed. It is the third oldest boy scout troop in the United States. The Troop 7 
        Log Cabin is designated by a Florida Historic Marker, installed in 2008.
    </p>
    <p className="row">
        <div className="col" style={{margin:0}}>George Merrick, the founder of Coral Gables, donated land on the Granada Golf Course for a Scout Cabin. Mr. Merrick was a big 
        supporter of the scouting program and wanted to see a strong troop in the town he founded. The original cabin was built in 1926, 
        from telephone poles toppled as a result of a hurricane that year by Merrick's own construction company.</div>
        <StaticImage
          src="../images/Troop7Cabin600.png"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Troop7Cabin"
          style={{ marginBottom: `1.45rem` }}
          className="col"
        />
    </p>
    <p>
        On the evening of March 30, 1971, the old scout cabin burned to the ground. Now we have a new building which became a reality 
        after a lot of hard work by many Scouts and friends of the troop. The new building was dedicated in memory of Mr. Rex Hawkins, 
        a Troop Committee member for many years (a plaque inside the front door will tell you the same).
    </p>
    <p>
        The land for our building is leased from the City of Coral Gables for $1.00 per year (prepaid). The lease was signed in 1976 so we 
        intend to be around for a while.
    </p>
    <p>
        The scout building is used by Boy Scout Troop 7, Girl Troop 719, Venture Crew 7, and Cub Scout Pack 7 as well as by the South Florida Council 
        and Everglades District for various activities. The troop is sponsored by the Coral Gables Kiwanis Club.
    </p>
    <p>
        Many successful men and women now living in Coral Gables have earned the rank of Eagle Scout in Troop 7. We feel you will also enjoy our advancement 
        program and Scouting activities.
    </p>
    <StaticImage
      src="../images/KiwanisHeader.png"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Kiwanis"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default AboutPage
