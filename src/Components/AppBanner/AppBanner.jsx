import "./AppBanner.css";
import gPlay from "/assets/app_banner/play_store.png";
import aStore from "/assets/app_banner/app_store.png";
import { motion } from "motion/react";

const AppBanner = () => {
  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="mybg sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h2 className="text-2xl text-center sm:text-4xl font-semibold">
              Download this app
            </h2>

            <p className="text-center sm:px-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              odio velit!
            </p>
            <div className="flex justify-center item-center">
              <a href="">
                <img src={gPlay} alt="" />
              </a>
              <a href="">
                <img src={aStore} alt="" className="h-[88%]" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppBanner;