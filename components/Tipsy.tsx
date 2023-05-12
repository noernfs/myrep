import Link from "next/link";
import Image from "next/image";
import Exp from "./Exp";
import Pricing from "./Pricing";

export default function Tipsy() {
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
                        Tips Seputar Wifi
                    </h2>
                </div>
            </section>

            <section>
                <div className="bg-white py-32 px-3">
                    <h2 className="text-black text-center font-bold text-2xl md:text-4xl">
                        Coming Soon
                    </h2>
                </div>
            </section>
        </>
    );
}
