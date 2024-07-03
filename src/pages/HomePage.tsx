import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Container } from "@mui/material";
import "../Layout.css";

const HomePage = () => {
  return (
    <>
      <div>
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop
          autoplay={{ delay: 1000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <img
              src="https://cdn.pixabay.com/photo/2020/06/30/22/34/dog-5357794_1280.jpg"
              className="slider-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pixabay.com/photo/2019/11/07/08/40/puppy-4608266_1280.jpg"
              className="slider-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pixabay.com/photo/2022/10/24/14/21/puppy-7543571_1280.jpg"
              className="slider-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pixabay.com/photo/2022/01/29/11/58/dog-6977210_1280.jpg"
              className="slider-image"
            />
          </SwiperSlide>
          ...
        </Swiper>
      </div>
      <div style={{ backgroundColor: "black", height: "500px" }}>
        <Container
          style={{ backgroundColor: "yellow", height: "100%" }}
        ></Container>
      </div>
      <div>
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop
          autoplay={{ delay: 1000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <img src="https://cdn.pixabay.com/photo/2020/06/30/22/34/dog-5357794_1280.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pixabay.com/photo/2019/11/07/08/40/puppy-4608266_1280.jpg"
              width={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pixabay.com/photo/2022/10/24/14/21/puppy-7543571_1280.jpg"
              width={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pixabay.com/photo/2022/01/29/11/58/dog-6977210_1280.jpg"
              width={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pixabay.com/photo/2020/06/30/22/34/dog-5357794_1280.jpg"
              width={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pixabay.com/photo/2019/11/07/08/40/puppy-4608266_1280.jpg"
              width={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pixabay.com/photo/2022/10/24/14/21/puppy-7543571_1280.jpg"
              width={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pixabay.com/photo/2022/01/29/11/58/dog-6977210_1280.jpg"
              width={500}
            />
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </>
  );
};

export default HomePage;
