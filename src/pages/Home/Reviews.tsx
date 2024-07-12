import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { reviewsData } from "@/utils/reviewsData";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <div className="my-10 md:my-20">
      <h1 className="mb-6 text-xl md:text-2xl text-center font-bold">
        Our Customer Reviews
      </h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ bounce: 0.5, duration: 1 }}
        viewport={{ once: true }}
        className="md:container px-16 md:px-10"
      >
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {reviewsData.map((data, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center p-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                        <img
                          src={data.userImg}
                          alt={data.userName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-lg font-semibold mb-2">
                        {data.userName}
                      </span>
                      <div className="flex items-center mb-2">
                        <BsStarFill size={18} color="gold" />
                        <BsStarFill size={18} color="gold" />
                        <BsStarFill size={18} color="gold" />
                        <BsStarFill size={18} color="gold" />
                        <BsStarHalf size={18} color="gold" />
                      </div>
                      <p className="text-center">{data.texts}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </div>
  );
};

export default Reviews;
