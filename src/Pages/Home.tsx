import { Carousel } from "@material-tailwind/react";
import BANNER_1 from "../assets/images/banner-1.jpg";
import BANNER_2 from "../assets/images/banner-2.jpg";
import BANNER_3 from "../assets/images/banner-3.jpg";
import BANNER_4 from "../assets/images/banner-4.jpg";

const Home = () => {
  return (
    <div className="py-10 px-10">
      <Carousel
        transition={{ duration: 1 }}
        className="rounded-xl"
        autoplay={true}
      >
        <img
          src={BANNER_1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src={BANNER_2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src={BANNER_3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img
          src={BANNER_4}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default Home;
