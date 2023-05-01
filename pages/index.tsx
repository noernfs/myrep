import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import HeroSmall from "@/components/HeroSmall";
import Feature from "@/components/Feature";
import AboutSmall from "@/components/AboutSmall";
import Banner from "@/components/Banner";
import Pricing from "@/components/Pricing";
import Exp from "@/components/Exp";
import Call from "@/components/Call";
import Footer from "@/components/Footer";
import Script from "next/script";
import Howdy from "@/components/Howdy";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Bnetfit | Pasang Wifi Bnetfit Dengan Harga Promo</title>

                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon-192x192.png" />
                <meta name="theme-color" content="#fff" />
                <meta
                    name="description"
                    content="Pasang wifi murah bnetfit dengan kecepatan hingga 100 Mbps. Gratis Instalasi dan biaya sewa perangkat dengan diskon hingga 40%."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/icon-192x192.png" />
            </Head>
            <Script id="google-tag-manager" strategy="afterInteractive">
                {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-WRG7QVQ');
                `}
            </Script>
            <main>
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-WRG7QVQ"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
                <Header />

                <HeroSmall />

                <a
                    href="https://api.whatsapp.com/send?phone=6281314160043&text=Halo Bnetfit, boleh dibantu info paket promo nya. Terimakasih."
                    className="float"
                    target="_blank"
                    rel="noopener"
                >
                    <i>
                        <img src="/wa.svg" alt="whatsapp icon"></img>
                    </i>
                </a>
                <AboutSmall />
                <Feature />
                <Banner />
                <Exp />
                <Pricing />

                <Footer />
            </main>
        </>
    );
}
