import React from 'react'
import SNSButtons from "../components/SNSButtons";
import Header from "../components/header";
import { materialFontTheme, buttonStyle } from "../utils/materialTheme";

import { ThemeProvider } from "@material-ui/core";

export default function Layout({ children }) {
    return (
        <div>
            <ThemeProvider theme={materialFontTheme}>
                <Header />
            </ThemeProvider>
            { children }
            <SNSButtons buttonStyle={buttonStyle}/>
        </div>
    )
}
