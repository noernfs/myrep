import { Inter } from "next/font/google";

import Layout from "@/layout/layout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

import Layani from "@/components/Layani";

const inter = Inter({ subsets: ["latin"] });

const Page: NextPageWithLayout = () => {
    return (
        <>
            <Layani />
        </>
    );
};

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout title="Layanan | Rekomendasi Layanan Bnetfit ">{page}</Layout>
    );
};

export default Page;
