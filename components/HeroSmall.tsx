import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function HeroSmall() {
    return (
      <>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper flex md:hidden"
    >
      <SwiperSlide>
      <img
        src="/serbusmall.webp"
        
        alt="Promo Paket Serbu"
        width={1920}
        height={750}
        />
     
      </SwiperSlide>
      <SwiperSlide>
      <Image
        src="/ytsmall.webp"
        alt="Unlimited Streaming Youtube"
        width={1920}
        height={750}
        />

      </SwiperSlide>
      <SwiperSlide>
      <Image
        src="/instalsmall.webp"
        alt="Gratis Instalasi"
        width={1920}
        height={750}
        />
      </SwiperSlide>
    </Swiper>
      </>
    )
  }