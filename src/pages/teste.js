import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import 'swiper/css';



export default function tested() {
  return(
    <div>
    <Swiper
      className="rounded-2xl overflow-hidden"
      
      navigation
      loop
      slidesPerView={1}
    >
    <SwiperSlide>
    <div className="w-full h-0 pb-[42%] relative">
              <img className="absolute top-0 left-0 w-full h-full object-cover opacity-75" src="/img/vida-no-tom.png" />
              <h1 className="scale-100 absolute left-[7%] bottom-[10%] text-xl md:text-3xl max-w-[86%] whitespace-nowrap overflow-hidden text-ellipsis">
                teste
              </h1>
            </div>
    </SwiperSlide>
    </Swiper>

  </div>
  )
}