import React, { ReactElement } from "react";
// import Featuer1Icon from "../../images/feature_one_icon.svg";
// import Featuer2Icon from "../../images/feature_two_icon.svg";
// import Featuer3Icon from "../../images/feature_three_icon.svg";
import AboutUsSec1 from "../../hoc/about-us-sec-1";
import AboutUsSec2 from "../../hoc/about-us-sec-2";
import AboutUsSec3 from "../../hoc/about-us-sec-3";
import AboutUsSec4 from "../../hoc/about-us-sec-4";
import AboutUsSec5 from "../../hoc/about-us-sec-5";

import Button from "../../components/button/index";
import Heading from "../../components/heading";


export default function AboutUs(props: Props): ReactElement | null {
  
  return (
    <>
      <AboutUsSec1 />
      <AboutUsSec2 />
      <AboutUsSec3 />
      <AboutUsSec4 />
      <AboutUsSec5 />
      
          </>
  );
}
