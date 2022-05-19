import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Banner() {

  return (
    <Carousel className=" mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      <div>
        <img src="/img/vida-no-tom.png" />
      </div>
      <div>
        <img src="/img/banner-1.png" />
      </div>
    </Carousel>
  )
}