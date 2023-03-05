import Link from 'next/link'
import Image from 'next/image'

export default function Call() {
    return (
    <>
       <div className="py-5 bg-blue-600 md:py-7 lg:py-14">
  <div className="container mx-auto px-5 xl:max-w-screen-xl">
    <div className="max-w-lg p-5 mx-auto text-center rounded-lg bg-white">
      <div className="flex items-center justify-center mx-auto w-12 h-12 rounded bg-blue-600">
        <svg className="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
        </svg>
      </div>
      <h1 className="mt-2.5 text-3xl font-bold text-gray-900 md:text-4xl">Start your free trial today!</h1>
      <p className="max-w-lg mt-2.5 mx-auto text-gray-500 md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales interdum sapien non pretium.</p>
      <a href="#" className="block mt-5 px-5 py-3 rounded font-medium text-white bg-blue-600">Try for free</a>
    </div>
  </div>
</div>

    </>
    )
    }

    