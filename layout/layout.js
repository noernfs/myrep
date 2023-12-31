import Head from "next/head";
import { Nav } from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Layout({
    path = "Home",
    title = "Promo Merdeka MyRepublic - Mulai dari 249rb/bulan",
    metacontent ="Pasang wifi MyRepublic harga mulai 249rb kecepatan hingga 250 Mbps. Gratis Instalasi dan biaya sewa perangkat untuk pemasangan baru.",
    children,
}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon-192x192.png" />
                <meta name="theme-color" content="#fff" />
                <meta
                    name="description"
                    content={metacontent}
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/icon-192x192.png" />
                <meta name="google-site-verification" content="VCfQ8AwXUvzazyn36xTsAfUJ6qGL_nfu2vkUMI27Nec" />
                
            </Head>
            <div>
                <Nav />
                <Link
                    href="https://api.whatsapp.com/send?phone=6281314160043&text=Halo MyRepublic, saya mau bertanya tentang layanan yang tersedia. Terimakasih."
                    className="float"
                    target="_blank"
                    rel="noopener"
                >
                    <Image src="/wa.svg" alt="whatsapp icon" height={70} width={70}></Image>
                </Link>
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
}
