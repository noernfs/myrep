import Link from "next/link";
import Image from "next/image";

export default function Pricing() {
    return (
        <>
            <div className="div1pricing">
                <div className="div2pricing">
                    <h2 className="md:text-3xl h2pricing lg:text-5xl">
                        <span className="text-indigo-600">Paket</span> Internet
                    </h2>
                </div>

                <div className="div3pricing lg:flex-row lg:items-start">
                    <div className="div4pricing sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
                        <div className="div5pricing">
                            <img
                                src="new3.webp"
                                alt="Serbu 20"
                                className="imgpricing"
                            />
                            <div className="ml-5">
                                <span className="spanpricing">Homelink 30</span>
                                <span>
                                    <span className="spanrp">Rp&thinsp;</span>
                                    <span className="spanhg">249rb </span>
                                </span>
                                <span className="spanbulan">/ bulan</span>
                            </div>
                        </div>
                        <ul className="ulpricing">
                            <li className="lipricing">
                                <img
                                    src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                                    alt="Serbu 20"
                                />
                                <span className="ml-3">
                                    Unlimited tanpa{" "}
                                    <span className="text-black">
                                        Kuota dan FUP
                                    </span>
                                </span>
                            </li>
                            <li className="lipricing">
                                <img
                                    src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                                    alt="Serbu 20"
                                />
                                <span className="ml-3">
                                    Kecepatan optimal{" "}
                                    <span className="text-black">30 Mpbs</span>
                                </span>
                            </li>
                            <li className="lipricing">
                                <img
                                    src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                                    alt="Serbu 20"
                                />
                                <span className="ml-3">
                                    <span className="text-black">
                                        Bebas biaya
                                    </span>{" "}
                                    Instalasi{" "}
                                </span>
                            </li>
                            <li className="flex text-lg">
                                <img
                                    src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                                    alt="Serbu 20"
                                />
                                <span className="ml-3">
                                    Biaya bulanan{" "}
                                    <span className="text-black">
                                        Selalu Flat
                                    </span>{" "}
                                </span>
                            </li>
                        </ul>
                        <a
                            href="https://api.whatsapp.com/send?phone=6281314160043&text=Halo Bnetfit, boleh dibantu info pemasangan paket Serbu 20 nya. Terimakasih."
                            className="wapricing"
                        >
                            Pilih Paket
                            <img
                                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                                alt="Hubungi Kami"
                                className="ml-2"
                            />
                        </a>
                    </div>

                    <div className="divpartpricing sm:w-96 lg:w-full lg:order-2 lg:mt-0">
                        <div className="part">
                            <img
                                src="new1.webp"
                                alt="Serbu 10"
                                className="imgpricing"
                            />
                            <div className="ml-5">
                                <span className="serbu10">Homelink 20</span>
                                <span>
                                    <span className="rp10">Rp&thinsp;</span>
                                    <span className="spanhg text-white">
                                        199rb{" "}
                                    </span>
                                </span>
                                <span className="font-medium">/ bulan</span>
                            </div>
                        </div>
                        <ul className="ul20">
                            <li className="flex mb-6">
                                <img
                                    src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                                    alt="Serbu 10"
                                />
                                <span className="ml-3">
                                    Unlimited tanpa{" "}
                                    <span className="text-white">
                                        Kuota dan FUP
                                    </span>
                                </span>
                            </li>
                            <li className="lipricing">
                                <img
                                    src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                                    alt="Serbu 20"
                                />
                                <span className="ml-3">
                                    Kecepatan optimal{" "}
                                    <span className="text-white">20 Mbps</span>
                                </span>
                            </li>
                            <li className="flex mb-6">
                                <img
                                    src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                                    alt="Serbu 10"
                                />
                                <span className="ml-3">
                                    <span className="text-white">
                                        Bebas Biaya
                                    </span>{" "}
                                    Instalasi
                                </span>
                            </li>
                            <li className="flex">
                                <img
                                    src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                                    alt="Serbu 10"
                                />
                                <span className="ml-3">
                                    Biaya bulanan{" "}
                                    <span className="text-white">
                                        {" "}
                                        Selalu Flat
                                    </span>{" "}
                                </span>
                            </li>
                        </ul>
                        <a
                            href="https://api.whatsapp.com/send?phone=6281314160043&text=Halo Bnetfit, boleh dibantu info pemasangan paket Serbu 10 nya. Terimakasih."
                            className="wapricing text-2xl"
                        >
                            Pilih Paket
                            <img
                                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                                alt="Hubungi Kami"
                                className="ml-2"
                            />
                        </a>
                    </div>

                    <div className="div30 lg:w-full lg:order-3 lg:rounded-l-none">
                        <div className="div5pricing">
                            <img
                                src="new2.webp"
                                alt="Serbu 30"
                                className="imgpricing"
                            />
                            <div className="ml-5">
                                <span className="spanpricing">Homelink 50</span>
                                <span>
                                    <span className="spanrp">Rp&thinsp;</span>
                                    <span className="spanhg">290rb </span>
                                </span>
                                <span className="spanbulan">/ bulan</span>
                            </div>
                        </div>
                        <ul className="ulpricing">
                            <li className="lipricing">
                                <img
                                    src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                                    alt="Serbu 30"
                                />
                                <span className="ml-3">
                                    Unimited tanpa{" "}
                                    <span className="text-black">
                                        Kuota dan FUP
                                    </span>
                                </span>
                            </li>
                            <li className="lipricing">
                                <img
                                    src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                                    alt="Serbu 30"
                                />
                                <span className="ml-3">
                                    Kecepatan optimal{" "}
                                    <span className="text-black">50 Mbps</span>
                                </span>
                            </li>
                            <li className="lipricing">
                                <img
                                    src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                                    alt="Serbu 30"
                                />
                                <span className="ml-3">
                                    <span className="text-black">
                                        Bebas biaya{" "}
                                    </span>
                                    Instalasi
                                </span>
                            </li>
                            <li className="flex text-lg">
                                <img
                                    src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                                    alt="Serbu 30"
                                />
                                <span className="ml-3">
                                    Biaya bulanan{" "}
                                    <span className="text-white">
                                        {" "}
                                        Selalu Flat
                                    </span>{" "}
                                </span>
                            </li>
                        </ul>
                        <a
                            href="https://api.whatsapp.com/send?phone=6281314160043&text=Halo Bnetfit, boleh dibantu info pemasangan paket Serbu 30 nya. Terimakasih."
                            className="wapricing"
                        >
                            Pilih Paket
                            <img
                                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                                alt="Hubungi Kami"
                                className="ml-2"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
