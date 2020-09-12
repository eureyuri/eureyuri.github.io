import React from "react";
import Helmet from "react-helmet";

export default () => (
    <Helmet>
        <title>Eurey Noguchi</title>
        <meta name="title" content="Eurey Noguchi" />
        <meta name="description" content="Personal website, portfolio, and blog for Eurey (Yuri) Noguchi." />
        <link rel="canonical" href="https://www.eureyuri.codes/" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://eureyuri.codes/" />
        <meta property="og:title" content="Eurey Noguchi" />
        <meta property="og:description" content="Personal website, portfolio, and blog for Eurey (Yuri) Noguchi." />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://eureyuri.codes/" />
        <meta property="twitter:title" content="Eurey Noguchi" />
        <meta property="twitter:description" content="Personal website, portfolio, and blog for Eurey (Yuri) Noguchi." />
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
    </Helmet>
)