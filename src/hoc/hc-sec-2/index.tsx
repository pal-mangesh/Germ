import React, { ReactElement } from "react";
import Heading from "../../components/heading";
import Sec2Image from "../../images/sec-2-img.png";
export interface FeaturesProps {}

export default function HCSec2(props: FeaturesProps): ReactElement | null {
  return (
    <div className="-max-w-1366 mx-auto p-8 flex w-full">
      <div className="w-full md:w-1/2">
        <Heading>
          <h3>
            Hunderte von Kunden vertrauen unserem Unternehmen, das Geld für ihre
            Bedürfnisse erhalten hat
          </h3>
        </Heading>
        <div className="py-4">
          <h6>
            Hunderte von Kunden vertrauen unserem Unternehmen, das Geld für ihre
            Bedürfnisse erhalten hat, Hunderte von Kunden vertrauen unserem
            Unternehmen, das Geld für ihre Bedürfnisse erhalten hat, Hunderte
            von Kunden vertrauen unserem Unternehmen, das Geld für ihre
            Bedürfnisse erhalten hat
          </h6>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img src={Sec2Image} className="w-full p-12 pt-0" />
      </div>
    </div>
  );
}
