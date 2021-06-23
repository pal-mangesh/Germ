import React, { ReactElement } from "react";
import Button from "../../components/button/index";
import mail from "../../images/mail.svg";

export interface NewsLetterProps {}

export default function NewsLetter(
  props: NewsLetterProps
): ReactElement | null {
  return (
    <>
      <div
        className=" mx-auto p-12 flex  w-full"
        style={{ borderTop: "2px solid #EC4899" }}
      >
        <div className="w-1/2 flex ">
          <div className=" flex align-middle justify-items-end text-right">
            <img src={mail} className=" max-w-md pl-64 pr-14" />
          </div>
          <div>
            <h4>Lernen Sie unsere Angebote kennen ...</h4>
            <h3>Abonniere unseren Newsletter</h3>
          </div>
        </div>
        <div className="w-1/2 flex align-middle justify-items-start text-left">
          <div className="  flex align-middle justify-items-start text-left">
            <input type="text" placeholder="Please Enter your Email Id :" />
          </div>
          <div className=" pt-4 pl-8 align-middle justify-items-end text-right">
            <Button title="Apply now" />
          </div>
        </div>
      </div>
      <div className=" w-full" style={{ borderTop: "2px solid #EC4899" }}></div>
    </>
  );
}
