import Link from "next/link";

export default function Hero() {
    return (
        <>
            <header className="head">
                <nav className="navy">
                    <Link href="/" className="linky">
                        <img src="bnet.webp" alt="logo bnet" className="h-7" />
                    </Link>
                    <a
                        className="awa"
                        href="https://api.whatsapp.com/send?phone=6289635907270&text=Halo Bnetfit, boleh dibantu info pemasangan nya. Terimakasih."
                    >
                        Hubungi Kami
                    </a>
                </nav>
            </header>
        </>
    );
}
