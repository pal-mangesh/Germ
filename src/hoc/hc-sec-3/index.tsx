import React, { ReactElement } from "react";
import Heading from "../../components/heading";

export interface FeaturesListProps {}

export default function HCSec3(props: FeaturesListProps): ReactElement | null {
  return (
    <div className="-max-w-1366 mx-auto p-8  w-full">
      <div className="w-full ">
        <Heading position="center">
          <div className="flex justify-center align-middle text-center">
            <h3 className=" pr-4 ">3</h3>
            <h3 className=" ">
              einfache Schritte um Ihr Geld online zu bekommen
            </h3>
          </div>
        </Heading>
      </div>
      <div className="flex pt-8 w-full">
        <div className="justify-start  align-middle w-2/5">
          <div className="align-top ">
            <h4 className="pt-2">Choose your amount</h4>
            <h6 className="pt-2">
              Select the amount of loan that you require, along with the time
              period you wish to payup your loan.
            </h6>
          </div>

          <div className="align-bottom pt-40">
            <h4 className="pt-2">Get your money in 2 hours</h4>
            <h6 className="pt-2">
              Select the amount of loan that you require, along with the time
              period you wish to payup your loan.
            </h6>
          </div>
        </div>
        <div className="justify-center text-center align-middle w-1/5"></div>
        <div className=" pt-28  align-middle w-2/5">
          <h4 className="pt-2">Fill up personal details</h4>
          <h6 className="pt-2">
            Fill up your personal details, like name, email, phone number and
            similar details. We don’t share your details with anyone! (execpt
            loan vendors)
          </h6>
        </div>
      </div>
    </div>
  );
}
