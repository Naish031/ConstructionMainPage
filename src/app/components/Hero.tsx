"use client";
import React from "react";
import GetStarted from "./GetStarted";
import styles from "../style";

import { checkout } from "../../../checkout";
import { BackgroundBeams } from "@/app/components/ui/background-beams";

export default function Heroo() {
  return (
    <section id="home" className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-md mb-2 z-[50]">
        <p className={`${styles.paragraph} text-xs ml-2`}>
          <span className="text-dimWhite">$30/ week</span>{" "}
          <span className="text-dimWhite">
            for expert-led sessions.{" "}
            <span
              className="ml-1 text-white font-bold text-sm cursor-pointer"
              onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: "price_1OpDawHrkKkcZaV4rhP78cxF",
                      quantity: 1,
                    },
                  ],
                });
              }}
            >
              Join Now!
            </span>
          </span>
        </p>
      </div>
      <div className="max-w-2xl mx-auto p-4 flex flex-col justify-center items-center gap-4 relative z-10" >
        <h1 className="relative z-10 text-2xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Sheikh Construction & Renovation
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm md:text-lg text-center relative z-10 mb-4">
          Join our educational course and unleash your potential. Our expert-led
          sessions will guide you through the intricate world of construction
          and renovation, empowering you with the skills and knowledge needed to
          succeed.
        </p>
        <GetStarted />
      </div>
      <BackgroundBeams />
    </section>
  );
}
