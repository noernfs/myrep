import { Inter } from "next/font/google";

import Layout from "@/layout/layout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

import Layani from "@/components/Layani";
import Profilin from "@/components/Profilin";

const inter = Inter({ subsets: ["latin"] });

const Page: NextPageWithLayout = () => {
    return (
        <>
            <Profilin />
        </>
    );
};

Page.getLayout = function getLayout(page: ReactElement) {
    return <Layout title="Tentang Kami">{page}</Layout>;
};

export default Page;
