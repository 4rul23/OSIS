"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

function SampleNextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="absolute -right-8 top-1/2 z-10 -translate-y-4 cursor-pointer rounded-full text-black"
    >
      <ArrowForward />
    </div>
  );
}

function SamplePrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="absolute -left-8 top-1/2 z-10 -translate-y-4 cursor-pointer rounded-full text-black"
    >
      <ArrowBack />
    </div>
  );
}

export default function Carousel({ images }: { images: Array<string> }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings} className="my-5 w-full max-w-[600px]">
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-md">
          <Image src={image} alt="bukber" width={600} height={400} />
        </div>
      ))}
    </Slider>
  );
}
