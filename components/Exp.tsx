import Image from "next/image";

export default function Exp() {
    return (
        <>
            <section className="sectionexp">
                <div className="div1exp lg:space-y-20 lg:pt-24 lg:px-6">
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <Image
                            className=" w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                            width={1138}
                            height={975}
                            src="/manfaatgame.webp"
                            alt="feature image 2"
                        />
                        <div className="text-gray-500 sm:text-lg">
                            <h2 className="h2exp">
                                Dibuat oleh{" "}
                                <span className="text-blue-900">Gamers</span>{" "}
                                untuk{" "}
                                <span className="text-blue-900">Gamers</span>
                            </h2>
                            <p className="mb-8 font-light lg:text-xl">
                                Implementasi rekayasa struktur jaringan yang
                                ditujukan demi terciptanya kondisi jaringan
                                super stabil sebagai salah satu sarana pendukung
                                para gamers saat saling bertarung dengan
                                maksimal di dunia maya.
                            </p>

                            <ul role="list" className="ulexp">
                                <li className="liexp">
                                    <svg
                                        className="svgexp"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="spanexp">
                                        Tingkat latency yang rendah
                                    </span>
                                </li>
                                <li className="liexp">
                                    <svg
                                        className="svgexp"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="spanexp">
                                        Stabilisasi jaringan{" "}
                                    </span>
                                </li>
                                <li className="liexp">
                                    <svg
                                        className="svgexp"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="spanexp">
                                        Peningkatan teknik struktur jaringan
                                    </span>
                                </li>
                                <li className="liexp">
                                    <svg
                                        className="svgexp"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="spanexp">
                                        Komunitas Mabar Bnetfit
                                    </span>
                                </li>
                            </ul>
                            <p className="font-light lg:text-xl">
                                Menyediakan pelayanan maksimal tanpa
                                kompleksitas solusi tradisional. Pasang Bnetfit
                                Sekarang.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
