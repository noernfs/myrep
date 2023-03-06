import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
    <>
        


<footer className="p-0">


<div className=" bg-gray-900">
    <div className="max-w-2xl mx-auto text-white">
        <div className="text-center pt-10">
            <h3 className="text-3xl mb-3 text-gray-400 font-bold">Revolusi internet <span className="text-blue-900">Bnetfit</span></h3>
            <p> <span className="text-gray-100">Pelopor Perubahan Progresif Jaringan Internet</span></p>
        </div>
        <div className="mt-10 pb-5 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            &copy; 2023 Bnetfit Corp. All rights reserved.
            <div className="order-1 md:order-2">
                <span className="px-2">About us</span>
                <span className="px-2 border-l">Contact us</span>
                <span className="px-2 border-l">Privacy Policy</span>
            </div>
        </div>
    </div>
</div>
	
</footer>




    </>
    )
    }

    