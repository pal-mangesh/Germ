import React, { ReactElement } from "react";
import Button from "../../components/button";
import Hero from "../../hoc/hero";
import Features from "../../hoc/features";
import HCSec2 from "../../hoc/hc-sec-2";
export interface HomeContainerProps {}

export default function HomeContainer(
  props: HomeContainerProps
): ReactElement | null {
  return (
    <>
      <Hero />
      <Features />
      <HCSec2 />
    </>
  );
}
