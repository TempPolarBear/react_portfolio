
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Certification() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const certificateImages = [
    { src: "/assets/img/certificate/Czech_certificate.webp" },
    { src: "/assets/img/certificate/English_certificate.webp" },
    { src: "/assets/img/certificate/Diploma_bachelor's.webp" },
    { src: "/assets/img/certificate/IT_skills_test.webp" },
    { src: "/assets/img/certificate/IT_English.webp" },
  ];

  return (
    <section id="certification">
      <div data-aos="fade-up" data-aos-duration="2000" className="card mt-3 zoomInOut">
        <div className="card-header">
          <h5 className="m-0 p-0"><i className="fa-solid fa-medal me-1"></i>Certification</h5>
        </div>

        <div className="card-body">
          <Swiper modules={[Navigation, Pagination]} spaceBetween={30} slidesPerView={1} navigation pagination={{ clickable: true }} scrollbar={{ draggable: true }} loop={true} className="swiper-container"
          >
            {/* Czech Certificate */}
            <SwiperSlide>
              <div className="text-center">
                <h4 className="p-0 m-2">Czech Certificate</h4>
                <p className="small mb-2">Certificate in Czech language.</p>
                <a className="m-2" href="/assets/img/certificate/Czech_certificate.webp" onClick={(e) => { e.preventDefault(); setLightboxIndex(0); }}>
                  <img width="200" height="200" className="img-fluid thumb rounded" src="/assets/img/certificate/Czech_certificate.webp" alt="Czech certificate" loading="lazy" />
                </a>
              </div>
            </SwiperSlide>

            {/* English Certificate */}
            <SwiperSlide>
              <div className="text-center">
                <h4 className="p-0 m-2">English Certificate</h4>
                <p className="small mb-2">Certificate in English language.</p>
                <a className="m-2" href="/assets/img/certificate/English_certificate.webp" onClick={(e) => { e.preventDefault(); setLightboxIndex(1); }}>
                  <img width="200" height="200" className="img-fluid thumb rounded" src="/assets/img/certificate/English_certificate.webp" alt="English certificate" loading="lazy" />
                </a>
              </div>
            </SwiperSlide>

            {/* Diploma Bachelor's */}
            <SwiperSlide>
              <div className="text-center">
                <h4 className="p-0 m-2">Diploma Bachelor's</h4>
                <p className="small mb-2">Bachelor's degree diploma.</p>
                <a className="m-2" href="/assets/img/certificate/Diploma_bachelor's.webp" onClick={(e) => { e.preventDefault(); setLightboxIndex(2); }}>
                  <img width="200" height="200" className="img-fluid thumb rounded" src="/assets/img/certificate/Diploma_bachelor's.webp" alt="Diploma Bachelor's" loading="lazy" />
                </a>
              </div>
            </SwiperSlide>

            {/* IT Skills Certificate */}
            <SwiperSlide>
              <div className="text-center">
                <h4 className="p-0 m-2">IT Skills Certificate</h4>
                <p className="small mb-2">Certificate of an IT skills test.</p>
                <a className="m-2" href="/assets/img/certificate/IT_skills_test.webp" onClick={(e) => { e.preventDefault(); setLightboxIndex(3); }}>
                  <img width="200" height="200" className="img-fluid thumb rounded" src="/assets/img/certificate/IT_skills_test.webp" alt="IT skills test" loading="lazy" />
                </a>
              </div>
            </SwiperSlide>

            {/* IT English Certificate */}
            <SwiperSlide>
              <div className="text-center">
                <h4 className="p-0 m-2">IT English Certificate</h4>
                <p className="small mb-2">Certificate in IT English.</p>
                <a className="m-2" href="/assets/img/certificate/IT_English.webp" onClick={(e) => { e.preventDefault(); setLightboxIndex(4); }}>
                  <img width="200" height="200" className="img-fluid thumb rounded" src="/assets/img/certificate/IT_English.webp" alt="IT English" loading="lazy" />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>

          <Lightbox open={lightboxIndex >= 0} close={() => setLightboxIndex(-1)} index={lightboxIndex} slides={certificateImages}/>
        </div>
      </div>
    </section>
  );
}

export default Certification;
