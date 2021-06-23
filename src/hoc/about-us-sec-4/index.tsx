import React, { ReactElement } from "react";
import Button from "../../components/button";




export interface Props {}

export default function CardSec(props: Props): ReactElement | null {
  return (
    <>
      <div
        className="w-full flex justify-center pt-8 text-gray-100 pb-8"
        style={{ backgroundColor: "#160f42" }}
      >
        <div className=" text-center">
          <h4>Benötigen Sie jetzt Geld? Warten Sie nicht!</h4>
          <h5 className="flex justify-center p-4">
            Machen Sie sich mit zuverlässigem 24sofort-kredit.de wieder auf den
            Weg der finanziellen Gesundheit
          </h5>
          <div className=" flex justify-center pt-8">
            <Button title="Loslegen" />
          </div>
        </div>
      </div>
      

    </>
  );
}
