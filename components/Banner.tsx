import Link from "next/link";
import Image from "next/image";

export default function Banner() {
    return (
        <>
            <div className="hidden relative md:flex">
                <Image
                    src="/infobig.webp"
                    alt="aji"
                    width={1920}
                    height={400}
                    className="imgbanner"
                />
                <div className="divbanner"></div>
            </div>

            <div className="flex relative md:hidden">
                <Image
                    src="/infosmall.webp"
                    alt="aji"
                    width={1920}
                    height={800}
                    className="imgbanner"
                />
                <div className="divbanner"></div>
            </div>
        </>
    );
}
