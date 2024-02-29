import React from "react";
import styles from "../style";
import { arrowUp } from "../../assets";
import Image from "next/image";
import { checkout } from "../../../checkout";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-b from-neutral-200 to-neutral-600 p-1 cursor-pointer`}
    onClick={() => {
      checkout({
        lineItems: [
          {
            price: "price_1Op4XOHrkKkcZaV47J3J3ngK",
            quantity: 1,
          },
        ],
      });
    }}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-semibold text-base leading-5 text-neutral-200">
          Get
        </p>
        <Image
          priority
          src={arrowUp}
          alt="arrow point up"
          className="ml-1 object-contain w-[20px] h-[20px]"
        />
      </div>
      <p className="font-poppins font-semibold text-base leading-5 text-neutral-200">
        Started
      </p>
    </div>
  </div>
);

export default GetStarted;
