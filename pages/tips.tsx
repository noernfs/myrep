import { Inter } from "next/font/google";

import Layout from "@/layout/layout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

import Layani from "@/components/Layani";
import Tipsy from "@/components/Tipsy";

const inter = Inter({ subsets: ["latin"] });

const Page: NextPageWithLayout = () => {
    return (
        <>
            <Tipsy />
        </>
    );
};

Page.getLayout = function getLayout(page: ReactElement) {
    return <Layout title="Tips | Tips Memilih Wifi">{page}</Layout>;
};

export default Page;
