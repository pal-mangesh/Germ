
import React, { ReactElement } from "react";

export interface AchivementDataProps {}

export default function Achivement(props: AchivementDataProps): ReactElement | null {
  return (
    <>
    <div className=" mx-auto p-10 flex   w-full" style={{ borderTop: "2px solid #EC4899"}} >
        <div className="w-1/3 border-r-2 justify-items-center text-center ">
        <h3 className="text-pink-600" >99%</h3>
        <h4  >Loan Approvals</h4>
        </div>
        <div className="w-1/3 border-r-2 justify-items-center text-center">
        <h3 className="text-pink-600" >$60K+</h3>
        <h4  >Daily Disbursment</h4>
        </div>
        <div className="w-1/3  justify-items-center text-center">
        <h3 className="text-pink-600" >1000+</h3>
        <h4  >Happy Clients</h4>
        </div>
    </div>
    <div style={{ borderTop: "2px solid #EC4899"}}></div>
    </>
  );
}
