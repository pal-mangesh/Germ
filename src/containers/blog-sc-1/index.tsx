import React, { ReactElement } from "react";
// import Button from "../../components/button";
import Heading from "../../components/heading";
import Sec2Image from "../../images/sec-2-img.png";

export interface BlogSc1Props {}

export default function BlogSc1(props: BlogSc1Props): ReactElement | null {
  return (
    <>
      <div className="-max-w-1366 mx-auto p-8 flex w-full">
        <div className="w-full">
          <Heading>
            <h3>Blogs</h3>
          </Heading>

          <div className="w-full shadow-md ">
            <img src={Sec2Image} className="w-full pt-8 h-96 p-4" />
            <div className="flex align-middle ">
              <h4 className="p-8 pb-0">
                Hauptlebensversicherung: Unternehmensbericht 2020 [Für Ärzte]
              </h4>
              <div className="p-8 pb-0 ">
                <h6 className=" p-2 text-white rounded-md bg-pink-600">
                  5 mins read
                </h6>
              </div>
            </div>
            <h6 className="pl-8 ">October 6, 2020 | kredit</h6>
            <div className=" p-8 text-justify">
              Sie widmen Ihr Leben dem Wohl anderer. Aber selbst Sie können
              nicht vorhaben, sich für immer um Ihre Lieben zu kümmern. Wenn
              Ihre Zeit gekommen ist, kann Ihnen die Lebensversicherung eines
              Arztes helfen - solange Sie einen Plan haben. Laut dem Insurance
              Information ...
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 shadow-md mr-4 pt-8">
              <img src={Sec2Image} className="w-full pt-8 h-96 p-4" />
              <div className="flex align-middle ">
                <h4 className="p-8 pb-0">
                  Refinanzierung Ihrer Hypothek in Deutschland
                </h4>
                <div className="p-8 pb-0 ">
                  <h6 className=" p-2 flex flex-nowrap w-36 justify-center  text-white rounded-md bg-pink-600">
                    10 mins read
                  </h6>
                </div>
              </div>
              <h6 className="pl-8 pt-4 ">September 1, 2020 | 24sofort-kredit</h6>
              <div className=" p-8 text-justify">
                Bei der Hypothekenfinanzierung verpflichten Sie sich von Anfang
                an für eine lange Zeit bei Ihrer Bank, indem Sie die Zinsen für
                eine bestimmte Laufzeit festlegen. Abhängig von der festen
                Zinsdauer, für die Sie sich zu Beginn entschieden haben, haben
                Sie einen Vertrag über mi...
              </div>
            </div>
            <div className="w-1/2 shadow-md ml-4 pt-8 ">
              <img src={Sec2Image} className="w-full pt-8 h-96 p-4" />
              <div className="flex align-middle ">
                <h4 className="p-8 pb-0">
                  Coronavirus und der deutsche Wohnungsmarkt: 4 Dinge, die Sie
                  tun können, um sich auf Ihre deutsche Hypothek vorzubereiten{" "}
                </h4>
                <div className="p-8 pb-0 ">
                  <h6 className=" p-2 flex flex-nowrap w-36 justify-center text-white rounded-md bg-pink-600">
                    5 mins read
                  </h6>
                </div>
              </div>
              <h6 className="pl-8 pt-4 ">August 6, 2020 | Tom</h6>
              <div className=" p-8 text-justify">
                Da immer mehr Länder weltweit Sperrmaßnahmen ergreifen, um den
                Ausbruch des Coronavirus zu unterstützen und zu kontrollieren,
                wird unser tägliches Leben immer unsicherer. Pläne für die
                Zukunft könnten auf Eis gelegt worden sein - es gibt einige
                Ideen, wie si...
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 shadow-md mr-4 pt-8">
              <img src={Sec2Image} className="w-full pt-8 h-96 p-4" />
              <div className="flex align-middle ">
                <h4 className="p-8 pb-0">
                  Refinanzierung Ihrer Hypothek in Deutschland
                </h4>
                <div className="p-8 pb-0 ">
                  <h6 className=" p-2 flex flex-nowrap w-36 justify-center  text-white rounded-md bg-pink-600">
                    10 mins read
                  </h6>
                </div>
              </div>
              <h6 className="pl-8 pt-4 ">September 1, 2020 | 24sofort-kredit</h6>
              <div className=" p-8 text-justify">
                Bei der Hypothekenfinanzierung verpflichten Sie sich von Anfang
                an für eine lange Zeit bei Ihrer Bank, indem Sie die Zinsen für
                eine bestimmte Laufzeit festlegen. Abhängig von der festen
                Zinsdauer, für die Sie sich zu Beginn entschieden haben, haben
                Sie einen Vertrag über mi...
              </div>
            </div>
            <div className="w-1/2 shadow-md ml-4 pt-8 ">
              <img src={Sec2Image} className="w-full pt-8 h-96 p-4" />
              <div className="flex align-middle ">
                <h4 className="p-8 pb-0">
                  Coronavirus und der deutsche Wohnungsmarkt: 4 Dinge, die Sie
                  tun können, um sich auf Ihre deutsche Hypothek vorzubereiten{" "}
                </h4>
                <div className="p-8 pb-0 ">
                  <h6 className=" p-2 flex flex-nowrap w-36 justify-center text-white rounded-md bg-pink-600">
                    5 mins read
                  </h6>
                </div>
              </div>
              <h6 className="pl-8 pt-4 ">August 6, 2020 | Tom</h6>
              <div className=" p-8 text-justify">
                Da immer mehr Länder weltweit Sperrmaßnahmen ergreifen, um den
                Ausbruch des Coronavirus zu unterstützen und zu kontrollieren,
                wird unser tägliches Leben immer unsicherer. Pläne für die
                Zukunft könnten auf Eis gelegt worden sein - es gibt einige
                Ideen, wie si...
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
}
