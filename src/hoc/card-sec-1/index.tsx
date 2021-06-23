import React, { ReactElement } from "react";
import Heading from "../../components/heading";
import CardImg1 from "../../images/Rectangle 23.png";
import CardImg2 from "../../images/Rectangle 23 (1).png";
import CardImg3 from "../../images/sec-4-slide-1.png";

export interface CardProps {}

export default function CardSec(props: CardProps): ReactElement | null {
  return (
    <>
      <div className="-max-w-1366 mx-auto p-8  w-full">
        <div className="w-full pt-8 ">
          <Heading position="center">
            <div className="flex pt-4 justify-center align-middle text-center">
              <h3 className=" ">
                Holen Sie sich spezielle Kredite für Ihre individuellen
                Bedürfnisse!{" "}
              </h3>
            </div>
          </Heading>
        </div>

        <div className="flex pt-8 w-full ">
          <div className=" w-1/3 m-4 shadow-md ">
            <img
              src={CardImg1}
              className="w-full justify-items-center text-center pt-4 pb-4"
            />
            <div className="align-top p-4">
              <h4 className="pt-2">Medical Loans</h4>
              <h6 className="pt-2">
                Proin at aliquet libero. Donec laoreet ante ligula, vitae
                pretium elit dapibus eget. Aenean gravida vehicula metus, quis
                pulvinar libero
              </h6>
            </div>
            <div className="p-4 text-pink-500 text-right ">Read more</div>
          </div>
          <div className=" w-1/3 m-4 shadow-md ">
            <img
              src={CardImg2}
              className="w-full justify-items-center text-center pt-4 pb-4"
            />
            <div className="align-top p-4">
              <h4 className="pt-2">Vehicle Loans</h4>
              <h6 className="pt-2">
                Proin at aliquet libero. Donec laoreet ante ligula, vitae
                pretium elit dapibus eget. Aenean gravida vehicula metus, quis
                pulvinar libero
              </h6>
            </div>
            <div className="p-4 text-pink-500 text-right ">Read more</div>
          </div>
          <div className=" w-1/3 m-4 shadow-md ">
            <img
              src={CardImg3}
              className="w-full justify-items-center text-center pt-4 pb-4"
            />
            <div className="align-top p-4">
              <h4 className="pt-2">Home Improvement</h4>
              <h6 className="pt-2">
                Proin at aliquet libero. Donec laoreet ante ligula, vitae
                pretium elit dapibus eget. Aenean gravida vehicula metus, quis
                pulvinar libero
              </h6>
            </div>
            <div className="p-4 text-pink-500 text-right ">Read more</div>
          </div>
        </div>
      </div>
    </>
  );
}
