import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Hero() {
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
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image
                        src="/serbubig.webp"
                        alt="Promo Serbu"
                        width={1920}
                        height={750}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/ytbig.webp"
                        alt="Unlimited Streaming Youtube"
                        width={1920}
                        height={750}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/instalbig.webp"
                        alt="Gratis Instalasi"
                        width={1920}
                        height={750}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
