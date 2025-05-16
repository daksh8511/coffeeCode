import { motion } from "motion/react";

import coffee1 from "/assets/coffee/coffee1.png";
import coffee3 from "/assets/coffee/coffee3.png";
import { easeIn, easeInOut } from "motion";

const Service = () => {
  const serviceData = [
    {
      image: coffee1,
      title: "Cold Coffee",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat est quidem.",
    },
    {
      image: coffee3,
      title: "Ice Cream Coffee",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat est quidem.",
    },
    {
      image: coffee1,
      title: "Cold Coffee",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat est quidem.",
    },
  ];

  const cardVarients = {
    hidden : {opacity : 0, y : 20},
    visible : {
        opacity : 1,
        y : 0,
        transition : {
            duration : 0.4,
            type: "spring",
            stiffness : 150,
            damping : 10,
            ease : easeInOut
        },
    },
  }

  const containerVarients = {
    hidden: {opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <div className="container">
      <div className="text-center pt-10">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-bold text-3xl"
        >
          Fresh and{" "}
          <span className="text-[var(--myPrimaryColor)]">Tasty Coffee</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="my-3"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          placeat est quidem, aut, obcaecati repellendus porro molestias cumque
          quae facere sit molestiae optio! Dolorem laudantium praesentium, amet
          enim voluptate facere.
        </motion.p>
      </div>
      <motion.div
        variants={containerVarients}
        initial="hidden"
        whileInView={"visible"}
        className="grid grid-cols-1 gap-20 min-sm:grid-cols-1 min-md:grid-cols-3 overflow-hidden"
      >
        {serviceData.map((item, i) => {
          return (
            <motion.div variants={cardVarients} key={i} className="text-center">
              <img
                src={item.image}
                className="blackcoffee2 hover:scale-126 duration-200 w-60 m-auto"
                alt=""
              />
              <div className="mt-7">
                <h2 className="text-[var(--myPrimaryColor)] font-bold mb-2 text-2xl">
                  {item.title}
                </h2>
                <h2 className="text-[var(--mySecondaryColor)]">
                  {item.subtitle}
                </h2>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Service;
