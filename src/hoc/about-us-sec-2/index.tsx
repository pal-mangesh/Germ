import React, { ReactElement } from "react";



interface AboutUsData {
  icon?: any;
  title: string;
  description: string;
}
export interface AboutUssec2Props {}

export default function CardSec(props: AboutUssec2Props): ReactElement | null {
  const about: AboutUsData[] = [
    {
      title: " Prozess am selben Tag ",
      description: `Wir bieten Zahlungsoptionen an, die alle 100% sicher sind`,
    },
    {
      title: "Online-Prozess",
      description: `Natürlich sind Ihre Kontaktdaten bei uns sicher`,
    },
    {
      title: "Akzeptiere und bekomme Geld",
      description: `Wir bieten Zahlungsoptionen an, die alle 100% sicher sind.`,
    },
  ];

  return (
    <>
      <div className="items-center flex flex-wrap -max-w-1366 mx-auto p-8 pb-0">
        <h3 className="flex pt-8">Warum uns wählen</h3>
      </div>

      <div className="flex   -max-w-1366 mx-auto p-8">
        {about && about.length
          ? about.map((f: AboutUsData) => (
              <div className="flex flex-col mr-8 shadow-md">
                <h4>{f.title}</h4>
                <h6>{f.description}</h6>
              </div>
            ))
          : ""}
      </div>


    </>
  );
}
