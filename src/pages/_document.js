import { Html, Head, Main, NextScript } from "next/document";

import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
            <Script
                src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
                crossorigin
            ></Script>

            <Script
                src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                crossorigin
            ></Script>

            <Script
                src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossorigin
            ></Script>
        </Html>
    );
}
