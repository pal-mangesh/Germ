import React, { ReactElement } from "react";
import Button from "../../components/button";
import Hero from "../../hoc/hero";
import Features from "../../hoc/features";
import HCSec2 from "../../hoc/hc-sec-2";
import HCSec3 from "../../hoc/hc-sec-3";
import HCSec4 from "../../hoc/hc-sec-4";
import HCSec5 from "../../hoc/hc-sec-5";
import Calc from "../../hoc/hc-cal"
import PaymentIcons from "../../hoc/Payment-icon"
import CardSec from "../../hoc/card-sec-1";
import Achivement from "../../Achivement-banner"
import UserCount from "../../hoc/user-count";
import MailInfo from "../../hoc/Mailing-info";
import NewsLetter from "../../hoc/newsletter";



export interface HomeContainerProps {}

export default function HomeContainer(
  props: HomeContainerProps
): ReactElement | null {
  return (
    <>
      <Hero />
      <Features />
      <HCSec2 />
      <HCSec3 />
      <Calc />
      <PaymentIcons/>
      <CardSec/>
      <Achivement />
      <HCSec4 />
      <UserCount />
      <HCSec5/>
      <MailInfo />
      <NewsLetter/>
      
    </>
  );
}
