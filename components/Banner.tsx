import Link from 'next/link'
import Image from 'next/image'

export default function Banner() {
    return (
      <>
       <div className="hidden relative md:flex">
    <Image
    src="/infobig.webp"
    alt="aji"
    width={1920}
    height={400}
    className="object-cover w-full mx-auto h-auto"
    />
    <div className="rounded-t-2xl absolute bg-gradient-to-t from-gray-800 opacity-75 inset-0 z-0"></div>
    
</div>

<div className="flex relative md:hidden">
    <Image
    src="/infosmall.webp"
    alt="aji"
    width={1920}
    height={800}
    className="object-cover w-full mx-auto h-auto"
    />
    <div className="rounded-t-2xl absolute bg-gradient-to-t from-gray-800 opacity-75 inset-0 z-0"></div>
    
</div>
      </>
    )
  }