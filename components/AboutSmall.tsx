import Link from 'next/link'
import Image from 'next/image'

export default function AboutSmall() {
    return (
      <>
        <section className="sectionbagan">
    <div className="div1about">
     
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg">
                <h2 className="h2about">Wifi Murah Wifi Stabil</h2>
                <p className="mb-8 font-light lg:text-xl">Harga terbaik yang bisa anda dapatkan, didukung dengan intensitas peningkatan jaringan untuk internet yang lebih stabil. </p>
               
                <ul role="list" className="ulabout">
                    <li className="palaabout">
                     
                        <svg className="baganabout" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="textabout">100% Fiber Optik</span>
                    </li>
                    <li className="palaabout">
                     
                        <svg className="baganabout" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="textabout">Pilihan paket yang fleksibel</span>
                    </li>
                    <li className="palaabout">
                     
                        <svg className="baganabout" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="textabout">Costumer Service 24 Jam</span>
                    </li>
                </ul>
                <p className="font-light lg:text-xl">Masang wifi gaperlu ribet, cukup teliti. Hubungi kami untuk mendapatkan harga terbaik dan rekomendasi promo bnetfit yang sesuai dengan kebutuhan anda.</p>
            </div>
            <Image className="w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="/manfaat.webp" width={1138} height={975} alt="dashboard feature image" />
        </div>
  
        
    </div>
  </section>
      </>
    )
  }