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
                    content="Masang wifi murah bnetfit dengan kecepatan hingga 100 Mbps. Gratis Instalasi dan biaya sewa perangkat. Promo Wifi Bnetfit paling lengkap cuma ada disini dengan diskon hingga 40%."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/icon-192x192.png" />
            </Head>
            <main>
                <Header />
                <HeroSmall />
                <Feature />
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
                <Banner />
                <Exp />
                <Pricing />

                <Footer />
            </main>
        </>
    );
}
