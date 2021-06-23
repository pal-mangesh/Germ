import React, { ReactElement } from "react";
import Heading from "../../components/heading";



export interface AboutUssec2Props {}

export default function CardSec(props: AboutUssec2Props): ReactElement | null {
  
  return (
    <>
      <div className=" w-full -max-w-1366 mx-auto p-8">
        <Heading position="center">
          <h3 className="flex align-middle justify-center ">
            Finanzielle Unterstützung, die Sie verdienen
          </h3>
        </Heading>
        <h6 className="pt-8 text-justify">
          Befanden Sie sich in einer extrem angespannten Geldsituation? Keine
          Panik. Ein persönlicher Kredit kann genau das sein, wonach Sie suchen.
          Es ist ein Geldbetrag, den Sie langfristig von einem seriösen
          Kreditgeber leihen und über einen längeren Zeitraum in kleinen Raten
          zurückzahlen. Das Beste daran ist, dass ein Privatkredit leichter
          zugänglich ist als eine Kreditlinie, da viele Online-Kreditgeber nicht
          so wählerisch sind und keinen Kredit begrüßen.
        </h6>
      </div>
      

    </>
  );
}
