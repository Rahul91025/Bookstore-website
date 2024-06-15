import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from "./Cards";

function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10">
      <div>
        <h1 className="font-bold text-xl pb-2">Free Online Courses</h1>
        <p>
          Discover a range of free online courses designed to boost your skills
          and advance your career. From programming and digital marketing to
          graphic design and financial literacy, our courses cover a variety of
          fields. Learn at your own pace, anytime, anywhere, and earn
          certificates upon completion. Join our community of learners and start
          your journey to success today!
        </p>
      </div>
      <div className="py-4">
        <Slider {...settings}>
          {filterData.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
