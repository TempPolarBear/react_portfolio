import Calculator from "@/components/Utills/Calculator/Calculator"
import Randomizer from "@/components/Utills/Randomizer/Randomizer"
import Date_Time from "@/components/Utills/DateTime/DateTime"
import Weather from "@/components/Utills/Weather/Weather"
import CurrencyConverter from "@/components/Utills/CurrencyConverter/CurrencyConverter"
import Prediction from "@/components/Utills/Prediction/Prediction"

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Utils() {
  const [utilsPaginationElement, setUtilsPaginationElement] = useState<HTMLDivElement | null>(null);
  const [utilsSwiper, setUtilsSwiper] = useState<SwiperInstance | null>(null);
  const [activeSlideElement, setActiveSlideElement] = useState<HTMLElement | null>(null);

  const syncActiveSlide = (swiper: SwiperInstance) => {
    setActiveSlideElement(swiper.slides[swiper.activeIndex] ?? null);
  };

  useEffect(() => {
    if (!utilsSwiper || !activeSlideElement) return;

    let animationFrame = 0;
    const updateHeight = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        if (!utilsSwiper.destroyed) {
          utilsSwiper.updateAutoHeight(utilsSwiper.params.speed);
        }
      });
    };
    const resizeObserver = new ResizeObserver(updateHeight);

    resizeObserver.observe(activeSlideElement);
    updateHeight();

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, [activeSlideElement, utilsSwiper]);

  return (
    <section id="utils">
        <div data-aos="fade-up" data-aos-duration="2000" className="card mt-3 zoomInOut">
            <div className="card-header">
                <h5 className="m-0 p-0"><i className="fa-solid fa-sliders me-1"></i>JavaScript Mini Apps</h5>
            </div>
            <div className="card-body">
                {utilsPaginationElement && (
                <Swiper modules={[Navigation, Pagination]} spaceBetween={30} slidesPerView={1} navigation pagination={{ el: utilsPaginationElement, clickable: true }} loop autoHeight className="utils-swiper p-2" onSwiper={(swiper) => {
                  setUtilsSwiper(swiper);
                  syncActiveSlide(swiper);
                }} onSlideChangeTransitionEnd={syncActiveSlide}>
                        <SwiperSlide>
                            <div className="d-flex justify-content-center px-2">
                                <Calculator />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex justify-content-center px-2">
                                <Randomizer />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex justify-content-center px-2">
                                <Date_Time />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex justify-content-center px-2">
                                <Weather />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex justify-content-center px-2">
                                <CurrencyConverter />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex justify-content-center px-2">
                                <Prediction />
                            </div>
                        </SwiperSlide>
                </Swiper>
                )}
                <div ref={setUtilsPaginationElement} className="swiper-pagination utils-pagination mt-2"></div>
           </div>
        </div>
    </section>
  )
}

export default Utils
