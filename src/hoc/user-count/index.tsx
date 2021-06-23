import React, { ReactElement } from "react";
import Button from "../../components/button/index";

export interface UserCountProps {}

export default function UserCount(props: UserCountProps): ReactElement | null {
  return (
    <>
      <div
        className=" mx-auto p-12 flex  w-full"
        style={{ borderTop: "2px solid #EC4899" }}       >
        <div className="w-1/4 pr-14 align-middle justify-items-end text-right ">
          <h2 className="text-pink-600">200+</h2>
        </div>
        <div className="w-1/2 pl-14 align-middle justify-items-start text-left">
          <h4>
            Dank unserer Darlehen hatten die Menschen die Möglichkeit, an einer
            angesehenen Universität zu studieren
          </h4>
        </div>
        <div className="pl-14 pt-2">
          <Button title="Apply now" />
        </div>
      </div>
      <div className=" w-full" style={{ borderTop: "2px solid #EC4899" }}></div>
    </>
  );
}
