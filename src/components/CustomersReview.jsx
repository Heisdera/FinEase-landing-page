import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../carouselStyle/slick-theme.css";
import { data } from "../data/usersReviewsData";
import { fadeIn } from "../utils/variants";

function CustomersReview() {
  const settings = {
    focusOnSelect: true,
    infinite: false,
    speed: 500,
    arrow: true,
    dots: true,
    swipeToSlide: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    accessibility: false,
  };

  return (
    <section className="mx-auto grid max-w-[1200px] gap-6 px-4 py-10 sm:px-7 md:grid-cols-2 md:gap-10 md:pb-20">
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="md:my-auto lg:ml-10"
      >
        <h2 className="mx-auto w-[90%] text-center text-2xl font-bold md:mx-0 md:pt-8 md:text-left">
          What Our Esteemed Users say about{" "}
          <span className="text-main-color">FinEase</span>
        </h2>
        <p className="mx-auto w-[75%] py-5 text-center text-xs leading-relaxed md:mx-0 md:text-left">
          Some of our users testimonies about Finease app are all compiled here.
          These testimonies proves the quality and efficiency of our app
        </p>

        <button className="mt-10 hidden whitespace-nowrap rounded-md bg-main-color px-4 py-2.5 text-xs font-medium text-white transition-all duration-100 hover:bg-[#3f1294] md:mt-0 md:!block">
          See more
          <span className="pl-3 font-semibold">&rarr;</span>
        </button>
      </motion.div>

      <div className="md:row-start-1">
        <motion.div
          variants={fadeIn("appear", 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mb-[20px] h-[170px] w-[92%] rounded-lg bg-[#f9f9f9] sm:h-[140px] md:row-start-1 md:ml-1 md:h-[190px] lg:ml-6 lg:h-[160px]"
        >
          <div className="absolute -right-8 left-2 top-6">
            <div>
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Slider {...settings}>
                  {data.map((review) => (
                    <div key={review.id}>
                      <div className="mx-2 flex flex-col gap-2 rounded-md bg-white p-4">
                        <div className="flex flex-col gap-1">
                          <img
                            className="w-9"
                            src={review.image}
                            alt={review.name}
                          />

                          <div>
                            <span className="whitespace-nowrap text-xs font-bold">
                              {review.name}
                            </span>
                          </div>
                        </div>

                        <p className="text-[11px]">{review.review}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <button className="max-xs:mt-20 mt-6 justify-self-center whitespace-nowrap rounded-md bg-main-color px-4 py-2.5 text-xs font-medium text-white transition-all duration-100 hover:bg-[#3f1294] md:hidden">
        See more
        <span className="pl-2 font-semibold">&rarr;</span>
      </button>
    </section>
  );
}

export default CustomersReview;
