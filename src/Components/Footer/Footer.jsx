import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";

import { FaMapLocation } from "react-icons/fa6";
import credit_card from "/assets/credit_cards.png";


const Footer = () => {
  return (
    <footer className="bg-[var(--myPrimaryColor)]">
      <div className="container">
        <div className="grid grid-cols-1 min-sm:grid-cols-1 min-md:grid-cols-3 gap-8 text-white">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold uppercase">coders cafe</h2>
            <p className="text-sm max-w-[300px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
              nisi. Voluptate.
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +1 (123) 456-879
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaMapLocation /> Ahmedabad, Gujarat
              </p>
            </div>
          </div>
          {/* sec div */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Quick Links</h2>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
          {/* third div */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Follow Us</h2>
            <div className="flex items-center gap-4">
              <FaFacebook className="text-2xl hover:scale-105 duration-300" />
              <FaInstagram className="text-2xl hover:scale-105 duration-300" />
              <FaTelegram className="text-2xl hover:scale-105 duration-300" />
              <FaGoogle className="text-2xl hover:scale-105 duration-300" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Payment Methods</h2>
              <img src={credit_card} className="w-[80%] mt-2" alt="" />
            </div>
          </div>
        </div>

        <hr className="mt-10 border-white" />
        <p className="text-center mt-6 text-white">Copywrite © 2024 CoffeeCode. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
