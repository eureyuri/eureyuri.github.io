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
        <meta property="og:url" content="https://eureyuri.codes/" />
        <meta property="og:title" content="Eurey Noguchi" />
        <meta property="og:description" content="Personal website, portfolio, and blog for Eurey (Yuri) Noguchi." />
        <meta property="og:image" content="../images/favicon.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://eureyuri.codes/" />
        <meta property="twitter:title" content="Eurey Noguchi" />
        <meta property="twitter:description" content="Personal website, portfolio, and blog for Eurey (Yuri) Noguchi." />
        <meta property="twitter:image" content="../images/favicon.png" />
    </Helmet>
)