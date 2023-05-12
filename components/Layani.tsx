import Link from "next/link";
import Image from "next/image";
import Exp from "./Exp";
import Pricing from "./Pricing";

export default function Layani() {
    return (
        <>
            <section>
                <div className="bg-gradient-to-br from-gray-900 to-blue-900 py-32 px-3">
                    <div className="text-center">
                        <Link
                            className=" text-white font-bold text-sm"
                            href="/"
                        >
                            Home /{" "}
                        </Link>
                    </div>
                    <h2 className="text-white text-center font-bold text-2xl md:text-4xl">
                        Rekomendasi Layanan
                    </h2>
                </div>
            </section>
            <Exp />
            <Pricing />
        </>
    );
}
