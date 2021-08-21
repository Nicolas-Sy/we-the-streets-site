import { useEffect, useState } from "react";

import H2 from "@/ui/heading/h2";
import H3 from "@/ui/heading/h3";
import P from "@/ui/heading/p";

import styles from "./styles.module.scss";

export default function Raffle() {
  const [scrollState, setScrollState] = useState(0);

  const handleScroll = () => {
    setScrollState(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <section className="flex container mx-auto p-5">
      <div className="mx-auto lg:px-24">
        <div
          className={`duration-300 ease-in text-center  ${
            scrollState < 300 ? "opacity-0" : "opacity-100"
          }`}
        >
          <H2>Rewards</H2>
          <P>
            By helping us annotate, you are eligble to win the following prizes
          </P>
        </div>
        <div
          className={`flex justify-around flex-wrap mt-4 duration-300 ease-in ${
            scrollState < 300 ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className={styles.prize}>
            <H3>First Prize</H3>
            <P className={styles.infoPrize}>
              The contributor who annotated the most.
            </P>
            <P>PHP 1,250</P>
          </div>
          <div className={styles.prize}>
            <H3>Second Prize</H3>
            <P className={styles.infoPrize}>
              The contributor who annotated the 2nd most.
            </P>
            <P>PHP 1,000</P>
          </div>
          <div className={styles.prize}>
            <H3>Third Prize</H3>
            <P className={styles.infoPrize}>
              The contributor who annotated the 3rd most.
            </P>
            <P>PHP 750</P>
          </div>
          <div className={styles.prize}>
            <H3>Refer Prize</H3>
            <P className={styles.infoPrize}>
              The contributor who referred users the most.
            </P>
            <P>PHP 500</P>
          </div>
          <div className={styles.prize}>
            <H3>Raffle Prize</H3>
            <P className={styles.infoPrize}>
              Eight annotators will have a change to win our raffle prize.
            </P>
            <P>
              <span>PHP 250</span>
            </P>
          </div>
        </div>
      </div>
    </section>
  );
}
