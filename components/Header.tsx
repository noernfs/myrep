import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
    return (
      <>
        <header className="sticky top-0 z-20 justify-center">
	
            <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
                <Link href="/" className="text-3xl font-bold leading-none">
                    <img src="bnet.webp" alt="logo bnet" className="h-7" />
                </Link>                
                <a className="inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="https://api.whatsapp.com/send?phone=6289635907270&text=Halo Bnetfit, boleh dibantu info pemasangan nya. Terimakasih.">Hubungi Kami</a>
            </nav>

        </header>
      </>
    )
  }