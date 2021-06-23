
import React, { ReactElement } from "react";
import Button from "../../components/button";

export interface CalcProps {}

export default function Calc(props: CalcProps): ReactElement | null {
  return (
    <div className="-max-w-1366 mx-auto  p-8  w-full" >
      <div className="calc-border">
      <div className="flex pt-4 w-full " >
        <div className="w-1/3" style={{ borderBottom: "1px solid #EC4899" }}  ></div>
        <h4 className="w-1/3 justify-center text-center">
          How much money do you need?
        </h4>
        <div
          className="w-1/3 "
          style={{ borderBottom: "1px solid #EC4899" }}
        ></div>
      </div>
      <div>
        <div className="flex w-full">
          <h4 className="p-8 w-1/2 justify-start">Choose Amount</h4>
          <h4 className="p-8 w-1/2 justify-end text-right">$ 4,500</h4>
        </div>
        <div className="w-full pl-10 pr-10">
          <div
            className=" justify-center align-middle text-center"
            style={{ borderBottom: "10px solid #ec4899" }}
          ></div>
        </div>
        <div className="flex w-full">
          <h5 className="p-8 w-1/2 justify-start">$ 500</h5>
          <h5 className="p-8 w-1/2 justify-end text-right">$ 30,000+</h5>
        </div>
      </div>
      <div>
        <div className="flex w-full">
          <h4 className="p-8 w-1/2 justify-start">Choose Tenure</h4>
          <h4 className="p-8 w-1/2 justify-end text-right">5 Months</h4>
        </div>
        <div className="w-full pl-10 pr-10">
          <div
            className=" justify-center align-middle text-center "
            style={{ borderBottom: "10px solid #ec4899" }}
          ></div>
        </div>
        <div className="flex w-full">
          <h5 className="p-8 w-1/2 justify-start">14 Days</h5>
          <h5 className="p-8 w-1/2 justify-end text-right">60+ Months</h5>
        </div> 
      </div>
      <div
        className="w-full p-4 "
        style={{ borderBottom: "1px solid #ec4899" , width:"80%"  ,  }}
      ></div>
      <div className="flex w-full">
        <div className="justify-center text-center w-1/3">
          <h5 className="text-center pt-4">You Get</h5>{" "}
          <h4 className="text-center pt-4">$ 4,500</h4>
        </div>
        <div className="justify-center text-center w-1/3">
          <h5 className="text-center pt-4">Tenure</h5>{" "}
          <h4 className="text-center pt-4">5 Months</h4>
        </div>
        <div className="justify-center text-center w-1/3">
          <h5 className="text-center pt-4">You Return</h5>{" "}
          <h4 className="text-center pt-4">$4,550</h4>
        </div>
      </div>
      <div className="text-center pt-8 pb-8"><Button title="Apply now"/></div>
      </div>
    </div>
  );
}
