import React, { ReactElement } from "react";
import Button from "../../components/button";
import Heading from "../../components/heading";
import Sec2Image from "../../images/Rectangle 23 (1).png";

export interface HCSec5Props {}

export default function HCSec5(props: HCSec5Props): ReactElement | null {
  return (
    <>
      <div className="-max-w-1366 mx-auto p-14   ">
        <Heading position="center">
          <h3 className="text-center p-8 pb-0">Was sagen unsere Kunden über uns?</h3>
        </Heading>
        <div className=" shadow-md">
          <div className="flex flex-wrap justify-center">
              <img
                src={Sec2Image}
                className="  rounded-full pt-8 h-40 align-middle"
              />
          </div>
          <h6 className="p-14">
            Hunderte von Kunden vertrauen unserem Unternehmen, das Geld für ihre
            Bedürfnisse erhalten hat, Hunderte von Kunden vertrauen unserem
            Unternehmen, das Geld für ihre Bedürfnisse erhalten hat, Hunderte
            von Kunden vertrauen unserem Unternehmen, das Geld für ihre
            Bedürfnisse erhalten hat Hunderte von Kunden vertrauen unserem Unternehmen, das Geld für ihre
            Bedürfnisse erhalten hat, Hunderte von Kunden vertrauen unserem
            Unternehmen, das Geld für ihre Bedürfnisse erhalten hat, Hunderte
            von Kunden vertrauen unserem Unternehmen, das Geld für ihre
            Bedürfnisse erhalten hat Hunderte von Kunden vertrauen unserem Unternehmen, das Geld für ihre
            Bedürfnisse erhalten hat, Hunderte von Kunden vertrauen unserem
            Unternehmen, das Geld für ihre Bedürfnisse erhalten hat, Hunderte
            von Kunden vertrauen unserem Unternehmen, das Geld für ihre
            Bedürfnisse erhalten hat
          </h6>
        </div>
      </div>
    </>
  );
}
