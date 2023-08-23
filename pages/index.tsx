import { Inter } from "next/font/google";

import Layout from "@/layout/layout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import HeroSmall from "@/components/HeroSmall";
import AboutSmall from "@/components/AboutSmall";
import Feature from "@/components/Feature";
import Banner from "@/components/Banner";
import Exp from "@/components/Exp";
import Pricing from "@/components/Pricing";

const inter = Inter({ subsets: ["latin"] });

const Page: NextPageWithLayout = () => {
    return (
        <>
            <HeroSmall />
            <AboutSmall />
            <Feature />
            <Banner />
            <Exp />
            <Pricing />
        </>
    );
};

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout title="Promo Merdeka MyRepublic - Mulai dari 249rb/bulan">
            {page}
        </Layout>
    );
};

export default Page;
