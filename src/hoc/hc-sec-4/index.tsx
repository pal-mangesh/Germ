import React, { ReactElement } from "react";
import Button from "../../components/button";
import Heading from "../../components/heading";
import Sec2Image from "../../images/sec-2-img.png";

export interface HCSec4Props {}

export default function HCSec4(props: HCSec4Props): ReactElement | null {
  return (
    <div className="-max-w-1366 mx-auto p-8  flex w-full">
      <div className="w-full  md:w-1/2"></div>
      <div className="w-full py-8 md:w-1/2">
        <Heading>
          <h3>
            Möchten Sie an einer renommierten Universität studieren? Nehmen Sie
            unsere Kredite und bezahlen Sie jetzt Ihr Studium
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
        <Button title="Apply now" />
      </div>
    </div>
  );
}
