import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Herosmall() {
    return (
        <>
            <div className="flex md:hidden">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Image
                            src="/serbusmall.webp"
                            alt="Promo Paket Serbu"
                            width={1920}
                            height={1500}
                            loading="eager"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/ytsmall.webp"
                            alt="Unlimited Streaming Youtube"
                            width={1920}
                            height={1500}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/instalsmall.webp"
                            alt="Gratis Instalasi"
                            width={1920}
                            height={1500}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="hidden md:flex">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Image
                            src="/serbubig.webp"
                            alt="Promo Paket Serbu"
                            width={1920}
                            height={750}
                            loading="eager"
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
            </div>
        </>
    );
}
