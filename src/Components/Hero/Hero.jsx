import black from "/assets/black.png";
import Navbar from "../Navbar/Navbar";

import { motion } from "motion/react";
import styled from "styled-components";

import mainBackground from '/public/assets/bg_slate.png'


const Hero = () => {
  return (
    <Wrapper>
      <section className="relative">
        <div className="container">
          {/* navbar */}
          <Navbar myname={"Daksh"} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[500px]">
            <div className="text-[var(--myLightOrange)] text-left space-y-12">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                }}
                className="text-4xl min-sm:text-4xl min-md:text-7xl leading-tight font-bold"
              >
                Black Tumbler
              </motion.h1>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.8,
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                }}
              >
                <div className="relative z-10 space-y-4">
                  <h2 className="text-2xl">Black Lifestyle Loveres,</h2>
                  <h2 className="opacity-50 text-sm leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique distinctio consequuntur, reiciendis nemo officiis
                    hic magni, sapiente perspiciatis vero molestiae, excepturi
                    iste aperiam omnis. Dolorem ipsa quasi officiis facilis
                    quam!
                  </h2>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[200px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring" }}
                src={black}
                className="blackcoffee relative z-40 h-[400px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
                alt=""
              />
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 1 }}
                className="absolute w-[180px] h-[180px] border-[var(--myPrimaryColor)] border-[20px] rounded-full z-10 top-10 -right-10"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", delay: 1 }}
                className="absolute top-0 left-[100px] z-[1]"
              >
                <h2 className="text-[var(--myDarkGray)] leading-none font-bold text-[120px]">
                  Black Tumbler
                </h2>
              </motion.div>
            </div>
            <motion.div
              className="text-[var(--myLightOrange)] text-left space-y-12"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                type: "spring",
                damping: 10,
                stiffness: 100,
              }}
            >
              <h1 className="text-4xl opacity-0 min-sm:text-4xl min-md:text-7xl leading-tight font-bold">
                Black Tumbler
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h2 className="text-2xl">Black Tumbler,</h2>
                  <h2 className="opacity-50 text-sm leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique distinctio consequuntur.
                  </h2>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[200px] bg-[var(--myDarkGray)]/50 hidden min-sm:hidden min-md:hidden min-lg:block"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.main`
  &{
    background : url(${mainBackground});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`