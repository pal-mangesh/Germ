import React, { ReactElement } from "react";
import  visaicon from "../../images/visa-icon.svg";
import  mastericon from "../../images/master-icon.svg";
import  paypalicon from "../../images/paypal-icon.svg";
import  payoneericon from "../../images/payoneer-icon.svg";
import  skrillicon from "../../images/skrill-icon.svg";
import  amexicon from "../../images/amex-icon.svg";




export interface PaymentIconsProps {}

export default function PaymentIcons(
  props: PaymentIconsProps
): ReactElement | null {
  return (
    <>
    <div className="pt-12   w-full" style={{ borderBottom: "2px solid #EC4899"}} >
      <div className=" w-full" style={{ borderTop: "2px solid #EC4899"}} >
    <div className="p-8   w-full">
      <div className="flex">
        <img src={visaicon} className=" max-w-md pl-40 pr-40" />
        <img src={mastericon} className=" max-w-md  pr-40" />
        <img src={paypalicon} className=" max-w-md pr-40" />
        <img src={payoneericon} className=" max-w-md pr-40" />
        <img src={skrillicon} className=" max-w-md pr-40" />
        <img src={amexicon} className=" max-w-md p-4" />


      </div>
</div>
    </div>
    </div>
    </>
  );
}
